/* eslint-disable camelcase */
import React from 'react';
import Report from './Report.jsx';

const Answer = (props) => {
  const { answer } = props;
  const {id, body, date, answerer_name, helpfulness, photos} = answer;
  return (
    <>
      <div className="row">A: {body}</div>
      <div className="row">
        <div className="col">
          by {answerer_name} {(new Date(date)).toDateString().slice(4)}
        </div>
        <div className="col">|</div>
        <Report className="col" />
      </div>
    </>
  );
};

export default Answer;
