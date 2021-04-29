/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable camelcase */
import React from 'react';
import Report from './Report.jsx';
import Helpful from './Helpful.jsx';

const Answer = (props) => {
  const { answer, answers, changeAnswers } = props;
  const { body, date, answerer_name } = answer;
  return (
    <>
      <div className="row text-left p-1">
        <div className="col h4">
          A: <span className="h6 font-weight-light">{body}</span>
        </div>
      </div>
      <div className="row">
        {answer.photos.map((photo) => (
          <span className="col" key={photo}>
            <img src={photo} className="img-fluid img-thumbnail" alt="thumbnail" />
          </span>
        ))}
      </div>
      <div className="row text-left p-1">
        <div className="col h6 font-weight-light">
          <span className="text-muted">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            by {answerer_name} {(new Date(date)).toDateString().slice(4)} |
          </span>
          <Helpful input={answer} />
          <Report answer={answer} answers={answers} changeAnswers={changeAnswers} />
        </div>
      </div>
    </>
  );
};

export default Answer;
