/* eslint-disable no-console */
const express = require('express');

const app = express();
const port = 3000;
const helper = require('../API/helper.js');

app.use(express.static(`${__dirname}/../client/dist`));
app.use(express.json());
app.use(express.urlencoded());

app.get('/products', (req, res) => {
  helper.fetchEndpoint('/products', (error, data) => {
    if (error) {
      console.log('this is an error with express get request', error);
      res.send(error);
    } else {
      res.send(data);
    }
  });
});

app.get('/reviews/', (req, res) => {
  helper.fetchEndpoint('/reviews/', (error, data) => {
    if (error) {
      console.log('this is an error with express get request', error);
      res.send(error);
    } else {
      res.send(data);
    }
  });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
