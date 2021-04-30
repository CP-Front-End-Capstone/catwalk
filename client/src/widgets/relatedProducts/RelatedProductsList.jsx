/* eslint-disable max-len */
/* eslint-disable import/no-unresolved */
/* eslint-disable no-lone-blocks */
/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
/* eslint-disable import/extensions */
/* eslint-disable react/prop-types */
import React, { useState, useContext, useEffect } from 'react';
import Carousel from 'react-elastic-carousel';
import uuid from 'react-uuid';
import RelatedProductsCard from './RelatedProductsCard.jsx';

function RelatedProductsList({
  products, styles, rating, currentProduct, calculateAverage,
}) {
  return (
    <div className="container">
      <div className="row">
        <Carousel itemsToShow={3} itemsToScroll={1}>
          {products.map((product, index) => (
            <div id="productsList" className="card-deck p-3" key={uuid()}>
              <div className="card w-25">
                <RelatedProductsCard
                  product={product}
                  currentProduct={currentProduct}
                  style={styles[index]}
                  rating={calculateAverage(rating[index])}
                />
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
}
export default RelatedProductsList;
