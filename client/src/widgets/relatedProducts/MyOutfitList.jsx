/* eslint-disable no-unused-vars */
/* eslint-disable react/no-array-index-key */
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

function MyOutfitList({ overviewProduct, styles }) {
  const [outfit, setOutfit] = useState([]);
  const [outfitStyle, setOutfitStyle] = useState([]);
  const [showFit, updateFit] = useState(true);
  console.log('Your styles: ', styles);

  return (
    <Carousel className="styling-example" itemsToShow={2} itemsToScroll={1}>
      <div className="container">
        <div className="row">
          <div className="card-deck p-2">
            <MyOutfitCard
              updateFit={setOutfit}
              overviewProduct={overviewProduct}
              outfit={outfit}
              styles={styles}
              outfitStyle={outfitStyle}
              setOutfitStyle={setOutfitStyle}
            />
          </div>
          <div className="card-deck p-2">
            {outfit.length >= 0 ? outfit.map((fit, index) => (
              <ProductCard
                overviewProduct={fit}
                outfit={outfit}
                setOutfit={setOutfit}
                style={outfitStyle[index]}
                updateFit={updateFit}
                key={index}
              />
            )) : null}
          </div>
        </div>
      </div>
    </Carousel>
  );
}

export default MyOutfitList;
