/* eslint-disable react/no-unused-state */
/* eslint-disable no-console */
/* eslint-disable no-useless-constructor */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
    };
  }

  componentDidMount() {
    axios.get('/products')
      .then((res) => {
        console.log(res.data);
        this.setState({ products: res.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <h1>Hello Even Bigger Earth!</h1>
    );
  }
}

export default App;
