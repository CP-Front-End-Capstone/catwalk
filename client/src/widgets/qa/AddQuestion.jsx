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
  const { name, changeQuestionList, questionList } = props;

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
        changeAnswer('');
        changeNickname('');
        changeEmail('');
        changePhotos([]);
        axios({
          method: 'GET',
          url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-bld/qa/questions/${question.question_id}/answers?count=100`,
          headers: {
            Authorization: config.TOKEN,
          },
        })
          .then((newList) => {
            changeAnswerList(newList.data.results.map((ans) => (
              <Answer answer={ans} key={ans.answer_id} />
            )));
          })
          .catch((err) => {
            console.log('Error getting new answer list', err);
          });
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


  return (
    <>
      <input
        type="button"
        className="btn btn-outline-secondary"
        value="ADD A QUESTION +"
        onClick={openModal}
      />

      <Modal
        isOpen={modalIsOpen}
        style={customStyles}
        contentLabel="Add Answer"
      >
        <h1 className="modal-title lead"><u>Ask you question</u></h1>
        <div>About the PRODUCT NAME</div>
        <form name={`addQuestion`}>
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
        </form>
        <button type="button" onClick={onCancel}>Cancel</button>
        <button type="button" onClick={onSubmit}>Submit</button>
      </Modal>
    </>
  );
};

export default addAnswer;
