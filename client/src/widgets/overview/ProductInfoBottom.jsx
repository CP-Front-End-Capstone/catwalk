/* eslint-disable react/self-closing-comp */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable import/extensions */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable import/prefer-default-export */
/* eslint-disable react/prefer-stateless-function */
import React, { useContext } from 'react';
import { productContext } from '../../contexts/ProductContext.js';

function ProductInfoBottom(props) {
  const { product, styles } = useContext(productContext);

  if (styles) {
    return (
      <div>
        <div>
          <h4 className="display-4">{product.slogan}</h4>
        </div>
        <div className="row d-flex justify-content-around">
          <p className="w-50">{product.description}</p>

          <a href="https://${twitter.com/intent/tweet?button_hashtag=share&ref_src=twsrc%5Etfw" className="twitter-hashtag-button" data-show-count="false">Tweet #share</a>
          <div className="fb-share-button" data-href="https://developers.facebook.com/docs/plugins/" data-layout="button" data-size="large">
            <a target="_blank" href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fdevelopers.facebook.com%2Fdocs%2Fplugins%2F&amp;src=sdkpreparse" className="fb-xfbml-parse-ignore" rel="noreferrer">
              FB Share
            </a>
          </div>
          <div>
            <a data-pin-do="embedPin" href="https://www.pinterest.com/pin/99360735500167749/">Save on Pinterest</a>
          </div>

        </div>
      </div>
    );
  }
  return <h1>Product info loading...</h1>;
}

export default ProductInfoBottom;
