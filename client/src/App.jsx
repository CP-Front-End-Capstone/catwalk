/* eslint-disable react/no-unused-state */
/* eslint-disable no-console */
/* eslint-disable no-useless-constructor */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import axios from 'axios';

<<<<<<< HEAD
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
=======
function App(props) {
  return <h1>Hello Even Bigger Earth!</h1>;
>>>>>>> 0043b6eb71b50ecf08630b3a41e6a4d86fb8d630
}

export default App;
