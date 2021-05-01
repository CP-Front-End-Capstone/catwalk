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
import Answer from '../../client/src/widgets/qa/Answer';

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

xdescribe('Question component', () => {
  let wrapper;
  const question = questionsData.results[1];
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

  it('should render the correct number of children', () => {
    expect(wrapper.find(`#questionbody${question.question_id}`).children()).toHaveLength(3);
  });
});

describe('Answer component', () => {
  let wrapper;
  const questions = questionsData.results[0];
  const answers = questions.answers;
  const answer = answers['68'];
  const id = answer.id;
  const changeAnswers = () => {};
  beforeEach(() => {
    wrapper = Enzyme.mount(
      <Answer
        answer={answer}
        id={id}
        key={id}
        answers={answers}
        changeAnswers={changeAnswers}
      />,
    );
  });

  it('should render without crashing', () => {
    console.log(wrapper);
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
