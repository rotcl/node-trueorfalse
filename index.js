const express = require("express");
const app = express();

const port = 5000;

app.listen(port, () => {
  console.log(`Server is runnin on port ${port}`);
});

app.get('/t', function (req, res) {
  res.send(true);
});

app.get('/f', function (req, res) {
  res.send(false);
});

app.get('/', function (req, res) {
  res.send(Math.random() >= 0.5);
});

app.get('/r', function (req, res) {
  res.send(Math.random() >= 0.5);
});



