/* eslint-disable react/prop-types */
/* eslint-disable import/extensions */
/* eslint-disable no-console */
/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from 'react';
import ProductCard from './ProductCard.jsx';

function MyOutfitCard({ currentProduct, styles }) {
  const [outfit, setOutfit] = useState(false);

  return (
    <div>
      {outfit ? <ProductCard currentProduct={currentProduct} style={styles[0]} /> : null}
      <img className="card-img-top" src="http://placekitten.com/g/350/400" width={350} height={400} />
      <div className="card-body">
        <button type="button" className="btn btn-outline-primary btn-lg" onClick={() => setOutfit(true)}>Add to Outfit</button>
      </div>
    </div>
  );
}

export default MyOutfitCard;
