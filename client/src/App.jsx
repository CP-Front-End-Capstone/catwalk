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
      productId: '',
      product: [],
      styles: [],
    };
  }

  componentDidMount() {
    axios({
      url: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-bld/products/18078',
      method: 'GET',
      headers: {
        Authorization: config.TOKEN,
      },
    })
      .then((res) => {
        console.log(res);
        this.setState({
          product: res.data,
          productId: res.data.id,
        });
        axios({
          url: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-bld/products/18078/styles',
          method: 'GET',
          headers: {
            Authorization: config.TOKEN,
          },
        })
          .then((resp) => {
            this.setState({ styles: resp.data.results });
          })
          .catch((err) => {
            console.log('Error: ', err);
          });
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
