/* eslint-disable max-len */
/* eslint-disable no-lone-blocks */
/* eslint-disable no-undef */
/* eslint-disable no-console */
/* eslint-disable react/prop-types */
/* eslint-disable import/extensions */
import React, { useState } from 'react';
import Carousel from 'react-elastic-carousel';
import MyOutfitCard from './MyOutfitCard.jsx';
import ProductCard from './ProductCard.jsx';

function MyOutfitList({ currentProduct, styles }) {
  const [outfit, setOutfit] = useState(false);

  return (
    <Carousel itemsToShow={2} itemsToScroll={1}>
      <div className="container">
        <div className="row">
          <div className="card-deck p-3">
            <MyOutfitCard updateFit={setOutfit} />
          </div>
          <div className="card-deck p-3">
            {outfit ? <ProductCard currentProduct={currentProduct} style={styles[0]} updateFit={setOutfit} /> : null}
          </div>
        </div>
      </div>
    </Carousel>
  );
}

export default MyOutfitList;
