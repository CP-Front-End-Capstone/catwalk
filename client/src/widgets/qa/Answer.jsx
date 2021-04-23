/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable camelcase */
import React from 'react';
import Report from './Report.jsx';
import Helpful from './Helpful.jsx';

const Answer = (props) => {
  const { answer } = props;
  const { body, date, answerer_name } = answer;
  return (
    <>
      <div className="row h4">A:
        <div className="col h6">{body}</div>
      </div>
      <div className="row h6 text-left font-weight-light ">
        by {answerer_name} {(new Date(date)).toDateString().slice(4)} | <Helpful input={answer} />
      </div>
    </>
  );
};

export default Answer;
