import React, { useContext, useState } from 'react';
import qaContext from '../../contexts/QaContext';

const Search = () => {
  const {
    questions,
    changeQuestions,
    count,
    changeCount,
    productName,
  } = useContext(qaContext);
  const [query, changeQuery] = useState('');

  const handleChange = (e) => {
    e.preventDefault();
    changeQuery(e.value);
  };

  return (
    <div className="row p-1">
      <div className="col">
        <input type="text" className="form-control" onChange={handleChange} value="Have a question? Search for answers..." />
      </div>
    </div>
  )
};

export default Search;
