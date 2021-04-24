import React from 'react';

const Report = (props) => {
  const { answer, changeAnswerList } = props;

  const handleClick = () => {

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
