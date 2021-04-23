import React, { useState, useEffect } from 'react';

const Helpful = (props) => {
  const { input } = props;
  if (input.hasOwnProperty('question_id')) {
    const count = input.question_helpfulness;
    return (
      <>
        <div className="col">Helpful?</div>
        <div className="col">Yes</div>
        <div className="col">({count})</div>
      </>
    );
  }
  const count = input.helpfulness;
  return (
    <>
      <div className="col">Helpful?</div>
      <div className="col">Yes</div>
      <div className="col">({count})</div>
    </>
  );
};

export default Helpful;