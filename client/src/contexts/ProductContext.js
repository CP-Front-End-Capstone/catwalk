/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-console */
/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable no-unused-vars */
/* eslint-disable import/prefer-default-export */
import React, { createContext, useContext } from 'react';

export const productContext = createContext({
  product: {},
  productId: '',
});

// whatever is passed in create Context is the default setting.
