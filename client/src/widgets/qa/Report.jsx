import React from 'react';
import axios from 'axios';
import config from '../../../../API/config.js';

const Report = (props) => {
  const { answer, answerList, changeAnswerList } = props;

  const handleClick = (e) => {
    e.preventDefault();
    axios({
      method: 'PUT',
      url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-bld/qa/answers/${answer.id}/report`,
      data: {
        answer_id: answer.id,
      },
      headers: {
        Authorization: config.TOKEN,
      },
    })
      .then((res) => {
        answerList.forEach((answer, index) => {
          console.log(answer, index);
        });
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
