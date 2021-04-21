import React from 'react';
import api from '../../API/helper';
import productContext from './contexts/ProductContext';
import ReviewsRatings from './widgets/reviews/ReviewsRatings.jsx';
import QandA from './widgets/qa/QandA.jsx';

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
    api.fetchEndpoint('/products/18078', (error, product) => {
      if (error) {
        console.log('Error fetching product on component did mount', error);
      } else {
        console.log('PRODUCT', product);
        this.setState({
          selectedProduct: product,
          productId: product.id,
        });
        api.fetchEndpoint('/products/18078/styles', (error, styles) => {
          if (error) {
            console.log('Error fetching style on component did mount', error);
          } else {
            console.log('STYLE', styles);
            this.setState({ styles: styles.results });
          }
        });
      }
    });
    // axios({
    //   url: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-bld/products/18078',
    //   method: 'GET',
    //   headers: {
    //     Authorization: config.TOKEN,
    //   },
    // })
    //   .then((res) => {
    //     console.log(res);
    //     this.setState({
    //       selectedProduct: res.data,
    //       productId: res.data.id,
    //     });
    //     axios({
    //       url: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-bld/products/18078/styles',
    //       method: 'GET',
    //       headers: {
    //         Authorization: config.TOKEN,
    //       },
    //     })
    //       .then((resp) => {
    //         this.setState({ styles: resp.data.results });
    //       })
    //       .catch((err) => {
    //         console.log('Error: ', err);
    //       });
    //   })
    //   .catch((err) => {
    //     console.log('Error: ', err);
    //   });
  }

  render() {
    const { currentProduct } = this.state.selectedProduct;
    return (
      <div>
        <h1>Hello Even Bigger Earth!</h1>
        <div>
          {/* <productContext.Provider value={1}>
            <ReviewsRatings />
            <QandA />
          </productContext.Provider> */}
        </div>
      </div>

    );
  }
}

export default App;
