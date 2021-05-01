/* eslint-disable react/jsx-no-undef */
/* eslint-disable import/extensions */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React, { useContext } from 'react';
import ReactDOM from 'react-dom';
import Enzyme, { shallow, mount } from 'enzyme';
import * as productContext from '../../client/src/contexts/ProductContext.js';
import * as styleContext from '../../client/src/contexts/StyleContext.js';
import productData from './productData.js';
import stylesData from './stylesData.js';
import config from '../testconfig';
import App from '../../client/src/App.jsx';
import Styles from '../../client/src/widgets/overview/Styles';

describe('<QuestionList />', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(
      <Styles />, {
        wrappingComponent: styleContext.provider,
        wrappingComponentProps: {
          value: {
            styles: stylesData.results,
            currentStyle: stylesData.results[0],
            setStyle: () => {},
            setImage: () => {},
            curStyleInd: 0,
            setCurStyleInd: () => {},
          },
        },
      },
    );
  });

  it('Styles component does not crash', () => {
    expect(wrapper).toHaveLength(1);
  });
});
