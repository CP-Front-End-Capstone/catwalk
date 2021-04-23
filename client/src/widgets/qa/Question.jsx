/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
/* eslint-disable no-plusplus */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-one-expression-per-line */
import React, { useState, useEffect } from 'react';
import Answer from './Answer.jsx';

const Question = (props) => {
  const { question } = props;
  const [answerList, changeAnswerList] = useState([]);
  const [showAll, changeShowAll] = useState(false);

  const answers = [];
  for (const id in question.answers) {
    answers.push(question.answers[id]);
  }

  answers.sort((a, b) => (
    b.helpfulness - a.helpfulness
  ));

  const handleClick = (e) => {
    e.preventDefault();
    changeShowAll(true);
  };

  useEffect(() => {
    if (!showAll) {
      if (answers.length > 4) {
        const temp = [];
        for (let i = 0; i < 4; i++) {
          temp.push(<Answer answer={answers[i]} key={answers[i].id} />);
        }
        temp.push(<input
          type="button"
          className="btn"
          key={question.question_id}
          value="LOAD MORE ANSWERS"
          onClick={handleClick}
        />);
        changeAnswerList(temp);
      } else if (answers.length > 0) {
        changeAnswerList(answers.map((answer) => (
          <Answer answer={answer} key={answer.id} />
        )));
      }
    } else {
      changeAnswerList(answers.map((answer) => (
        <Answer answer={answer} key={answer.id} />
      )));
    }
  }, [showAll]);

  return (
    <>
      <div className="row">
        Q: {question.question_body}
      </div>
      {answerList}
    </>
  );
};

export default Question;
