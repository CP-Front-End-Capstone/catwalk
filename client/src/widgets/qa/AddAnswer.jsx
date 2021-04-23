import React from 'react';

const AddAnswer = (props) => {
  const { question } = props;
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
              <h5 className="modal-title" id="addAnswerModalLabel">Add Answer</h5>
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
          </div>
        </div>
      </div>
    </>
  );
};

export default AddAnswer;
