import React, { useState, useEffect, useContext } from 'react';
import api from '../../../../API/helper';
import productContext from '../../contexts/ProductContext';
import QuestionList from './QuestionList.jsx';

const QandA = (props) => {
  const product = useContext(productContext);
  const [questions, changeQuestions] = useState();

  useEffect(() => {
    api.fetchEndpoint(`/qa/questions?product_id=${product.productId}`)
      .then((questionsData) => {
        changeQuestions(questionsData.results);
      })
      .catch((error) => {
        console.log('Error fetching questions:', error);
      });
  }, [product.productId]);

  const handleClick = () => {
    product.changeProductId('18079');
  };
  if (questions) {
    return (
      <>
        <div>{JSON.stringify(product.productId)}</div>
        <QuestionList questions={questions} />
        <button onClick={handleClick}>Change Product</button>
      </>
    );
  } else {
    return <div>Loading Questions and Answers...</div>
  }
};
export default QandA;
