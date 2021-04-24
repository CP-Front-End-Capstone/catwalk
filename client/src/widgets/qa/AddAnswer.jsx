import React from 'react';

<<<<<<< HEAD
const AddAnswer = (props) => {
  const { question, name } = props;
  return (
    <>
      <span
        className="btn h6 font-weight-light"
        data-toggle="modal"
        data-target="#addAnswerModal"
      >
        <u>Add Answer</u>
      </span>
      <div className="modal fade text-left" id="addAnswerModal" tabIndex="-1" aria-labelledby="addAnswerModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="addAnswerModalLabel">Submit your answer:</h5>
              <h6>{name}:&nbsp;{JSON.stringify(question.question_body)}</h6>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
            <form>
              <label>
                *Answer:
                <textarea name="answer" maxLength="1000" />
              </label>
              <br />
              <label>
                *Name:
                <input type="text" name="name" maxLength="60" />
                <br />
                (For privacy reasons, do not use your full name or email address)
                <br />
              </label>
              <br />
              <label>
                *Email:
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
=======
const AddAnswer = () => (
  <>
    <span
      className="btn h6 font-weight-light"
      data-toggle="modal"
      data-target="#addAnswerModal"
    >
      <u>Add Answer</u>
    </span>
    <div className="modal fade" id="addAnswerModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">Add Answer</h5>
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            ...
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
            <button type="button" className="btn btn-primary">Save changes</button>
>>>>>>> parent of b874992... works on addAnswer modal
          </div>
        </div>
      </div>
    </div>
  </>
);

export default AddAnswer;
