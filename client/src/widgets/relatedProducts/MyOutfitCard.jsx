/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable import/extensions */
/* eslint-disable no-console */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
// import ProductCard from './ProductCard.jsx';

function MyOutfitCard({ currentFit, updateFit }) {
  return (
    <div>
      <img className="card-img-top" src="http://placekitten.com/g/350/400" width={300} height={400} />
      <div className="card-body">
        <button type="button" className="btn btn-primary btn-lg" onClick={() => updateFit(true)}>Add to Outfit</button>
      </div>
    </div>
  );
}

export default MyOutfitCard;
