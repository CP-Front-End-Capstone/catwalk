/* eslint-disable import/no-unresolved */
/* eslint-disable no-lone-blocks */
/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
/* eslint-disable import/extensions */
/* eslint-disable react/prop-types */
import React, { useState, useContext, useEffect } from 'react';
// import api from '../../../../API/helper.js';
import RelatedProductsCard from './RelatedProductsCard.jsx';
// import productContext from '../../contexts/ProductContext.js';

function RelatedProductsList({ products, styles }) {
  // console.log('List of Products: ', products);
  // console.log('List of Styles: ', styles);

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-sm-12">
          <div id="inam" className="carousel slide" data-ride="carousel">
            <div className="carousel-inner">
              <div className="container">
                <div className="row">
                  {products.map((product, index) => (
                    <div className={index === 0 ? 'carousel-item active' : 'carousel-item'}>
                      <div className="col-sm-12 col-lg-4">
                        <div className="card" key={product.id}>
                          <RelatedProductsCard product={product} style={styles[index]} />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <a href="#inam" className="carousel-control-prev text-primary" data-slide="prev">
              <span className="carousel-control-prev-icon bg-dark" />
            </a>
            <a href="#inam" className="carousel-control-next" data-slide="next">
              <span className="carousel-control-next-icon bg-dark text-white" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
export default RelatedProductsList;

{ /* <div className="container">
<div className="row">
  {products.products.map((product) => products.context.styles.map((style) => (
    <RelatedProductsCard product={product} style={style} />
  )))}
</div>
</div> */ }
