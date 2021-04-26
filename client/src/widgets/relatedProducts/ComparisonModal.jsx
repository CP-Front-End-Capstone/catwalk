/* eslint-disable react/no-array-index-key */
/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import Modal from 'react-modal';
import { Checkmark } from 'react-checkmark';

Modal.setAppElement('#app');

function ComparisonModal({ updateModal, product, currentProduct }) {
  console.log('Comparison modal product features: ', product);
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
    <Modal isOpen onRequestClose={() => updateModal(false)} style={customStyles}>
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
              <tr key={index}>
                <td><Checkmark size="small" color="#223344" /></td>
                <td>
                  {feature.value}
                  {feature.value ? ',' : null}
                  {' '}
                  {feature.feature}
                </td>
                <td>{product.features[index].feature === feature.feature ? <Checkmark size="small" color="#223344" /> : null}</td>
              </tr>
              {product.features.map((relatedFeature, itemIndex) => (
                <tr key={itemIndex}>
                  <td>{currentProduct.features[index].feature === relatedFeature.feature ? <Checkmark size="small" color="#223344" /> : null}</td>
                  <td>
                    {relatedFeature.value}
                    {relatedFeature.value ? ',' : null}
                    {' '}
                    {relatedFeature.feature}
                  </td>
                  <td><Checkmark size="small" color="#223344" /></td>
                </tr>
              ))}
            </>
          ))}
        </tbody>
      </table>

    </Modal>
  );
}

export default ComparisonModal;
