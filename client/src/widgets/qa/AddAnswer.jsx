import React from 'react';

const AddAnswer = (props) => {
  const { question, name } = props;
  return (
    <>
      <span
        className="btn h6 font-weight-light"
        data-toggle="modal"
        data-target={`#addAnswer${question.question_id}`}
      >
        <u>Add Answer</u>
      </span>
      <div className="modal fade text-left" id={`addAnswer${question.question_id}`} tabIndex="-1" aria-labelledby="addAnswerModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="addAnswerModalLabel">
                Submit your answer:
              </h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <div>{name}:&nbsp;{question.question_body}</div>
            <form>
              <label>
                *Your Answer:
                <textarea name="answer" maxLength="1000" />
              </label>
              <br />
              <label>
                *Your Name:
                <input type="text" name="name" maxLength="60" />
                <br />
                (For privacy reasons, do not use your full name or email address)
                <br />
              </label>
              <br />
              <label>
                *Your Email:
                <input type="email" name="email" maxLength="60" />
                <br />
                (For authentication reasons, you will not be emailed)
                <br />
              </label>
              <br />
              <label>
                Photos: (optional)
                <input type="file" name="photos" />
              </label>
            </form>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-primary">Submit</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddAnswer;
