/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-console */
/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable no-unused-vars */
/* eslint-disable import/prefer-default-export */
import React, { createContext, useState, useEffect } from 'react';
import api from '../../../API/helper';

export const ProductContext = createContext();

export function ProductProvider(props) {
  return (
    <ProductContext.Provider value={{ product, setProduct }}>
      {props.children}
    </ProductContext.Provider>
  );
}

// whatever is passed in create Context is the default setting.
