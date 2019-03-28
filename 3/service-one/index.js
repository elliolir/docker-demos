const express = require('express');
const axios = require("axios");
const PORT = process.env.PORT || 3000;
const dateProviderURL = process.env.DATE_PROVIDER || "http://localhost:8090/";


const app = express();

app.get('/', async function(req, res) {
  try {
    const { data: { timestamp } } = await axios(dateProviderURL);
    res.send(`Hello from the Server!\n Timestamp is ${new Date(timestamp)}`);
  }
  catch(err){
    console.log(err);
    res.send(`Hello from the Server!\n We failed`);
  }
});

app.listen(PORT, function() {
  console.log(`Running app on port ${PORT}!`);
});
