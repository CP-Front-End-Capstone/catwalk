/* eslint-disable react/jsx-no-undef */
/* eslint-disable import/extensions */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React, { useContext } from 'react';
import ReactDOM from 'react-dom';
import Enzyme, { shallow } from 'enzyme';
import * as productContext from '../../client/src/contexts/ProductContext.js';
import productData from './productData.js';
import config from '../testconfig';
import App from '../../client/src/App.jsx';
import Overview from '../../client/src/widgets/overview/Overview';

describe('<QuestionList />', () => {
  let wrapper;
  beforeEach(() => {
    const productId = questionsData.product_id;
    const productName = 'product name';
    const questions = questionsData.results;
    const changeQuestions = () => {};
    const count = 4;
    const changeCount = () => {};
    wrapper = Enzyme.mount(
      <qaContext.Provider value={{
        questions,
        changeQuestions,
        count,
        changeCount,
        productName,
        productId,
      }}
      >
        <QuestionList />
      </qaContext.Provider>,
    );
  });
});
