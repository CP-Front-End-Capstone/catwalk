import React, { useContext } from 'react';
import { StackedHorizontalBarChart } from 'react-stacked-horizontal-bar-chart';
import reviewContext from '../../contexts/ReviewContext';

const ProductBreakdown = () => {
  const reviewMeta = useContext(reviewContext);
  const productDesc = reviewMeta.reviewsMeta.characteristics;

  const fitValue = (productDesc.Fit) && Number(productDesc.Fit.value);
  const lengthValue = (productDesc.Length) && Number(productDesc.Length.value);
  const comfortValue = (productDesc.Comfort) && Number(productDesc.Comfort.value);
  const qualityValue = (productDesc.Quality) && Number(productDesc.Quality.value);
  const widthValue = (productDesc.Width) && Number(productDesc.Width.value);

  return (
    <div className="container small">
      <div className="row small">Fit</div>
      <div className="row small">
        <StackedHorizontalBarChart
          rangesPoints={[1, 5]}
          backgroundColors={[`#d3d3d3`]}
          points={[{ value: fitValue }]}
          edges={['Too small', 'Too large']}
        />
      </div>
      <div className="row small">Length</div>
      <div className="row small">
        <StackedHorizontalBarChart
          rangesPoints={[1, 5]}
          backgroundColors={[`#d3d3d3`]}
          points={[{ value: lengthValue }]}
          edges={['Too short', 'Too long']}
        />
      </div>
      <div className="row small">Comfort</div>
      <div className="row small">
        <StackedHorizontalBarChart
          rangesPoints={[1, 5]}
          backgroundColors={[`#d3d3d3`]}
          points={[{ value: comfortValue }]}
          edges={['Poor', 'Perfect']}
        />
      </div>
      <div className="row small">Width</div>
      <div className="row small">
        <StackedHorizontalBarChart
          rangesPoints={[1, 5]}
          backgroundColors={[`#d3d3d3`]}
          points={[{ value: widthValue }]}
          edges={['Narrow', 'Wide']}
        />
      </div>
      <div className="row small">Quality</div>
      <div className="row small">
        <StackedHorizontalBarChart
          rangesPoints={[1, 5]}
          backgroundColors={[`#d3d3d3`]}
          points={[{ value: qualityValue }]}
          edges={['Low', 'High']}
        />
      </div>
    </div>
  );
};

export default ProductBreakdown;
