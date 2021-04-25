/* eslint-disable no-undef */
/* eslint-disable no-console */
/* eslint-disable react/prop-types */
/* eslint-disable import/extensions */
import React, { useState } from 'react';
import Carousel, { consts } from 'react-elastic-carousel';
import MyOutfitCard from './MyOutfitCard.jsx';
import ProductCard from './ProductCard.jsx';

function MyOutfitList({ currentProduct, styles }) {
  const [outfit, setOutfit] = useState(false);

  return (
    <div className="container-fluid">
      <div className="row">
        <Carousel itemPosition={consts.START} itemsToShow={1}>
          <div className="col-sm-3">
            <div className="card-group">
              <div className="card w-50">
                <MyOutfitCard currentFit={outfit} updateFit={setOutfit} />
              </div>
            </div>
          </div>
          <div className="col-sm-3">
            <div className="card-group">
              <div className="card w-50">
                {outfit ? <ProductCard currentProduct={currentProduct} style={styles[0]} /> : null}
              </div>
            </div>
          </div>
        </Carousel>
      </div>
    </div>
  );
}

export default MyOutfitList;
