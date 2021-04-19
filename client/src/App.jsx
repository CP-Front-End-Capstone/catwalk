/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unused-state */
/* eslint-disable no-console */
/* eslint-disable no-useless-constructor */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import axios from 'axios';
import config from '../../API/config.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
    };
  }

  componentDidMount() {
    axios({
      url: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-bld/products',
      method: 'GET',
      headers: {
        Authorization: config.TOKEN,
      },
    })
      .then((res) => {
        console.log(res);
        this.setState({ products: res.data });
      })
      .catch((err) => {
        console.log('Error: ', err);
      });
  }

  render() {
    return <h1>Hello Even Bigger Earth!</h1>;
  }
}

export default App;
