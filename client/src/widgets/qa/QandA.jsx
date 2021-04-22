import React, { useState, useEffect, useContext, createContext } from 'react';
import api from '../../../../API/helper';
import productContext from '../../contexts/ProductContext';
import qaContext from '../../contexts/QaContext';
import QuestionList from './QuestionList.jsx';

const QandA = () => {
  const { productId, changeProductId } = useContext(productContext);
  const [questions, changeQuestions] = useState([]);
  const [count, changeCount] = useState(4);
  const [page, changePage] = useState(1);
  const qaContext = createContext({
    questions,
    count,
    changeCount,
    page,
  });
  const qa = useContext(qaContext);

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
    changeProductId('18079');
  };

  if (questions.length > 0) {
    return (
      <>
        <div>{JSON.stringify(productId)}</div>
        <qaContext.Provider value={{
          questions,
          count,
          changeCount,
          page,
        }}
        >
          <QuestionList />
        </qaContext.Provider>
        <button onClick={handleClick}>Change Product</button>
      </>
    );
  }
  return <div>Loading Questions and Answers...</div>;
};
export default QandA;
