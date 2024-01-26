import { useState } from "react";
import { StacksMocknet, StacksDevnet} from '@stacks/network';
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
const network = new StacksMocknet();

//Devnet STX Address
const stxAddress = 'ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM';
const stxAddressTwo = 'ST1SJ3DTE5DN7X54YDH5D64R3BCB6A2AG2ZQ8YPD5';
const contractName = 'test-functions'

//Transaction Options

// Clarity function
// (define-public (hello)
//   (begin 
//     (print "Hello World!")
//     (ok true)
//   )
// )
const helloWorldFuncArgs = [bufferCVFromString("Hello Worlds")];

const helloWorldPostConditions = [];

const helloWorld = {
  contractAddress: stxAddress,
  contractName: contractName,
  functionName: 'hello',
  functionArgs: helloWorldFuncArgs,
  postConditions: helloWorldPostConditions,
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
  standardPrincipalCV(stxAddressTwo)
];

const assetContract = stxAddress
const postConditionAddressNFT = stxAddressTwo //recipient
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
  standardPrincipalCV(stxAddressTwo)
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
  standardPrincipalCV(stxAddressTwo),
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

function App() {
  const [ broadcastResponse, setBroadcastResponse ] = useState()

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
      <ul>
        <li>address 1: {stxAddress}</li>
        <li>address 2: {stxAddressTwo}</li>
        <li>contract: {contractName}</li>
      </ul>
      <div>
        <button onClick={ () => handleGetTransaction(helloWorld)}>Hello!</button>
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
        {JSON.stringify(broadcastResponse)}
      </div>
    </>
  );
};

      // secret_key: 753b7cc01a1a2e86221266a154af739463fce51219d97e4f856cd7200c3bd2a601
      // stx_address: ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM

      export default App;

