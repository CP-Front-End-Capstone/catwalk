/* eslint-disable react/prefer-stateless-function */
import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedProduct: {}
    };
  }

  render() {
    return (
      <h1>Hello Even Bigger Earth!</h1>

    );
  }
}

export default App;
