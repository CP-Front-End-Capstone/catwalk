/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';

const Search = (props) => {
  const { questionList, changeQuestionList } = props;
  const [query, changeQuery] = useState('');

  const handleChange = (e) => {
    e.preventDefault();
    changeQuery(e.target.value);
  };

  useEffect(() => {
    if (query.length > 2) {
      changeQuestionList(questionList.filter((question) => (
        question.question_body.includes(query)
      )));
    } else {
      changeQuestionList(questionList);
    }
  }, [query]);

  return (
    <div className="row p-1">
      <div className="col-11">
        <input 
          type="text"
          id="search"
          className="form-control"
          onChange={handleChange}
          value={query !== '' ? query : 'Have a question? Search for answers...'}
          // readOnly=""
          onFocus={() => {
            if (query === '') {
              document.getElementById('search').value = '';
            }
          }}
          onBlur={() => {
            if (query === '') {
              document.getElementById('search').value = 'Have a question? Search for answers...';
            }
          }}
        />
      </div>
      <div className="col-1">
        Q
      </div>
    </div>
  )
};

export default Search;
