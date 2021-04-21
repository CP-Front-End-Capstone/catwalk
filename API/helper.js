/* eslint-disable no-console */
const axios = require('axios');
const config = require('./config.js');

const fetchEndpoint = (endpoint) => new Promise((resolve, reject) => {
  axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-bld${endpoint}`, {
    headers: {
      Authorization: config.TOKEN,
    },
  })
    .then((res) => {
      resolve(res.data);
    })
    .catch((error) => {
      reject(error);
    });
});

module.exports.fetchEndpoint = fetchEndpoint;
