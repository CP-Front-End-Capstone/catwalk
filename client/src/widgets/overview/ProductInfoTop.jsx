/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable import/extensions */
/* eslint-disable react/prefer-stateless-function */
import React, { useContext } from 'react';
import { productContext } from '../../contexts/ProductContext.js';
import { styleContext } from '../../contexts/StyleContext.js';
import Stars from '../../Stars.jsx';

function ProductInfoTop(props) {
  const { product, totalReviews } = useContext(productContext);
  const { currentStyle } = useContext(styleContext);

  if (currentStyle && product) {
    return (
      <div>
        <div className="d-flex justify-content-between">
          <Stars />
          <a className={totalReviews === 0 ? 'row d-none' : 'row'} id="totalReviews" href="#reviews">{`Read all ${totalReviews} reviews`}</a>
        </div>
        <h4 id="productCategory">{product.category}</h4>
        <h1 className="display-4" id="productName">{product.name}</h1>
        {currentStyle.sale_price === null
          ? (
            <p id="originalPrice">
              $&nbsp;
              {currentStyle.original_price}
            </p>
          )
          : (
            <div>
              <p>
                <s>
                  $&nbsp;
                  {currentStyle.original_price}
                </s>
              </p>
              <p className="text-danger">
                $&nbsp;
                {currentStyle.sale_price}
              </p>
            </div>
          )}

      </div>
    );
  }
  return <h1>Product info loading...</h1>;
}

export default ProductInfoTop;
