/* eslint-disable react/prop-types */
import React, { Image, useState, useContext } from 'react';
import Modal from 'react-modal';
import axios from 'axios';
import Answer from './Answer.jsx';
import { validate, orderAnswers } from './helpers.js';
import { productContext } from '../../contexts/ProductContext';

const config = require('../../../../API/config.js');

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

// Modal.setAppElement('#app');

const addAnswer = (props) => {
  const {
    trackClicks,
    dateGenerator,
  } = useContext(productContext);
  const {
    question,
    name,
    changeAnswerList,
    answers,
    changeAnswers,
  } = props;
  const [modalIsOpen, setIsOpen] = useState(false);
  const [answer, changeAnswer] = useState('');
  const [nickname, changeNickname] = useState('');
  const [email, changeEmail] = useState('');
  const [photos, changePhotos] = useState([]);
  const wipeFormState = () => {
    changeAnswer('');
    changeNickname('');
    changeEmail('');
    changePhotos([]);
  };
  const openModal = () => {
    setIsOpen(true);
    trackClicks('Open Add Answer', 'QandA', dateGenerator());
  };
  const onCancel = (e) => {
    e.preventDefault();
    wipeFormState();
    setIsOpen(false);
    trackClicks('Cancel Add Answer', 'QandA', dateGenerator());
  };
  const onSubmit = (e) => {
    e.preventDefault();
    const newAnswer = {
      body: answer,
      name: nickname,
      email,
      photos,
    };
    wipeFormState();
    if (validate(newAnswer)) {
      axios({
        method: 'POST',
        url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-bld/qa/questions/${question.question_id}/answers`,
        data: newAnswer,
        headers: {
          Authorization: config.TOKEN,
        },
      })
        .then(() => {
          trackClicks('Submit New Answer', 'QandA', dateGenerator());
          axios({
            method: 'GET',
            url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-bld/qa/questions/${question.question_id}/answers?count=100`,
            headers: {
              Authorization: config.TOKEN,
            },
          })
            .then((newList) => {
              const answerList = orderAnswers(newList.data.results);
              changeAnswerList(
                answerList.map((ans) => (
                  <Answer
                    answer={ans}
                    key={ans.answerer_id}
                    answers={answers}
                    changeAnswers={changeAnswers}
                  />
                )),
              );
            })
            .catch((err) => {
              console.log('Error getting new answer list', err);
            });
        })
        .catch((err) => {
          console.log('ERROR: ', err);
        });
      setIsOpen(false);
    } else {
      window.alert('Invalid input');
    }
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
    if (photos.length < 5) {
      changePhotos(
        photos.concat(URL.createObjectURL(e.target.files[0])),
      );
    }
    trackClicks('Add Photo', 'QandA', dateGenerator());
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
        style={customStyles}
        contentLabel="Add Answer"
        ariaHideApp={false}
      >
        <h1 className="modal-title lead">Submit Your Answer:</h1>
        <div>
          {name}
          :&nbsp;
          {question.question_body}
        </div>
        <form name={`addAnswer${question.question_id}`}>
          <label htmlFor="answer">
            *Your Answer:
            <textarea name="answer" maxLength="1000" onChange={updateAnswer} required />
          </label>
          <br />
          <label htmlFor="name">
            *Your Nickname:
            <input type="text" name="name" maxLength="60" onChange={updateNickname} required />
            <br />
            (For privacy reasons, do not use your full name or email address)
            <br />
          </label>
          <br />
          <label htmlFor="email">
            *Your Email:
            <input type="email" name="email" maxLength="60" onChange={updateEmail} required />
            <br />
            (For authentication reasons, you will not be emailed)
            <br />
          </label>
          <br />
          <label htmlFor="photos">
            Photos: (optional)
            <input type="file"
              accept="image/gif, image/jpeg, image/png"
              name="photos"
              onChange={updatePhotos}
              required
            />
            <div className="row">
              {photos.map((photo) => (
                <span className="col" key={photo}>
                  <img src={photo} className="img-fluid img-thumbnail" alt="thumbnail" />
                </span>
              ))}
            </div>
          </label>
        </form>
        <button type="button" onClick={onCancel}>Cancel</button>
        <button type="button" onClick={onSubmit}>Submit</button>
      </Modal>
    </>
  );
};

export default addAnswer;
