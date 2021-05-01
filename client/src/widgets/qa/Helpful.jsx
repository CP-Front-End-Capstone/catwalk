/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-one-expression-per-line */
import React, { useState, useEffect, useContext } from 'react';
import AddAnswer from './AddAnswer.jsx';
import Report from './Report.jsx';
import axios from 'axios';
import config from '../../../../API/config.js';
import { productContext } from '../../contexts/ProductContext';

const Helpful = (props) => {
  const { input } = props;
  const {
    trackClicks,
    dateGenerator,
  } = useContext(productContext);
  const [count, changeCount] = useState(0);
  const [clicked, changedclicked] = useState(false);
  useEffect(() => {
    if (input.hasOwnProperty('question_id')) {
      changeCount(input.question_helpfulness);
    } else {
      changeCount(input.helpfulness);
    }
  }, [input]);

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
        trackClicks('Helpful Question', 'QandA', dateGenerator());
        changeCount(count + 1);
        changedclicked(true);
      })
      .catch((err) => {
        console.log('ERR', err);
      });
  };
  const handleAnswer = (e) => {
    e.preventDefault();
    const id = input.id !== undefined ? input.id : input.answer_id;
    axios({
      method: 'PUT',
      url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-bld/qa/answers/${id}/helpful`,
      data: {
        answer_id: input.id,
      },
      headers: {
        Authorization: config.TOKEN,
      },
    })
      .then((res) => {
        trackClicks('Helpful Answer', 'QandA', dateGenerator());
        changeCount(count + 1);
        changedclicked(true);
      })
      .catch((err) => {
        console.log('ERR', err);
      });
  };

  if (input.hasOwnProperty('question_id')) {
    if (!clicked) {
      return ( // Helpful Question
        <span onClick ={handleQuestion} className="btn h6 text-right font-weight-light">
          &nbsp;Helpful?&nbsp;
          <u>Yes</u>&nbsp;({count})&nbsp;|&nbsp;
        </span>
      );
    }
    return (
        <span className="btn h6 text-right font-weight-light">
          &nbsp;Helpful?&nbsp;({count})&nbsp;|&nbsp;
        </span>
    );
  }
  if (!clicked) {
    return ( // Helpful Answer
      <span onClick ={handleAnswer} className="btn h6 text-left font-weight-light">
        &nbsp;Helpful?&nbsp;
        <u>Yes</u>&nbsp;({count})&nbsp;|&nbsp;
      </span>
    );
  }
  return (
    <span className="btn h6 text-right font-weight-light">
      &nbsp;Helpful?&nbsp;({count})&nbsp;|&nbsp;
    </span>
  );
};

export default Helpful;
