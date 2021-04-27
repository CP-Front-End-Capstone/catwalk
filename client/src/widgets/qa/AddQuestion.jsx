/* eslint-disable camelcase */
/* eslint-disable react/prop-types */
import React, { useState, useContext } from 'react';
import Modal from 'react-modal';
import axios from 'axios';
const config = require('../../../../API/config.js');
import Question from './Question.jsx';
import qaContext from '../../contexts/QaContext';

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

const addQuestion = (props) => {
  const {
    productName,
    productId,
  } = useContext(qaContext);
  const { changeQuestionList, questionList } = props;

  const [modalIsOpen, setIsOpen] = useState(false);
  const [question, changeQuestion] = useState('');
  const [nickname, changeNickname] = useState('');
  const [email, changeEmail] = useState('');

  const openModal = () => {
    setIsOpen(true);
  };
  const onCancel = (e) => {
    e.preventDefault();
    changeQuestion('');
    changeNickname('');
    changeEmail('');
    setIsOpen(false);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    const newQuestion = {
      body: question,
      name: nickname,
      email,
      product_id: parseInt(productId, 10),
    };
    // console.log(productId, typeof productId);
    axios({
      method: 'POST',
      url: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-bld/qa/questions',
      data: newQuestion,
      headers: {
        Authorization: config.TOKEN,
      },
    })
      .then((res) => {
        changeQuestion('');
        changeNickname('');
        changeEmail('');
        // console.log('RES: ', res);
      })
      .catch((err) => {
        console.log('ERROR: ', err);
      });
    setIsOpen(false);
  };
  const updateQuestion = (e) => {
    e.preventDefault();
    changeQuestion(e.target.value);
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
        contentLabel="Add Question"
      >
        <h1 className="modal-title lead"><u>Ask your question</u></h1>
        <div>About the {productName}</div>
        <form name={`addquestion${productId}`}>
          <label htmlFor="question">
            *Your Question:
            <textarea name="question" maxLength="1000" onChange={updateQuestion} />
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

export default addQuestion;
