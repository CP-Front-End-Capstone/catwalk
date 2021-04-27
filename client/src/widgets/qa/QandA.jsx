import React, { useState, useEffect, useContext, createContext } from 'react';
import api from '../../../../API/helper';
import { productContext } from '../../contexts/ProductContext';
import qaContext from '../../contexts/QaContext';
import QuestionList from './QuestionList.jsx';
import Search from './Search.jsx';

const QandA = () => {
  const { product, productId, changeProductId } = useContext(productContext);
  const [productName, changeProductName] = useState('');
  const [questions, changeQuestions] = useState([]);
  const [count, changeCount] = useState(4);

  useEffect(() => {
    if (typeof product === 'object') {
      changeProductName(product.name);
      api.fetchEndpoint(`/qa/questions?product_id=${product.id}&count=100`)
        .then((questionsData) => {
          changeQuestions(questionsData.results.sort((a, b) => (
            b.question_helpfulness - a.question_helpfulness
          )));
        })
        .catch((error) => {
          console.log('Error fetching questions:', error);
        });
    }
  }, [product]);

  const handleClick = () => {
    changeProductId('18079');
  };

  if (questions.length > 0) {
    return (
      <div className="container">
        <div className="row py-3">
          <div className="col lead">
            QUESTIONS & ANSWERS
          </div>
        </div>
        <qaContext.Provider value={{
          questions,
          changeQuestions,
          count,
          changeCount,
          productName,
          productId,
        }}
        >
          <Search />
          <QuestionList />
        </qaContext.Provider>
        <button type="submit" className="col" onClick={handleClick}>Change Product</button>
      </div>
    );
  }
  return <div>Loading Questions and Answers...</div>;
};

export default QandA;
