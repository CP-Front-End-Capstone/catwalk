/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable import/extensions */
import { promisify } from 'util';
import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Enzyme from 'enzyme';
import config from '../testconfig.js';
import QuestionList from '../../client/src/widgets/qa/QuestionList.jsx';
import qaContext from '../../client/src/contexts/QaContext.js';
import questionsData from './questionsData.js';
import Question from '../../client/src/widgets/qa/Question.jsx';
import Answer from '../../client/src/widgets/qa/Answer';
import Helpful from '../../client/src/widgets/qa/Helpful';
import Report from '../../client/src/widgets/qa/Report';
import AddAnswer from '../../client/src/widgets/qa/AddAnswer';
import AddQuestion from '../../client/src/widgets/qa/AddQuestion';

describe('QuestionList component', () => {
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
  const question = questionsData.results[0];
  const { answers } = question;
  const answer = answers['68'];
  const { id } = answer;
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

  it('should render Answer without crashing', () => {
  });
});

describe('Helpful component', () => {
  let wrapper;
  const question = questionsData.results[0];
  beforeEach(() => {
    wrapper = Enzyme.mount(
      <Helpful
        input={question}
        key={question.question_id}
      />,
    );
  });
  it('should render Helpful without crashing', () => {
  });
});

describe('Report component', () => {
  let wrapper;
  const question = questionsData.results[0];
  const { answers } = question;
  const answer = answers['68'];
  beforeEach(() => {
    wrapper = Enzyme.mount(
      <Report
        answer={answer}
        answers={answers}
        changeAnswers={() => {}}
      />,
    );
  });
  it('should render Report without crashing', () => {
  });
});

xdescribe('Add Question component', () => { // broken
  let wrapper;
  const [questionList, changeQuestionList] = useState(questionsData.results);
  beforeEach(() => {
    wrapper = Enzyme.mount(
      <AddQuestion
        name={productName}
        changeQuestionList={changeQuestionList}
        questionList={questions}
      />,
    );
  });
  it('should render Add Question without crashing', () => {});
});

xdescribe('Add Answer component', () => { // broken
  let wrapper;
  const question = questionsData.results[0];
  const [answers, changeAnswers] = useState(question.answers);
  const [answersList, changeAnswersList] = useState(
    answers.map((ans) => (
      <Answer
        answer={ans}
        key={ans.answerer_id}
        answers={answers}
        changeAnswers={changeAnswers}
      />
    )),
  );
  const answer = answers['68'];
  const { id } = answer;
  beforeEach(() => {
    wrapper = Enzyme.mount(
      <AddAnswer
        question={question}
        name="Cool Product"
        changeAnswerList={changeAnswersList}
        answers={answers}
        changeAnswers={changeAnswers}
      />,
    );
  });
  it('should render Add Answer without crashing', () => {});
});

xdescribe('Search component', () => { // not implemented
  let wrapper;
  beforeEach(() => {

  });
  it('should render Search without crashing', () => {});
});
