const express = require('express');
const { promisify } = require('util');
const fs = require('fs');
const PORT = process.env.PORT || 3000;

// TODO finish this stuff
const writeFile = promisify(fs.writeFile);
const mkdir = promisify(fs.mkdir);
const readFile = promisify(fs.readFile);

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