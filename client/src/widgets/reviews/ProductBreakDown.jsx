import React, { useContext } from 'react';
import reviewContext from '../../contexts/ReviewContext';

const ProductBreakdown = () => {
  const reviewMeta = useContext(reviewContext);
  const productDesc = reviewMeta.reviewsMeta.characteristics;

  const fitValue = (productDesc.Fit) && `Fit ${Number(productDesc.Fit.value)}`;
  const lengthValue = (productDesc.Length) && `Length ${Number(productDesc.Length.value)}`;
  const comfortValue = (productDesc.Comfort) && `Comfort ${Number(productDesc.Comfort.value)}`;
  const qualityValue = (productDesc.Quality) && `Quality ${Number(productDesc.Quality.value)}`;

  return (
    <div className="container">
      <div className="row">
        {fitValue}
      </div>
      <div className="row">
        {lengthValue}
      </div>
      <div className="row">
        {comfortValue}
      </div>
      <div className="row">
        {qualityValue}
      </div>
    </div>
  );
};

export default ProductBreakdown;
