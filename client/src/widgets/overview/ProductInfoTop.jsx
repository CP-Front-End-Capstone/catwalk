/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable import/extensions */
/* eslint-disable react/prefer-stateless-function */
import React, { useContext } from 'react';
import { productContext } from '../../contexts/ProductContext.js';
import { styleContext } from '../../contexts/StyleContext.js';
import Stars from '../../Stars.jsx';

function ProductInfoTop(props) {
  const { reviewsMeta, product } = useContext(productContext);
  const { currentStyle, revMeta } = useContext(styleContext);

  if (currentStyle && reviewsMeta) {
    return (
      <div>
        <div className="d-flex justify-content-between">
          <Stars />
          <a className="row" href="#reviews">Read all reviews</a>
        </div>
        <h4>{product.category}</h4>
        <h1 className="display-4">{product.name}</h1>
        {currentStyle.sale_price === null
          ? (
            <p>
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
