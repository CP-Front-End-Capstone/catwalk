import React, { useContext, useState, useEffect } from 'react';
import Question from './Question.jsx';
import qaContext from '../../contexts/QaContext';

const QuestionList = () => {
  const { questions, count, changeCount } = useContext(qaContext);
  const [questionList, changeQuestionList] = useState([]);

  useEffect(() => {
    changeQuestionList(questions.slice(0, count));
  }, [questions, count]);

  return (
    <>
      {questionList.map((question) => (
        <Question question={question} key={question.question_id} />
      ))}
    </>
  );
};

export default QuestionList;
