/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import Modal from 'react-modal';

function ComparisonModal(props) {
  return (
    <Modal isOpen onRequestClose={() => props.updateModal(false)}>
      <h1>Modal</h1>
      <p>Modal Body</p>
      <div>
        {/* <button type="button" onClick={() => setModalIsOpen(false)}>Close</button> */}
      </div>
    </Modal>
  );
}

export default ComparisonModal;
