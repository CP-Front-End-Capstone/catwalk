import React, { useContext } from 'react';
import Question from './Question.jsx';
import qaContext from '../../contexts/QaContext';

const QuestionList = () => {
  const { questions } = useContext(qaContext);
  const list = questions.map((question) => (
    <div className="col" key={question.question_id}>
      <Question question={question} />
    </div>
  ));
  return <>{list}</>;
};

export default QuestionList;
