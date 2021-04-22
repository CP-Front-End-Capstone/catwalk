/* eslint-disable camelcase */
import React from 'react';
import Report from './Report.jsx';

const Answer = (props) => {
  const { answer } = props;
  const {id, body, date, answerer_name, helpfulness, photos} = answer;
  return (
    <>
      <div>A: {body}</div>
      <div>
        <span>
          by {answerer_name} {(new Date(date)).toDateString().slice(4)}
        </span>
        <span> | </span>
        <Report />
      </div>
    </>

  );
};

export default Answer;
