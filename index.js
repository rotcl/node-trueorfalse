const express = require("express");
var cors = require('cors')
const app = express();

const port = 5000;

app.use(cors());

app.listen(port, () => {
  console.log(`Runnin on port ${port}`);
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



