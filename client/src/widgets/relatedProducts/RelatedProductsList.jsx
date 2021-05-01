/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable max-len */
/* eslint-disable import/no-unresolved */
/* eslint-disable no-lone-blocks */
/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
/* eslint-disable import/extensions */
/* eslint-disable react/prop-types */
import React from 'react';
import Carousel from 'react-elastic-carousel';
import uuid from 'react-uuid';
import RelatedProductsCard from './RelatedProductsCard.jsx';
import avgRating from '../../utils/index.js';

function RelatedProductsList({
  products, styles, rating, currentProduct, changeProductId,
}) {
  console.log('Styles: ', styles);
  const updateProduct = (id) => {
    changeProductId(id);
  };
  if (rating !== undefined && products.length !== 0) {
    return (
      <div className="container">
        <div className="row">
          <Carousel className="styling-example" itemsToShow={3} itemsToScroll={1}>
            {products.map((product, index) => (
              <div id="productsList" className="card-deck p-3" key={uuid()}>
                <div className="card w-25">
                  <RelatedProductsCard
                    product={product}
                    currentProduct={currentProduct}
                    style={styles[index] ? styles[index] : styles[0]}
                    rating={rating[index] ? avgRating(rating[index]) : 0}
                    updateProduct={updateProduct}
                  />
                </div>
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    );
  }
  return ('');
}
export default RelatedProductsList;
