/* eslint-disable no-console */
const axios = require('axios');
const config = require('./config.js');

const fetchEndpoint = (endpoint, callback) => {
  // const apiUrl = 'https://app-hrsei-api.herokuapp.com/api/fec2/:hr-bld';
  // TODO - Use the axios module to request repos for a specific
  // user from the github API
  // The options object has been provided to help you out,
  // but you'll have to fill in the URL
  axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-bld${endpoint}`, {
    headers: {
      Authorization: config.TOKEN,
    },
  })
    .then((res) => {
      callback(null, res.data);
    })
    .catch((error) => {
      callback(error, null);
    });
};

module.exports.fetchEndpoint = fetchEndpoint;
