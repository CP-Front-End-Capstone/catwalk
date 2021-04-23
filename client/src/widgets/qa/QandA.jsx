import React, { useState, useEffect, useContext, createContext } from 'react';
import api from '../../../../API/helper';
import productContext from '../../contexts/ProductContext';
import qaContext from '../../contexts/QaContext';
import QuestionList from './QuestionList.jsx';
import Search from './Search.jsx';

const QandA = () => {
  const { productId, changeProductId } = useContext(productContext);
  const [questions, changeQuestions] = useState([]);
  const [count, changeCount] = useState(4);
  const [page, changePage] = useState(1);

  useEffect(() => {
    api.fetchEndpoint(`/qa/questions?product_id=${productId}&count=100`)
      .then((questionsData) => {
        changeQuestions(questionsData.results.sort((a, b) => (
          b.question_helpfulness - a.question_helpfulness
        )));
      })
      .catch((error) => {
        console.log('Error fetching questions:', error);
      });
  }, [productId]);

  const handleClick = () => {
    changeProductId('18079');
  };

  if (questions.length > 0) {
    return (
      <div className="container">
        <div className="row">{JSON.stringify(productId)}</div>
        <div className="row">QUESTIONS & ANSWERS</div>
        <qaContext.Provider value={{
          questions,
          changeQuestions,
          count,
          changeCount,
          page,
          changePage,
        }}
        >
          <Search />
          <QuestionList />
        </qaContext.Provider>
        <button type="submit" className="row" onClick={handleClick}>Change Product</button>
      </div>
    );
  }
  return <div>Loading Questions and Answers...</div>;
};

export default QandA;
