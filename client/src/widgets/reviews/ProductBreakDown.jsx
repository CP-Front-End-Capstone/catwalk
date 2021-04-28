import React, { useContext } from 'react';
import { StackedHorizontalBarChart } from 'react-stacked-horizontal-bar-chart';
import reviewContext from '../../contexts/ReviewContext';
import { productContext } from '../../contexts/ProductContext.js';

const ProductBreakdown = () => {
  const reviewMeta = useContext(reviewContext);
  const review = useContext(productContext);
  const productDesc = review.reviewsMeta.characteristics;

  const fitValue = (productDesc.Fit) && (
    <div className="container">
      <div className="text-center" style={{ padding: '5px' }}>Fit</div>
      <div className="small">
        <StackedHorizontalBarChart
          rangesPoints={[0, 5]}
          backgroundColors={['#d3d3d3']}
          points={[{ value: Number(productDesc.Fit.value) }]}
          edges={['Too small', 'Too large']}
        />
      </div>
    </div>
  );
  const lengthValue = (productDesc.Length) && (
    <div className="container">
      <div className="text-center" style={{ padding: '5px' }}>Length</div>
      <div className="small">
        <StackedHorizontalBarChart
          rangesPoints={[0, 5]}
          backgroundColors={['#d3d3d3']}
          points={[{ value: Number(productDesc.Length.value) }]}
          edges={['Too short', 'Too long']}
        />
      </div>
    </div>
  );
  const comfortValue = (productDesc.Comfort) && (
    <div className="container">
      <div className="text-center" style={{ padding: '5px' }}>Comfort</div>
      <div className="small">
        <StackedHorizontalBarChart
          rangesPoints={[0, 5]}
          backgroundColors={['#d3d3d3']}
          points={[{ value: Number(productDesc.Comfort.value) }]}
          edges={['Poor', 'Perfect']}
        />
      </div>
    </div>
  );
  const qualityValue = (productDesc.Quality) && (
    <div className="container">
      <div className="text-center" style={{ padding: '5px' }}>Quality</div>
      <div className="small">
        <StackedHorizontalBarChart
          rangesPoints={[0, 5]}
          backgroundColors={['#d3d3d3']}
          points={[{ value: Number(productDesc.Quality.value) }]}
          edges={['Low', 'High']}
        />
      </div>
    </div>
  );
  const widthValue = (productDesc.Width) && (
    <div>
      <div className="text-center" style={{ padding: '5px' }}>Width</div>
      <div className="small">
        <StackedHorizontalBarChart
          rangesPoints={[0, 5]}
          backgroundColors={['#d3d3d3']}
          points={[{ value: Number(productDesc.Width.value) }]}
          edges={['Narrow', 'Wide']}
        />
      </div>
    </div>
  );

  if (reviewMeta.reviewList.results.length > 0) {
    return (
      <div className="container" style={{ padding: '10px' }}>
        <div className="row">
          <div className="container border" style={{ padding: '20px' }}>
            {fitValue}
            {lengthValue}
            {comfortValue}
            {widthValue}
            {qualityValue}
          </div>
        </div>
      </div>
    );
  }
  return '';
};

export default ProductBreakdown;
