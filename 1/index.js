const express = require('express');
const { writeFile, mkdir } = require('fs');
const PORT = process.env.PORT || 3000;

let visitCount = 0;

const app = express();

const logError = (err) => {err && console.log(err)};

mkdir("./logs/", {}, logError);

app.get('/', function(req, res) {
    visitCount++;
    writeFile("./logs/count.txt", visitCount, logError);
    res.send(`Hello from the Server! This page has been visited ${visitCount} times`);
});

app.listen(PORT, function() {
    console.log(`Running app on port ${PORT}!`);
});