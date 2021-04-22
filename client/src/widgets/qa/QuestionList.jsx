import React from 'react';
import Question from './Question.jsx';

const QuestionList = (props) => {
  const list = props.questions.map((question) => (
    <li key={question.question_id}>
      <Question question={question} />
    </li>
  ));

  return (
    <ul>{list}</ul>
  );
};

export default QuestionList;
