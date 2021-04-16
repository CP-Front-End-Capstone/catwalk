/* eslint-disable no-console */
const express = require('express');

const app = express();
const port = 3000;
const helper = require('../API/helper.js');

app.use(express.static(`${__dirname}/../client/dist`));

app.get('/products', (req, res) => {
  helper.apiRequest('/products', (error, data) => {
    if (error) {
      res.set(500);
      res.send(error);
    } else {
      res.set(200);
      res.send(data);
    }
  });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
