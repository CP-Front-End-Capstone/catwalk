/* eslint-disable no-plusplus */
/* eslint-disable react/prop-types */
import React from 'react';
import axios from 'axios';
import config from '../../../../API/config.js';

const Report = (props) => {
  const { answer, answers, changeAnswers } = props;

  const handleClick = (e) => {
    e.preventDefault();
    const id = answer.id !== undefined ? answer.id : answer.answer_id;
    axios({
      method: 'PUT',
      url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-bld/qa/answers/${id}/report`,
      data: {
        answer_id: answer.id,
      },
      headers: {
        Authorization: config.TOKEN,
      },
    })
      .then((res) => {
        const temp = answers.slice();
        for (let i = 0; i < temp.length; i++) {
          if (temp[i].id === answer.id) {
            temp.splice(i, 1);
            break;
          }
        }
        changeAnswers(temp);
      })
      .catch((err) => {
        console.log('ERR', err);
      });
  };

  return (
    <span
      className="btn h6 font-weight-light"
      onClick={handleClick}
    >
      <u>Report</u>
    </span>
  );
}

export default Report;
