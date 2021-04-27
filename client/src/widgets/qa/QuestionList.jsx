/* eslint-disable camelcase */
import React, { useContext, useState, useEffect } from 'react';
import Question from './Question.jsx';
import AddQuestion from './AddQuestion.jsx';
import Search from './Search.jsx';
import qaContext from '../../contexts/QaContext';

const QuestionList = () => {
  const {
    questions,
    count,
    changeCount,
    productName,
  } = useContext(qaContext);
  const [questionList, changeQuestionList] = useState([]);

  useEffect(() => {
    changeQuestionList(questions.slice(0, 4));
    changeCount(4);
  }, [questions]);

  useEffect(() => {
    changeQuestionList(questions.slice(0, count));
  }, [count]);

  const moreQuestions = () => {
    changeCount(count + 4);
  };

  return (
    <div className="h-75 overflow-auto" >
      <Search
        changeQuestionList={changeQuestionList}
        questionList={questions}
      />
      <div id="questionlist">
        {questionList.map((question) => (
          <Question question={question} name={productName} key={question.question_id} />
        ))}
      </div>
      <div className="row-3 p-1">
        <input
          type="button"
          className="btn btn-outline-secondary"
          value="MORE ANSWERED QUESTIONS"
          onClick={moreQuestions}
        />
        <AddQuestion
          name={productName}
          changeQuestionList={changeQuestionList}
          questionList={questions}
        />
      </div>
    </div>
  );
};

export default QuestionList;
