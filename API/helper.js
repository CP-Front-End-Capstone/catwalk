const axios = require('axios');
const config = require('./config.example.js');


let apiRequest = (endpoint, cb) => {
  // TODO - Use the axios module to request repos for a specific
  // user from the github API
  // The options object has been provided to help you out,
  // but you'll have to fill in the URL
  let options = {
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/:hr-bld16/${endpoint}`,
    method: 'GET',
    headers: {
      'User-Agent': 'request',
      'Authorization': `token ${config.TOKEN}`
    }
  };

  axios(options)
    .then(function (res) {
      cb(res.data);
    })
    .catch(function (err) {
      console.log(err);
    })
}

module.exports.apiRequest = apiRequest;

//axios.get(/review,options)
//.then()