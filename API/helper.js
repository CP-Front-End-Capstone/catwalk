/* eslint-disable comma-dangle */
/* eslint-disable quote-props */
/* eslint-disable quotes */
/* eslint-disable no-console */
/* eslint-disable no-undef */
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

const postToCart = (number) => new Promise((resolve, reject) => {
  axios({
    method: 'post',
    url: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-bld/cart',
    headers: {
      Authorization: config.TOKEN,
    },
    data: {
      sku_id: number
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
module.exports.postToCart = postToCart;
// `https://app-hrsei-api.herokuapp.com/api/fec2/hr-bld${endpoint}`, {
//     data: {
//       sku_id: number
//     },
//   },
//   {
//     headers: {
//       Authorization: config.TOKEN,
//     },
//   }
