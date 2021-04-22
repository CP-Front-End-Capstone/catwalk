import React, { useContext } from 'react';
import qaContext from '../../contexts/QaContext';

const Search = () => {
  const {
    questions,
    changeQuestions,
  } = useContext(qaContext);
  return <h1>Search Bar</h1>;
};

export default Search;
