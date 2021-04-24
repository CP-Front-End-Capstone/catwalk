/* eslint-disable import/extensions */
import React from 'react';
import MyOutfitCard from './MyOutfitCard.jsx';

function MyOutfitList() {
  return (
    <div className="Container">
      <div className="row">
        <div className="card-group">
          <MyOutfitCard />
        </div>
      </div>
    </div>
  );
}

export default MyOutfitList;
