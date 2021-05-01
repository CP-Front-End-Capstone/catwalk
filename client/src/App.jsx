/* eslint-disable import/no-named-as-default-member */
/* eslint-disable max-len */
/* eslint-disable react/jsx-no-undef */
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
import axios from 'axios';
import api from '../../API/helper';
import { productContext } from './contexts/ProductContext.js';
import ReviewsRatings from './widgets/reviews/ReviewsRatings.jsx';
import QandA from './widgets/qa/QandA.jsx';
import Overview from './widgets/overview/Overview.jsx';
import RelatedProducts from './widgets/relatedProducts/Products.jsx';

const config = require('../../API/config.js');

const App = (props) => {
  const [productId, changeProductId] = useState('18078');
  const [product, changeProduct] = useState();
  const [styles, changeStyles] = useState();
  const [reviewsMeta, setReviewsMeta] = useState();
  const [totalReviews, setTotalReviews] = useState(0);

  useEffect(() => {
    api.fetchEndpoint(`/products/${productId}`)
      .then((productData) => {
        changeProduct(productData);
        console.log(productData);
        api.fetchEndpoint(`/products/${productId}/styles`)
          .then((stylesData) => {
            changeStyles(stylesData.results);
            api.fetchEndpoint(`/reviews/meta/?product_id=${productId}`)
              .then((reviewMeta) => {
                setReviewsMeta(reviewMeta);
              });
          });
      })
      .catch((error) => {
        console.log('Error fetching data', error);
      });
  }, [productId]);

  const getTotalReviews = (reviewsArray) => {
    setTotalReviews(reviewsArray.length);
  };

  const trackClicks = (element, widget, time) => {
    return axios({
      method: 'POST',
      url: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-bld/interactions',
      data: {
        element,
        widget,
        time,
      },
      headers: {
        Authorization: config.TOKEN,
      },
    })
      .then(() => {
        console.log('successfully tracked click', time);
      })
      .catch((err) => {
        console.log('error tracking click', err);
      });
  };

  const dateGenerator = () => (JSON.stringify(new Date()));

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">Fashion Factory</a>
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
        <productContext.Provider value={{
          product, styles, productId, changeProductId, reviewsMeta, trackClicks, dateGenerator, totalReviews,
        }}
        >
          <Overview />
          <RelatedProducts />
          <QandA />
          <ReviewsRatings getTotalReviews={getTotalReviews} />
        </productContext.Provider>
      </div>
    </div>
  );
};

export default App;
