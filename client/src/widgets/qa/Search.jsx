import React, { useContext, useState } from 'react';
import qaContext from '../../contexts/QaContext';

const Search = () => {
  const {
    questions,
    changeQuestions,
  } = useContext(qaContext);
  const [query, changeQuery] = useState('');

  return <input type="text" className="row" />;
};

export default Search;
