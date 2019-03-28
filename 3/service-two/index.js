const express = require('express');
const PORT = process.env.PORT || 8090;

const app = express();

app.get('/', function(req, res) {
  res.json({timestamp: new Date()});
});

app.listen(PORT, function() {
  console.log(`Running app on port ${PORT}!`);
});
