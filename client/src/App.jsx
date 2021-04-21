/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-console */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/no-unused-state */
/* eslint-disable import/extensions */
import React from 'react';
import axios from 'axios';
import Route from 'react-router-dom';
import productContext from './contexts/ProductContext';
import Overview from './overview/Overview.jsx';
import ReviewsRatings from './widgets/reviews/ReviewsRatings.jsx';
import config from '../../API/config.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedProduct: { test: 'testing' },
      productId: '',
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
          selectedProduct: res.data,
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
    return (
      <div>
        <h1>Hello Even Bigger Earth!</h1>
        <div>
          <productContext.Provider value={this.state.selectedProduct}>
            <Overview />
            <ReviewsRatings />
          </productContext.Provider>
        </div>
      </div>

    );
  }
}

export default App;
