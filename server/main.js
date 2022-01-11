/* eslint-disable no-console */
require('dotenv').config();
const path = require('path');
const express = require('express');
const { env } = require('process');

const app = express();
const { PORT = 3000 } = env;

main();

function main() {
  app.use(express.json());

  app.get('/js/:filename', (req, res) => {
    res.sendFile(path.resolve(__dirname, `../public/${req.params.filename}`));
  });

  app.get('/:dir(css|style)/:filename', (req, res) => {
    res.sendFile(path.resolve(__dirname, `../public/${req.params.filename}`));
  });

  app.get('/res/*', (req, res) => {
    res.sendFile(path.resolve(__dirname, `../public/${req.path}`));
  });

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../public/index.html'));
  });

  app.listen(PORT, () => {
    console.log(`Server started at http://localhost:${PORT}`);
  });
}
