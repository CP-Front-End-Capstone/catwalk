/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-one-expression-per-line */
import React, { useState, useEffect } from 'react';
import AddAnswer from './AddAnswer.jsx';
import Report from './Report.jsx';

const Helpful = (props) => {
  const { input } = props;
  if (input.hasOwnProperty('question_id')) {
    const count = input.question_helpfulness;
    return ( // Helpful Question
      <span className="col h6 text-right font-weight-light g-4">
        &nbsp;Helpful?&nbsp;<span className="btn"><u>Yes</u></span>&nbsp;({count})&nbsp;|&nbsp;<AddAnswer question={input} />
      </span>
    );
  }
  const count = input.helpfulness;
  return ( // Helpful Answer
    <span className="h6 text-left font-weight-light">
      &nbsp;Helpful?&nbsp;<span className="btn"><u>Yes</u></span>&nbsp;({count})&nbsp;|&nbsp;<Report answer={input} />
    </span>
  );
};

export default Helpful;
