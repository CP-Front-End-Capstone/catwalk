import React, { useContext, useState } from 'react';
import qaContext from '../../contexts/QaContext';

const Search = () => {
  const {
    questions,
    changeQuestions,
  } = useContext(qaContext);
  const [query, changeQuery] = useState('');
  const handleChange = (e) => {
    
  };
  return <input type="text" className="col" onChange={handleChange} />;
};

export default Search;
