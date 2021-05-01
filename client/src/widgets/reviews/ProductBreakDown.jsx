/* eslint-disable import/extensions */
import React, { useContext } from 'react';
import { StackedHorizontalBarChart } from 'react-stacked-horizontal-bar-chart';
import reviewContext from '../../contexts/ReviewContext';
import { productContext } from '../../contexts/ProductContext.js';

const ProductBreakdown = () => {
  const reviewMeta = useContext(reviewContext);
  const review = useContext(productContext);
  const productDesc = review.reviewsMeta.characteristics;

  const characteristicObj = {
    Fit: ['Runs Tight', 'Runs Long'],
    Length: ['Runs Short', 'Runs Long'],
    Quality: ['Poor', 'Perfect'],
    Comfort: ['Uncomfortable', 'Perfect'],
    Width: ['Too narrow', 'Too Wide'],
    Size: ['A Size too Small', 'A Size too Big'],
  };

  const createCharacteristic = (characteristic) => {
    if (productDesc[characteristic]) {
      return (
        <div className="container">
          <div className="text-center font-weight-bold small" style={{ padding: '5px' }}>{characteristic}</div>
          <div className="small">
            <StackedHorizontalBarChart
              rangesPoints={[0, 5]}
              backgroundColors={['#d3d3d3']}
              points={[{ value: Number(productDesc[characteristic].value) }]}
              edges={[characteristicObj[characteristic][0], characteristicObj[characteristic][1]]}
            />
          </div>
        </div>
      );
    }
  };

  if (reviewMeta.reviewList.results.length > 0) {
    return (
      <div className="container" style={{ padding: '10px' }}>
        <div className="row">
          <div id="characteristics" className="container" style={{ padding: '10px' }}>
            {createCharacteristic('Fit')}
            {createCharacteristic('Length')}
            {createCharacteristic('Comfort')}
            {createCharacteristic('Width')}
            {createCharacteristic('Quality')}
          </div>
        </div>
      </div>
    );
  }
  return '';
};

export default ProductBreakdown;
