/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import ProductContext from './contexts/ProductContext.jsx'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedProduct: {}
    };
  }

  render() {
    console.log(this.context);
    return (
      <h1>Hello Even Bigger Earth!</h1>

    );
  }
}

App.contextType = ProductContext;

export default App;
