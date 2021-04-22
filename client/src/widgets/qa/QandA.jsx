import React, { useState, useEffect, useContext } from 'react';
import api from '../../../../API/helper';
import productContext from '../../contexts/ProductContext';

const QandA = (props) => {
  const productId = useContext(productContext);
  const [questions, changeQuestions] = useState();

  useEffect(() => {
    api.fetchEndpoint(`/qa/questions?product_id=${productId}`)
      .then((questionsData) => {
        changeQuestions(questionsData.results);
      })
      .catch((error) => {
        console.log('Error fetching questions:', error);
      });
  }, [productId]);

  const handleClick = () => {
    props.changeContext('18079');
  };

  return (
    <>
      <div>{JSON.stringify(productId)}</div>
      <div>{JSON.stringify(questions)}</div>
      <button onClick={handleClick}>Change Product</button>
    </>
  );
};
export default QandA;
