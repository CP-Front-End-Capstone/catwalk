/* eslint-disable react/destructuring-assignment */
/* eslint-disable import/named */
/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
/* eslint-disable arrow-body-style */
/* eslint-disable import/no-named-as-default */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-console */
/* eslint-disable import/extensions */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import api from '../../API/helper';
import { ProductContext } from './contexts/ProductContext.js';
// import ReviewsRatings from './widgets/reviews/ReviewsRatings.jsx';
// import QandA from './widgets/qa/QandA.jsx';
import Overview from './widgets/overview/Overview.jsx';

const App = (props) => {
  const [productId, changeProductId] = useState('18078');
  const [product, changeProduct] = useState();
  const [styles, changeStyles] = useState();
  const [isMounted, changeMount] = useState(null);

  useEffect(() => {
    api.fetchEndpoint(`/products/${productId}`)
      .then((productData) => {
        changeProduct(productData);
        api.fetchEndpoint(`/products/${productId}/styles`)
          .then((stylesData) => {
            changeStyles(stylesData.results);
            changeMount(true);
          });
      })
      .catch((error) => {
        console.log('Error fetching data', error);
      });
  }, [productId]);
  if (isMounted) {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="#">Catwalk App</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <form className="form-inline my-2 my-lg-0">
              <input className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form>
          </div>
        </nav>
        <div>
          <ProductContext.Provider value={{ product, styles }}>
            <Overview />
          </ProductContext.Provider>
        </div>
      </div>
    );
  }
  return (<h1>Loading...</h1>);
};

export default App;
