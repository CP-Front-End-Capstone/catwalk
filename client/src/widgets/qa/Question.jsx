/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
/* eslint-disable no-plusplus */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-one-expression-per-line */
import React, { useState, useEffect } from 'react';
import Answer from './Answer.jsx';

const Question = (props) => {
  const { question } = props;
  let answers = [];
  for (const id in question.answers) {
    answers.push(question.answers[id]);
  }
  const answersList = answers.map((answer) => (
    <div className="col" key={answer.id}>
      <Answer answer={answer} />
    </div>
  ));
  return (
    <>
      <div className="col">
        Q: {question.question_body}
      </div>
      {answersList}
      <input type="button" className="btn" value="LOAD MORE ANSWERS" />
    </>
  );
};

export default Question;
