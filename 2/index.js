const express = require('express');
const {promisify} = require('util');
const fs = require('fs');

const PORT = process.env.PORT || 3000;

const writeFile = promisify(fs.writeFile);
const mkdir = promisify(fs.mkdir);
const readFile = promisify(fs.readFile);

const logError = (err) => {
  err && console.error(err)
};

(async function () {
  let visitCount = await readFile("./data/count.txt", 'utf8')
    .catch(err => {
      logError(err);
      mkdir("./data/").catch(logError);
      return 0;
    });

  const app = express();


  app.get('/', async function (req, res) {
    visitCount++;
    await writeFile("./data/count.txt", visitCount).catch(logError);
    res.send(`Hello from the Server! This page has been visited ${visitCount} times`);
  });

  app.listen(PORT, function () {
    console.log(`Running app on port ${PORT}!`);
  });
})();
