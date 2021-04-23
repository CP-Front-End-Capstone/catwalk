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
      <div className="row">A: {body}</div>
      <div className="row">
        <div className="col">
          by {answerer_name} {(new Date(date)).toDateString().slice(4)}
        </div>
        <div className="col">|</div>
        <Helpful input={answer} />
        <div className="col">|</div>
        <Report answer={answer} className="col" />
      </div>
    </>
  );
};

export default Answer;
