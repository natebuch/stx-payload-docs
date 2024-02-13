import { useState } from "react";
import { StacksMocknet, StacksDevnet, StacksTestnet} from '@stacks/network';
import { 
  makeContractCall,
  broadcastTransaction,
  AnchorMode,
  bufferCVFromString,
  standardPrincipalCV,
  uintCV,
  NonFungibleConditionCode,
  FungibleConditionCode,
  createAssetInfo,
  makeStandardNonFungiblePostCondition,
  makeStandardSTXPostCondition,
} from '@stacks/transactions';

  //Stacks network
  const mocknet = new StacksMocknet();
  const testnet = new StacksTestnet();

  //STX Addresses
const stxAddress = 'ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM';
const stxAddressDevnet = 'ST1SJ3DTE5DN7X54YDH5D64R3BCB6A2AG2ZQ8YPD5';
const stxAddressDevnetOne = 'ST2JHG361ZXG51QTKY2NQCVBPPRRE2KZB1HR05NNC';  
const stxAddressDevnetTwo = 'ST2CY5V39NHDPWSXMW9QDT3HC3GD6Q6XX4CFRK9AG';
const stxAddressTestnet = 'ST2ST2H80NP5C9SPR4ENJ1Z9CDM9PKAJVPYWPQZ50';
const stxAddressTestnetTwo = 'ST2Y2SFNVZBT8SSZ00XXKH930MCN0RFREB2GQG7CJ';
const stxAddressTestnetThree = 'STPJ2HPED2TMR1HAFBFA5VQF986CRD4ZWHH36F6X';
const contractNameDev = 'test-functions-v4';
const contractNameTest = 'test-functions-v4';

//Devnet test-functions
const devnetFunctions = {
  network: mocknet,
  networkString: "devnet",
  contractName: contractNameDev,
  recipient: stxAddressDevnet
}


//Testnet test-Functions-v2
const testnetFunctionsV2 = {
  network: testnet,
  networkString: "testnet",
  contractName: contractNameTest,
  recipient: stxAddressTestnet
}

function App() {
  const [network, setNetwork] = useState(mocknet)
  const [networkString, setNetworkString] = useState(devnetFunctions.networkString)
  const [contractName, setContractName] = useState(contractNameDev)
  const [broadcastResponse, setBroadcastResponse] = useState()
  const [stxRecipient, setStxRecipient] = useState(stxAddressDevnet)

  const handleSetTestnet = () => {
    setNetwork(testnetFunctionsV2.network)
    setNetworkString(testnetFunctionsV2.networkString)
    setContractName(testnetFunctionsV2.contractName)
    setStxRecipient(testnetFunctionsV2.recipient)
  }
  const handleSetDevnet = () => {
    setNetwork(devnetFunctions.network)
    setNetworkString(devnetFunctions.networkString)
    setContractName(devnetFunctions.contractName)
    setStxRecipient(devnetFunctions.recipient)
  }

  const handleNetworkDev = () => {
    setNetwork(mocknet)
  }
  const handleNetworkTest = () => {
    setNetwork(testnet)
  }

  const handleStxRecipientDevnet = () => {
    setStxRecipient(stxAddressDevnet)
  }

  const handleStxRecipientTestnet = () => {
    setStxRecipient(stxAddressTestnet)
  }

  const handleContractDevnet = () => {
    setContractName(contractNameDev)
  }

  const handleContractTestnet = () => {
    setContractName(contractNameTest)
  }

//Transaction Options

//   Clarity Function
//   (define-public (hello-memo (memo (buff 34)))
//     (begin 
//       (print memo)
//       (ok true)
//     )  
//   )

  const helloMemoFuncArgs = [bufferCVFromString("Hello Worlds")];

  const helloMemoPostConditions = [];

  const helloMemo = {
    contractAddress: stxAddress,
    contractName: contractName,
    functionName: 'hello-memo',
    functionArgs: helloMemoFuncArgs,
    postConditions: helloMemoPostConditions,
    senderKey: '753b7cc01a1a2e86221266a154af739463fce51219d97e4f856cd7200c3bd2a601',
    network,
    anchorMode: AnchorMode.Any,
  };

  // Clarity function
  // (define-public (mint-ft (amount uint) (recipient principal))
  //   (ft-mint? doc-ft amount recipient)
  // )
  const mintFtFunctionArguments = [
    uintCV(100),
    standardPrincipalCV(stxAddress)
  ];

  const mintFtPostConditions = [];

  const mintFt = {
    contractAddress: stxAddress,
    contractName: contractName,
    functionName: 'mint-ft',
    functionArgs: mintFtFunctionArguments,
    postConditions: mintFtPostConditions,
    senderKey: '753b7cc01a1a2e86221266a154af739463fce51219d97e4f856cd7200c3bd2a601',
    network,
    anchorMode: AnchorMode.Any,
  };

  // Clarity function
  // (define-public (mint-nft (id uint) (recipient principal))
  //   (nft-mint? doc-nft id recipient)
  // )

  const nftId = 5

  const mintNftFunctionArguments = [
    uintCV(nftId),
    standardPrincipalCV(stxRecipient)
  ];

  const assetContract = stxAddress
  const postConditionAddressNFT = stxRecipient //recipient
  const nftPostConditionCode = NonFungibleConditionCode.DoesNotSend
  const assetContractName = contractName
  const assetName = 'doc-nft'
  const tokenAssetName = bufferCVFromString('doc-nft')
  const nonFungibleAssetInfo = createAssetInfo(
      assetContract,
      assetContractName,
      assetName
  )

  const mintNftPostConditions = [
    makeStandardNonFungiblePostCondition(
      postConditionAddressNFT,
      nftPostConditionCode,
      nonFungibleAssetInfo,
      tokenAssetName
    )
  ]

  //when specifying the recipient for a mint (without transfer) the code should be DoesNotSend

  const mintNft = {
    contractAddress: stxAddress,
    contractName: contractName,
    functionName: 'mint-nft',
    functionArgs: mintNftFunctionArguments,
    postConditions: mintNftPostConditions,
    senderKey: '753b7cc01a1a2e86221266a154af739463fce51219d97e4f856cd7200c3bd2a601',
    network,
    anchorMode: AnchorMode.Any,
  };

  // Clarity function
  // (define-public (send-stx (amount uint) (sender principal) (recipient principal))
  //   (as-contract (stx-transfer? amount sender recipient))
  // )
  const stxConditionCode = FungibleConditionCode.LessEqual;
  const stxConditionAmount = 50000000; // denoted in microstacks
  const postConditionAddressStx = stxAddress //recipient


  const sendStxFunctionArguments = [
    uintCV(50),
    standardPrincipalCV(stxAddress),
    standardPrincipalCV(stxRecipient)
  ];

  const sendStxPostConditions = [
    makeStandardSTXPostCondition(
      postConditionAddressStx, //the sender
      stxConditionCode,
      stxConditionAmount
    )
  ];

  const sendStx = {
    contractAddress: stxAddress,
    contractName: contractName,
    functionName: 'send-stx',
    functionArgs: sendStxFunctionArguments,
    postConditions: sendStxPostConditions,
    senderKey: '753b7cc01a1a2e86221266a154af739463fce51219d97e4f856cd7200c3bd2a601',
    network,
    anchorMode: AnchorMode.Any,
  };

  // Clarity function
  // (define-public (send-stx-memo (amount uint) (sender principal) (recipient principal) (memo (buff 34)))
  //   (as-contract (stx-transfer-memo? amount sender recipient))
  // )
  const stxMemoConditionCode = FungibleConditionCode.LessEqual;
  const stxMemoConditionAmount = 50000000; // denoted in microstacks
  const postConditionAddressStxMemo = stxAddress //recipient


  const sendStxMemoFunctionArguments = [
    uintCV(50),
    standardPrincipalCV(stxAddress),
    standardPrincipalCV(stxRecipient),
    bufferCVFromString('memo test')
  ];

  const sendStxMemoPostConditions = [
    makeStandardSTXPostCondition(
      postConditionAddressStxMemo, //the sender
      stxMemoConditionCode,
      stxMemoConditionAmount
    )
  ];

  const sendStxMemo = {
    contractAddress: stxAddress,
    contractName: contractName,
    functionName: 'send-stx-memo',
    functionArgs: sendStxMemoFunctionArguments,
    postConditions: sendStxMemoPostConditions,
    senderKey: '753b7cc01a1a2e86221266a154af739463fce51219d97e4f856cd7200c3bd2a601',
    network,
    anchorMode: AnchorMode.Any,
  };

  // (define-public (send-stx-embedded-memo)
  //   (stx-transfer-memo? u100 tx-sender 'ST1SJ3DTE5DN7X54YDH5D64R3BCB6A2AG2ZQ8YPD5 (unwrap-panic (to-consensus-buff? "Here lies memo")))
  // )
  const stxEmbeddedMemoConditionCode = FungibleConditionCode.LessEqual;
  const stxEmbeddedMemoConditionAmount = 100000000; // denoted in microstacks

  const sendStxEmbeddedMemoFunctionArguments = [
  ];

  const sendStxEmbeddedMemoPostConditions = [
    makeStandardSTXPostCondition(
      postConditionAddressStxMemo, //the sender
      stxEmbeddedMemoConditionCode,
      stxEmbeddedMemoConditionAmount  
    )
  ];

  const sendStxEmbeddedMemo = {
    contractAddress: stxAddress,
    contractName: contractName,
    functionName: 'send-stx-embedded-memo',
    functionArgs: sendStxEmbeddedMemoFunctionArguments,
    postConditions: sendStxEmbeddedMemoPostConditions,
    senderKey: '753b7cc01a1a2e86221266a154af739463fce51219d97e4f856cd7200c3bd2a601',
    network,
    anchorMode: AnchorMode.Any,
  };


// (define-public (send-many-stx-recipients)
// (begin 
//   (try!  (stx-transfer? u1000 tx-sender 'ST1SJ3DTE5DN7X54YDH5D64R3BCB6A2AG2ZQ8YPD5))
//   (try!  (stx-transfer? u1000 tx-sender 'ST2CY5V39NHDPWSXMW9QDT3HC3GD6Q6XX4CFRK9AG))
//   (try!  (stx-transfer? u1000 tx-sender 'ST2JHG361ZXG51QTKY2NQCVBPPRRE2KZB1HR05NNC))
//   (ok true)
// )
// )

  const sendStxManyRecipientsConditionCode = FungibleConditionCode.LessEqual;
  const sendStxManyRecipientsConditionAmount = 900000000; // denoted in microstacks

  const sendStxManyRecipientsFunctionArguments = [
    uintCV(1000000000),
    standardPrincipalCV(stxAddressTestnet), 
    standardPrincipalCV(stxAddressTestnetTwo), 
    standardPrincipalCV(stxAddressTestnetThree)
  ];

  const sendStxManyRecipientsPostConditions = [
    makeStandardSTXPostCondition(
      postConditionAddressStxMemo, //the sender
      sendStxManyRecipientsConditionCode,
      sendStxManyRecipientsConditionAmount  
    )
  ];

  const sendStxManyRecipients = {
    contractAddress: stxAddress,
    contractName: contractName,
    functionName: 'send-stx-many-recipients',
    functionArgs: sendStxManyRecipientsFunctionArguments,
    postConditions: sendStxManyRecipientsPostConditions,
    senderKey: '753b7cc01a1a2e86221266a154af739463fce51219d97e4f856cd7200c3bd2a601',
    network,
    anchorMode: AnchorMode.Any,
  };

  const handleGetTransaction = async (transactionOptions) => {
    try {
      const response = await makeContractCall(transactionOptions);
      const broadcastResponse = await broadcastTransaction(response, network);
      const txId = broadcastResponse.txid;
      console.log(txId)
      setBroadcastResponse(broadcastResponse)
    } catch (e) {
      console.log(e)
    }
  }; 
    
  return (
    <>
      <h1>Stack.JS Web Test App</h1>
      { 
        networkString === "testnet" ? 
        <span style={{backgroundColor: "#ed7777",
          color: "white",
          padding: "4px 8px",
          textAlign: "center",
          borderRadius: "5px"}}>TestNet</span> : 
          <span style={{backgroundColor: "#009966",
          color: "white",
          padding: "4px 8px",
          textAlign: "center",
          borderRadius: "5px"}}>DevNet</span>
      }
      <div>
        <h5>Switch All Configurables:</h5>
        <button onClick={handleSetDevnet}>Change to Dev</button>
        <button onClick={handleSetTestnet}>Change to Test</button>
      </div>
      <div>
        <h5>Switch Networks:</h5>
        <button onClick={handleNetworkDev}>Dev Network</button>
        <button onClick={handleNetworkTest}>Test Network</button>
      </div>
      <div>
      <h5>Switch Recipients:</h5>
        <button onClick={handleStxRecipientDevnet}>Devnet Recipient</button>
        <button onClick={handleStxRecipientTestnet}>Testnet Recipient</button>
      </div>
      <div>
      <h5>Switch Contracts:</h5>
        <button onClick={handleContractDevnet}>Devnet Contract</button>
        <button onClick={handleContractTestnet}>Testnet Contract</button>
      </div>
      <ul>
        <li>{network.coreApiUrl}</li>
        <li>address 1: {stxAddress}</li>
        <li>recipient address: {stxRecipient}</li>
        <li>contract: {contractName}</li>
      </ul>
      <h5>Function Calls</h5>
      <div>
        <button onClick={ () => handleGetTransaction(helloMemo)}>HelloMemo!</button>
      </div>
      <div>
        <button onClick={ () => handleGetTransaction(mintFt)}>Mint FT</button>
      </div>
      <div>
        <button onClick={ () => handleGetTransaction(mintNft)}>Mint NFT</button>
      </div>
      <div>
        <button onClick={ () => handleGetTransaction(sendStx)}>Send STX</button>
      </div>
      <div>
        <button onClick={ () => handleGetTransaction(sendStxMemo)}>Send STX Memo</button>
      </div>
      <div>
        <button onClick={ () => handleGetTransaction(sendStxEmbeddedMemo)}>Send Embedded STX Memo</button>
      </div>
      <div>
        <button onClick={ () => handleGetTransaction(sendStxManyRecipients)}>Send STX Many Recipients</button>
      </div>
      <div>
        <h5>Transaction: {JSON.stringify(broadcastResponse)}</h5>
      </div>
    </>
  );
};

      // secret_key: 753b7cc01a1a2e86221266a154af739463fce51219d97e4f856cd7200c3bd2a601
      // stx_address: ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM

      export default App;

