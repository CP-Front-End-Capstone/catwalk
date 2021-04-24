/* eslint-disable no-console */
/* eslint-disable react/prop-types */
/* eslint-disable import/extensions */
import React from 'react';
// import Carousel from 'react-elastic-carousel';
import MyOutfitCard from './MyOutfitCard.jsx';

function MyOutfitList({ currentProduct, styles }) {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-sm-12 col-lg-3">
          <div className="card-group">
            <div className="card">
              <MyOutfitCard currentProduct={currentProduct} styles={styles} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyOutfitList;
