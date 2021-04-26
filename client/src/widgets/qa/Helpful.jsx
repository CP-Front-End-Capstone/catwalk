/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-one-expression-per-line */
import React, { useState, useEffect } from 'react';
import AddAnswer from './AddAnswer.jsx';
import Report from './Report.jsx';
import axios from 'axios';
import config from '../../../../API/config.js';

const Helpful = (props) => {
  const { input } = props;
  const handleQuestion = (e) => {
    e.preventDefault();
    axios({
      method: 'PUT',
      url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-bld/qa/questions/${input.question_id}/helpful`,
      data: {
        question_id: input.question_id,
      },
      headers: {
        Authorization: config.TOKEN,
      },
    })
      .then((res) => {
        console.log('RES: ', res);
      })
      .catch((err) => {
        console.log('ERR', err);
      });
  };
  const handleAnswer = (e) => {
    e.preventDefault();

  };
  if (input.hasOwnProperty('question_id')) {
    const count = input.question_helpfulness;
    return ( // Helpful Question
      <span onClick ={handleQuestion} className="btn h6 text-right font-weight-light">
        &nbsp;Helpful?&nbsp;
        <u>Yes</u>&nbsp;({count})&nbsp;|&nbsp;
      </span>
    );
  }
  const count = input.helpfulness;
  return ( // Helpful Answer
    <span onClick ={handleAnswer} className="btn h6 text-left font-weight-light">
      &nbsp;Helpful?&nbsp;
      <u>Yes</u>&nbsp;({count})&nbsp;|&nbsp;
    </span>
  );
};

export default Helpful;
