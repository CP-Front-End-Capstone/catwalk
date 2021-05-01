/* eslint-disable react/prop-types */
import React, { useState, useEffect, useContext } from 'react';
import { productContext } from '../../contexts/ProductContext';

const Search = (props) => {
  const {
    trackClicks,
    dateGenerator,
  } = useContext(productContext);
  const { questionList, changeQuestionList } = props;
  const [query, changeQuery] = useState('');

  const handleChange = (e) => {
    e.preventDefault();
    if (e.target.value.length === 39) { // new query
      changeQuery(e.target.value.slice(38));
    } else if (e.target.value.length === 37) { // protection from backspace on new query
      document.getElementById('search').value = 'Have a question? Search for answers...';
    } else { // continued new query
      changeQuery(e.target.value);
    }
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
      <div className="col">
        <input
          type="text"
          id="search"
          className="form-control"
          onChange={handleChange}
          onFocus={() => { trackClicks('Search', 'QandA', dateGenerator()); }}
          value={query !== '' ? query : 'Have a question? Search for answers...'}
          // ternary reset query on full delete by user
        />
      </div>
    </div>
  );
};

export default Search;
