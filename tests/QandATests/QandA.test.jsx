/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable import/extensions */
import { promisify } from 'util';
import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme from 'enzyme';
import config from '../testconfig.js';
import QuestionList from '../../client/src/widgets/qa/QuestionList.jsx';
import qaContext from '../../client/src/contexts/QaContext.js';
import questionsData from './questionsData.js';

describe('QuestionList component', () => {
  let wrapper;
  beforeEach(() => {
    const productId = questionsData.product_id;
    const productName = 'product name';
    const questions = questionsData.results;
    const changeQuestions = () => {};
    const count = 4;
    const changeCount = () => {};
    wrapper = Enzyme.mount(
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
  });

  it('renders question list with 4 questions', () => {
    // console.log(wrapper.find('#questionlist'));
    expect(wrapper.find('#questionlist').children()).toHaveLength(4);
  });

  it('renders 4 questions on load', () => {
    expect(wrapper.find('#questionlist').children()).toHaveLength(4);
  });

  it('renders 4 more questions on click of "show more answered questions"', () => {
    const clickMoreQuestions = promisify(() => {
      wrapper.find('#morequestions').simulate('click');
    });
    clickMoreQuestions()
      .then(() => {
        expect(wrapper.find('#questionlist').children()).toHaveLength(8);
      });
  });
});

describe('Question component', () => {
  let wrapper;
  beforEach(() => {

  });
});

describe('Answer component', () => {
  let wrapper;
  beforEach(() => {

  });
});

describe('Helpful component', () => {
  let wrapper;
  beforEach(() => {

  });
});

describe('Report component', () => {
  let wrapper;
  beforEach(() => {

  });
});

describe('Add Question component', () => {
  let wrapper;
  beforEach(() => {

  });
});

describe('Add Answer component', () => {
  let wrapper;
  beforEach(() => {

  });
});

describe('Search component', () => {
  let wrapper;
  beforEach(() => {

  });
});
