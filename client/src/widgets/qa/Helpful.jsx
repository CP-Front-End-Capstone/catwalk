/* eslint-disable react/jsx-one-expression-per-line */
import React, { useState, useEffect } from 'react';
import AddAnswer from './AddAnswer.jsx';
import Report from './Report.jsx';

const Helpful = (props) => {
  const { input } = props;
  if (input.hasOwnProperty('question_id')) {
    const count = input.question_helpfulness;
    return ( // Helpful Question
      <div className="col h6 text-right font-weight-light">
        <div className="row">
          &nbsp;Helpful?&nbsp;<u>Yes</u>&nbsp;({count})&nbsp;|&nbsp;<AddAnswer question={input} />
        </div>
      </div>
    );
  }
  const count = input.helpfulness;
  return ( // Helpful Answer
    <div className="col h6 text-left font-weight-light">
      <div className="row">
        &nbsp;Helpful?&nbsp;<u>Yes</u>&nbsp;({count})&nbsp;|&nbsp;<Report answer={input} />
      </div>
    </div>
  );
};

export default Helpful;
