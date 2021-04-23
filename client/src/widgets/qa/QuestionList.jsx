import React, { useContext, useState } from 'react';
import Question from './Question.jsx';
import qaContext from '../../contexts/QaContext';

const QuestionList = () => {
  const { questions, count, changeCount } = useContext(qaContext);
  const [questionList, changeQuestionList] = useState(questions.slice(0, 4));
  console.log(questionList);
  console.log(questions);

  return (
    <div className="row">
      {}
    </div>
  );
};

export default QuestionList;
