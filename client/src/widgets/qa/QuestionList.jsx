import React, { useContext, useState } from 'react';
import Question from './Question.jsx';
import qaContext from '../../contexts/QaContext';

const QuestionList = () => {
  const { questions, count, changeCount } = useContext(qaContext);
  const [questionList, changeQuestionList] = useState(questions.slice(0, 4));

  return (
    <div className="row">
      {questionList.map((question) => (
        <Question question={question} />
      ))}
    </div>
  );
};

export default QuestionList;
