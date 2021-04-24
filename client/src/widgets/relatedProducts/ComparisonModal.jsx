/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#app');

function ComparisonModal(props) {
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
  return (
    <Modal isOpen onRequestClose={() => props.updateModal(false)} style={customStyles}>
      <div className="container">
        <h1>Comparison</h1>
        <p>Yo what up, this is a comparison</p>
      </div>
    </Modal>
  );
}

export default ComparisonModal;
