/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import Modal from 'react-modal';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    width: '500px',
    height: '300px',
    border: '1px solid black',
  },
};

Modal.setAppElement('#app');

const addAnswer = (props) => {
  const { question, name, changeAnswerList } = props;
  const [modalIsOpen, setIsOpen] = useState(false);
  const openModal = () => {
    setIsOpen(true);
  };
  const onCancel = () => {
    setIsOpen(false);
  };
  const onSubmit = () => {
    setIsOpen(false);
  };

  return (
    <>
      <span
        className="btn h6 font-weight-light"
        onClick={openModal}
      >
        <u>Add Answer</u>
      </span>
      <Modal
        isOpen={modalIsOpen}
        // onAfterOpen={afterOpenModal}
        // onRequestClose={onCancel}
        style={customStyles}
        contentLabel="Add Answer"
      >
        <h1 className="modal-title lead">Submit Your Answer:</h1>
        <div>{name}:&nbsp;{question.question_body}</div>
        <form>
          <label htmlFor="answer">
            *Your Answer:
            <textarea name="answer" maxLength="1000" />
          </label>
          <br />
          <label htmlFor="name">
            *Your Name:
            <input type="text" name="name" maxLength="60" />
            <br />
            (For privacy reasons, do not use your full name or email address)
            <br />
          </label>
          <br />
          <label htmlFor="email">
            *Your Email:
            <input type="email" name="email" maxLength="60" />
            <br />
            (For authentication reasons, you will not be emailed)
            <br />
          </label>
          <br />
          <label htmlFor="photos">
            Photos: (optional)
            <input type="file" name="photos" />
          </label>
        </form>
        <button type="button" onClick={onCancel}>Cancel</button>
        <button type="button" onClick={onSubmit}>Submit</button>
      </Modal>
    </>
  );
};

export default addAnswer;

// const AddAnswer = (props) => {
//   const { question, name, changeAnswerList } = props;

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log(e.target.value);
//   };
//   return (
//     <>
//       <span
//         className="btn h6 font-weight-light"
//         data-toggle="modal"
//         data-target={`#addAnswer${question.question_id}`}
//       >
//         <u>Add Answer</u>
//       </span>
//       <div className="modal fade text-left" id={`addAnswer${question.question_id}`} tabIndex="-1" aria-labelledby="addAnswerModalLabel" aria-hidden="true">
//         <div className="modal-dialog">
//           <div className="modal-content" onSubmit={handleSubmit}>
//             <div className="modal-header">
//               <h5 className="modal-title" id="addAnswerModalLabel">
//                 Submit your answer:
//               </h5>
//               <button type="button" className="close" data-dismiss="modal" aria-label="Close">
//                 <span aria-hidden="true">&times;</span>
//               </button>
//             </div>
//             <div className="modal-body">
//               <div>{name}:&nbsp;{question.question_body}</div>
//               <form>
//                 <label>
//                   *Your Answer:
//                   <textarea name="answer" maxLength="1000" />
//                 </label>
//                 <br />
//                 <label>
//                   *Your Name:
//                   <input type="text" name="name" maxLength="60" />
//                   <br />
//                   (For privacy reasons, do not use your full name or email address)
//                   <br />
//                 </label>
//                 <br />
//                 <label>
//                   *Your Email:
//                   <input type="email" name="email" maxLength="60" />
//                   <br />
//                   (For authentication reasons, you will not be emailed)
//                   <br />
//                 </label>
//                 <br />
//                 <label>
//                   Photos: (optional)
//                   <input type="file" name="photos" />
//                 </label>
//               </form>
//             </div>
//             <div className="modal-footer">
//               <button type="submit" className="btn btn-primary">Submit</button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default AddAnswer;

