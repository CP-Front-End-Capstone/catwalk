import React, { useState, useEffect } from 'react';

const Question = (props) => {
  const { question } = props;
  const [showAll, changeShowAll] = useState(false);
  const [answersList, changeAnswersList] = useState([]);
  useEffect(() => {
    if (showAll) {
      changeAnswersList(
        question.answers.map((question) => {

        })
      );
    } else {

    }
  }, [showAll]);

  return (
    <>
      <div>
        Q:
        {props.question.question_body}
      </div>
      <div>{}</div>
    </>
  );
};

export default Question;
