/* eslint-disable camelcase */
import React from 'react';
import Report from './Report.jsx';

const Answer = (props) => {
  const { answer } = props;
  const {id, body, date, answerer_name, helpfulness, photos} = answer;
  return (
    <div className="col">
      <div>A: {body}</div>
      <div>
        <span className="col">
          by {answerer_name} {(new Date(date)).toDateString().slice(4)}
        </span>
        <span className="col">|</span>
        <Report />
      </div>
    </div>
  );
};

export default Answer;
