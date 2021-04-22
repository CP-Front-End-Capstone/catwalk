import React, { useContext } from 'react';
import Question from './Question.jsx';
import qaContext from '../../contexts/QaContext';

const QuestionList = () => {
  const { questions } = useContext(qaContext);
  const list = questions.map((question) => (
    <div key={question.question_id}>
      <Question question={question} />
    </div>
  ));

  return (
    <>
      <ul>{list}</ul>
    </>
  );
};

export default QuestionList;
