const express = require('express')
const app = express()

const port = 3001
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello, Express.js!');
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})

app.post("/api/send-stx", async (req, res) => {
  console.log('/////////////////////////////////////     Start    /////////////////////////////////////')
  const events = req.body;
  console.log(JSON.stringify(events))
  console.log('                       ')
  console.log('**********************************************************************************************************')
  console.log('                       ')
  // //Loop through each item in the apply array
  // events.apply.forEach((item) => {
  //   // Loop through each transaction in the item
  //   console.log(JSON.stringify(item))
    // item.transactions.forEach((transaction) => {
    //   // If the transaction has operations, loop through them
    //   if (transaction.operations?.length) {
    //     transaction.operations.forEach((operation) => {
    //       // Log the operation
    //       console.log({ operation });
    //       console.log('                       ')
    //       console.log('**********************************************************************************************************')
    //       console.log('                       ')
    //       console.log(
    //         {events: transaction.metadata.receipt.events[0].data},
    //         {metadata: transaction.metadata},
    //         {transaction: transaction}
    //       )
    //       console.log('                       ')
    //       console.log('**********************************************************************************************************')
    //       console.log('                       ')
    //     });
    //   } else { 
    //     console.log(
    //       {events: transaction.metadata.receipt.events[0].data},
    //       {metadata: transaction.metadata},
    //       {transaction: transaction}
    //     )
    //     console.log('                       ')
    //     console.log('**********************************************************************************************************')
    //     console.log('                       ')
    //   }
      
    // });
    // console.log('/////////////////////////////////////     Hello END     /////////////////////////////////////')
  //});

  // Send a response back to Chainhook to acknowledge receipt of the event
  res.status(200).send({ message: "Hello!" });
});

app.post("/api/decode/send-stx", async (req, res) => {
  console.log('/////////////////////////////////////     Decode Start    /////////////////////////////////////')
  const events = req.body;
  console.log(JSON.stringify(events))
  console.log('                       ')
  console.log('**********************************************************************************************************')
  console.log('                       ')
  // Send a response back to Chainhook to acknowledge receipt of the event
  res.status(200).send({ message: "Hello!" });
});
