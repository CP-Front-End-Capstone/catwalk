/* eslint-disable jsx-a11y/alt-text */
import React from 'react';

function MyOutfitCard() {
  return (
    <div className="card">
      <img className="card-img-top" src="http://placekitten.com/g/300/400" width={300} height={400} />
      <div className="card-body">
        <h5 className="card-title">Add to Outfit</h5>
      </div>
    </div>
  );
}

export default MyOutfitCard;
