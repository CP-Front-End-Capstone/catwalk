import React from 'react';
import ReactDOM from 'react-dom';
import ReviewsRatings from '../client/src/widgets/reviews/ReviewsRatings.jsx';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ReviewsRatings />, div);
  console.log(div.getElementbyId('reviews'));
  // expect().to.be('h-75 overflow-auto');
  ReactDOM.unmountComponentAtNode(div);
});
