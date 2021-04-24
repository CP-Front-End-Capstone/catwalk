/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
/* eslint-disable no-plusplus */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-one-expression-per-line */
import React, { useState, useEffect } from 'react';
import Answer from './Answer.jsx';
import Helpful from './Helpful.jsx';
import AddAnswer from './AddAnswer.jsx';

const Question = (props) => {
  const { question, name } = props;
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
      if (answers.length > 2) {
        const temp = [];
        for (let i = 0; i < 2; i++) {
          temp.push(<Answer answer={answers[i]} key={answers[i].id} />);
        }
        temp.push(
          <div key={question.question_id}>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <input
              type="button"
              className="btn"
              value="LOAD MORE ANSWERS"
              onClick={handleClick}
            />
          </div>,
        );
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
      <div className="row p-1">
        <div className="col h4">
          Q: {question.question_body}
        </div>
        <div className="col h6 text-right">
          <Helpful input={question} name={name} key={question.id} />
          <AddAnswer question={question} name={name} />
        </div>
      </div>
      {answerList}
    </>
  );
};

export default Question;
