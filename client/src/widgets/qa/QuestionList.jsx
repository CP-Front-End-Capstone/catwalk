import React, { useContext } from 'react';
import Question from './Question.jsx';

const QuestionList = (props) => {
  const { questions } = useContext();
  const list = questions.map((question) => (
    <li key={question.question_id}>
      <Question question={question} />
    </li>
  ));

  return (
    <ul>{list}</ul>
  );
};

export default QuestionList;
