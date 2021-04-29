const checkEmail = (email) => {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

export const validate = (input) => {
  if (input.body === '' || input.name === '') {
    return false;
  }
  if (!checkEmail(input.email)) {
    return false;
  }
  return true;
};

export const orderAnswers = (answers) => {
  const temp = [];
  const sellerAns = [];
  Object.keys(answers).forEach((key) => {
    if (answers[key].answerer_name === 'Seller') {
      sellerAns.push(answers[key]);
    } else {
      temp.push(answers[key]);
    }
  });
  sellerAns.sort((a, b) => (
    b.helpfulness - a.helpfulness
  ));
  temp.sort((a, b) => (
    b.helpfulness - a.helpfulness
  ));
  return sellerAns.concat(temp);
};
