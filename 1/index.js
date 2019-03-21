const express = require('express');
const PORT = process.env.PORT || 3000;

const app = express();

app.get('/', function(req, res) {
  res.send(`Hello from the Server!`);
});

app.listen(PORT, function() {
  console.log(`Running app on port ${PORT}!`);
});
