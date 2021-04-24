import React from 'react';

const qaContext = React.createContext({
  questions: [],
  changeQuestions: () => {},
  count: 4,
  changeCount: () => {},
  page: 1,
  changePage: () => {},
});

export default qaContext;
