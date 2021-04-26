/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-one-expression-per-line */
import React, { useState, useEffect } from 'react';
import AddAnswer from './AddAnswer.jsx';
import Report from './Report.jsx';

const Helpful = (props) => {
  const { input, name } = props;
  const handleClick = (e) => {
    e.preventDefault();
    console.log(input);
  };
  if (input.hasOwnProperty('question_id')) {
    const count = input.question_helpfulness;
    return ( // Helpful Question
      <span onClick ={handleClick} className="btn h6 text-right font-weight-light">
        &nbsp;Helpful?&nbsp;
        <u>Yes</u>&nbsp;({count})&nbsp;|&nbsp;
      </span>
    );
  }
  const count = input.helpfulness;
  return ( // Helpful Answer
    <span className="h6 text-left font-weight-light">
      &nbsp;Helpful?&nbsp;
      <u>Yes</u>&nbsp;({count})&nbsp;|&nbsp;
    </span>
  );
};

export default Helpful;
