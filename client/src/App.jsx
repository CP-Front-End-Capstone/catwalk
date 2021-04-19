/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import productContext from './contexts/ProductContext';
import ReviewsRatings from './widgets/ReviewsRatings.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedProduct: { test: 'testing' },
    };
  }

  render() {
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

export default App;
