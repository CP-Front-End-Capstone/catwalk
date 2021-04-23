/* eslint-disable jsx-a11y/alt-text */
import React from 'react';

function MyOutfitCard() {
  return (
    <div className="col-sm">
      <div className="card" style={{ width: '12rem' }}>
        <img className="card-img-top" src="http://placekitten.com/g/200/300" />
        <div className="card-body">
          <h5 className="card-title">Add to Outfit</h5>
        </div>
      </div>
    </div>
  );
}

export default MyOutfitCard;
