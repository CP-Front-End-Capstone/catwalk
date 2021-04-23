import 'react', { useState, useEffect } from 'React';


const Helpful = (props) => {
  const { input } = props;
  if(input.hasOwnPropert('question_id')) {
    const count = input.question_helpfulness;
  } else {
    const count = input.helpfulness;
  }
};

export default Helpful;