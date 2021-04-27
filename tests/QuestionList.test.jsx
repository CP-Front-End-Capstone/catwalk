import React from 'react';
import ReactDOM from 'react-dom';
import QuestionList from '../client/src/widgets/qa/QuestionList.jsx';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<QuestionList />, div);
  console.log(div.getElementbyId('questionlist'));
  // expect().to.be('h-75 overflow-auto');
  ReactDOM.unmountComponentAtNode(div);
});
