import React from 'react';
import axios from 'axios';
import productContext from './contexts/ProductContext';
import ReviewsRatings from './widgets/reviews/ReviewsRatings.jsx';
import QandA from './widgets/qa/QandA.jsx';
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
            <ReviewsRatings />
            <QandA />
          </productContext.Provider>
        </div>
      </div>

    );
  }
}

export default App;
