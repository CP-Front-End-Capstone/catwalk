/* eslint-disable import/prefer-default-export */
/* eslint-disable no-unused-vars */
import React, { createContext } from 'react';

export const styleContext = createContext({
  styles: [],
  currentStyle: {},
  setStyle: () => {},
  setImage: () => {},
  curStyleInd: 0,
  setCurStyleInd: () => {},
});
