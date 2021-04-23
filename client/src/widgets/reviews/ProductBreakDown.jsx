import React, { useContext } from 'react';
import { StackedHorizontalBarChart } from 'react-stacked-horizontal-bar-chart';
import reviewContext from '../../contexts/ReviewContext';

const ProductBreakdown = () => {
  const reviewMeta = useContext(reviewContext);
  const productDesc = reviewMeta.reviewsMeta.characteristics;

  const fitValue = (productDesc.Fit) && (
    <div className="container">
      <div className="text-center">Fit</div>
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
      <div className="text-center">Length</div>
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
      <div className="text-center">Comfort</div>
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
      <div className="text-center">Quality</div>
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
      <div className="text-center">Width</div>
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

  return (
    <div className="container border" style={{ padding: '20px' }}>
      {fitValue}
      {lengthValue}
      {comfortValue}
      {widthValue}
      {qualityValue}
    </div>
  );
};

export default ProductBreakdown;
