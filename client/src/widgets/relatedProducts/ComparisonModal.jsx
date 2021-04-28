/* eslint-disable max-len */
/* eslint-disable react/no-array-index-key */
/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import Modal from 'react-modal';
import { Checkmark } from 'react-checkmark';
import uuid from 'react-uuid';

// Modal.setAppElement('#app');

function ComparisonModal({ updateModal, product, currentProduct }) {
  console.log(product);
  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      width: '600px',
      height: '400px',
      border: '1px solid black',
    },
  };
  return (
    <Modal isOpen onRequestClose={() => updateModal(false)} style={customStyles}>
      <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={() => updateModal(false)}>
        <span aria-hidden="true">&times;</span>
      </button>
      <h1 className="modal-title lead">Comparing:</h1>
      <table className="table table-bordered table-hover">
        <thead className="thead-dark">
          <tr>
            <th scope="col">{currentProduct.name}</th>
            <th scope="col">Characteristic</th>
            <th scope="col">{product.name}</th>
          </tr>
        </thead>
        <tbody>
          {currentProduct.features.map((feature, index) => (
            <>
              <tr key={uuid()}>
                <td>{feature.value}</td>
                <td className="font-weight-bold">
                  {feature.feature}
                </td>
                <td>{(product.features[index] && product.features[index].feature === feature.feature) ? product.features[index].value : null}</td>
              </tr>
            </>
          ))}
          {product.features.map((relatedFeature, itemIndex) => (
            <>
              {(currentProduct.features[itemIndex] && currentProduct.features[itemIndex].feature === relatedFeature.feature) ? null
                : (
                  <tr key={uuid()}>
                    <td />
                    <td className="font-weight-bold">
                      {relatedFeature.feature}
                    </td>
                    <td>{relatedFeature.value === null ? <Checkmark size="small" color="#223344" /> : relatedFeature.value}</td>
                  </tr>
                )}
            </>
          ))}
        </tbody>
      </table>
      {/* {feature.feature === relatedFeature.feature ? <Checkmark size="small" color="#223344" /> : null} */}
    </Modal>
  );
}

export default ComparisonModal;
