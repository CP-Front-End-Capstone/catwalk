/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import productContext from './contexts/ProductContext.jsx';
import ReviewsRatings from './widgets/ReviewsRatings.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedProduct: { test: 'test' },
    };
  }

  render() {
    console.log(this.context);
    return (
      <div>

        <h1>Hello Even Bigger Earth!</h1>
        <div>
          <productContext.Provider value={this.state.selectedProduct}>
            <ReviewsRatings />
          </productContext.Provider>
        </div>
      </div>

    );
  }
}

App.contextType = productContext;

export default App;
