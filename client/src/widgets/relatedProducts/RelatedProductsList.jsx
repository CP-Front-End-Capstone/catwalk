/* eslint-disable import/no-unresolved */
/* eslint-disable no-lone-blocks */
/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
/* eslint-disable import/extensions */
/* eslint-disable react/prop-types */
import React, { useState, useContext, useEffect } from 'react';
// import api from '../../../../API/helper.js';
import Carousel from 'react-elastic-carousel';
import RelatedProductsCard from './RelatedProductsCard.jsx';
// import productContext from '../../contexts/ProductContext.js';

function RelatedProductsList({ products, styles, rating }) {
  // console.log('List of Products: ', products);
  // console.log('List of Styles: ', styles);

  return (
    <div className="container-fluid">
      <div className="row">
        <Carousel itemsToShow={3} itemsToScroll={1}>
          {products.map((product, index) => (
            <div className="col-sm-12 col-lg-10">
              <div className="card-group">
                <div className="card" key={product.id}>
                  <RelatedProductsCard product={product} style={styles[index]} rating={rating} />
                </div>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
}
export default RelatedProductsList;
