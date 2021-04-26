/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import Modal from 'react-modal';
import axios from 'axios';
const config = require('../../../../API/config.js');
import Answer from './Answer.jsx';

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
  const { question, name, changeAnswerList, answerList } = props;

  const [modalIsOpen, setIsOpen] = useState(false);
  const [answer, changeAnswer] = useState('');
  const [nickname, changeNickname] = useState('');
  const [email, changeEmail] = useState();
  const [photos, changePhotos] = useState([]);
  const openModal = () => {
    setIsOpen(true);
  };
  const onCancel = (e) => {
    e.preventDefault();
    changeAnswer('');
    changeNickname('');
    changeEmail('');
    changePhotos([]);
    setIsOpen(false);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    const newAnswer = {
      body: answer,
      name: nickname,
      email,
      photos,
    }
    axios({
      method: 'POST',
      url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-bld/qa/questions/${question.question_id}/answers`,
      data: newAnswer,
      headers: {
        Authorization: config.TOKEN,
      },
    })
      .then((res) => {
        changeAnswerList(answerList.push(<Answer />));
        changeAnswer('');
        changeNickname('');
        changeEmail('');
        changePhotos([]);
      })
      .catch((err) => {
        console.log('ERROR: ', err);
      });
    setIsOpen(false);
  };
  const updateAnswer = (e) => {
    e.preventDefault();
    changeAnswer(e.target.value);
  };

  const updateNickname = (e) => {
    e.preventDefault();
    changeNickname(e.target.value);
  };

  const updateEmail = (e) => {
    e.preventDefault();
    changeEmail(e.target.value);
  };

  const updatePhotos = (e) => {
    e.preventDefault();
    console.log(e.target.value);
    changePhotos(e.target.value);
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
        <form name={`addAnswer${question.question_id}`}>
          <label htmlFor="answer">
            *Your Answer:
            <textarea name="answer" maxLength="1000" onChange={updateAnswer} />
          </label>
          <br />
          <label htmlFor="name">
            *Your Nickname:
            <input type="text" name="name" maxLength="60" onChange={updateNickname} />
            <br />
            (For privacy reasons, do not use your full name or email address)
            <br />
          </label>
          <br />
          <label htmlFor="email">
            *Your Email:
            <input type="email" name="email" maxLength="60" onChange={updateEmail} />
            <br />
            (For authentication reasons, you will not be emailed)
            <br />
          </label>
          <br />
          <label htmlFor="photos">
            Photos: (optional)
            <input type="file" name="photos" onChange={updatePhotos} />
          </label>
        </form>
        <button type="button" onClick={onCancel}>Cancel</button>
        <button type="button" onClick={onSubmit}>Submit</button>
      </Modal>
    </>
  );
};

export default addAnswer;
// POST /qa/questions/:question_id/answers

// Parameters

// Parameter	Type	Description
// question_id	integer	Required ID of the question to post the answer for
// Body Parameters

// Parameter	Type	Description
// body	text	Text of question being asked
// name	text	Username for question asker
// email	text	Email address for question asker
// photos	[text]	An array of urls corresponding to images to display

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

