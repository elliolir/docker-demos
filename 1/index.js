var express = require('express');
const { writeFile } = require('fs');
const PORT = process.env.PORT || 3000;

let visitCount = 0;

var app = express();

app.get('/', function(req, res) {
    visitCount++;
    writeFile("count.txt", visitCount);
    res.send(`Hello from the Server! This page has been visited ${visitCount} times`);
});

app.listen(PORT, function() {
    console.log(`Running app on port ${PORT}!`);
});