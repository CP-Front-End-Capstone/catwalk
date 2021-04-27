/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable import/extensions */
import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme from 'enzyme';
import config from './testconfig.js';
import QuestionList from '../client/src/widgets/qa/QuestionList.jsx';
import qaContext from '../client/src/contexts/QaContext.js';
import questionsData from './questionsData.js';

it('renders question list with 4 questions', () => {
  const productId = questionsData.product_id;
  const productName = 'product name';
  const questions = questionsData.results;
  const changeQuestions = () => {};
  const count = 4;
  const changeCount = () => {};

  const wrapper = Enzyme.mount(
    <qaContext.Provider value={{
      questions,
      changeQuestions,
      count,
      changeCount,
      productName,
      productId,
    }}
    >
      <QuestionList />
    </qaContext.Provider>,
  );
  // console.log(wrapper.find('#questionlist'));
  expect(wrapper.find('#questionlist').children()).toHaveLength(4);
});
