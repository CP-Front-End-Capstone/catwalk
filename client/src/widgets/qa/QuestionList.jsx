import React, { useContext, useState, useEffect } from 'react';
import Question from './Question.jsx';
import qaContext from '../../contexts/QaContext';

const QuestionList = () => {
  const { questions, count, changeCount } = useContext(qaContext);
  const [questionList, changeQuestionList] = useState([]);

  useEffect(() => {
    changeQuestionList(questions.slice(0, 4));
    changeCount(4);
  }, [questions]);

  useEffect(() => {
    changeQuestionList(questions.slice(0, count));
  }, [count]);

  const handleClick = () => {
    changeCount(count + 4);
  };

  return (
    <>
      {questionList.map((question) => (
        <Question question={question} key={question.question_id} />
      ))}
      <input
        type="button"
        value="Show more questions..."
        onClick={handleClick}
      />
    </>
  );
};

export default QuestionList;
