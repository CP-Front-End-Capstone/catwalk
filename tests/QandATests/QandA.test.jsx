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
import Question from '../../client/src/widgets/qa/Question.jsx';

xdescribe('QuestionList component', () => {
  let wrapper;
  const productId = questionsData.product_id;
  const productName = 'Cool Product';
  const questions = questionsData.results;
  const changeQuestions = () => {};
  const count = 4;
  const changeCount = () => {};
  beforeEach(() => {
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
  const question = questionsData.results[0];
  const productName = 'Cool Product';
  beforeEach(() => {
    wrapper = Enzyme.mount(
      <Question
        question={question}
        name={productName}
        key={question.question_id}
      />,
    );
  });

  it('should render without crashing', () => {
    console.log(question.question_id);
    expect(wrapper.find(`#questionbody${question.question_id}`).exists()).to.be(true);
  });
});

xdescribe('Answer component', () => {
  let wrapper;
  beforeEach(() => {

  });
});

xdescribe('Helpful component', () => {
  let wrapper;
  beforeEach(() => {

  });
});

xdescribe('Report component', () => {
  let wrapper;
  beforeEach(() => {

  });
});

xdescribe('Add Question component', () => {
  let wrapper;
  beforeEach(() => {

  });
});

xdescribe('Add Answer component', () => {
  let wrapper;
  beforeEach(() => {

  });
});

xdescribe('Search component', () => {
  let wrapper;
  beforeEach(() => {

  });
});
