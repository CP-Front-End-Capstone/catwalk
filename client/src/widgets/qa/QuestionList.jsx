import React, { useContext, useState, useEffect } from 'react';
import Question from './Question.jsx';
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

  const addQuestion = () => {

  };

  return (
    <div className="h-75 overflow-auto">
      {questionList.map((question) => (
        <Question question={question} name={productName} key={question.question_id} />
      ))}
      <div className="row-3 p-1">
        <input
          type="button"
          className="btn btn-outline-secondary"
          value="MORE ANSWERED QUESTIONS"
          onClick={moreQuestions}
        />
        <input
          type="button"
          className="btn btn-outline-secondary"
          value="ADD A QUESTION +"
          onClick={addQuestion}
        />
      </div>
    </div>
  );
};

export default QuestionList;
