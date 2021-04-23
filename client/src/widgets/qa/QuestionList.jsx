import React, { useContext } from 'react';
import Question from './Question.jsx';
import qaContext from '../../contexts/QaContext';

const QuestionList = () => {
  const [count, changeCount] = useState([]);

  const answers = [];
  for (const id in question.answers) {
    answers.push(question.answers[id]);
  }

  const handleClick = (e) => {
    e.preventDefault();
    changeShowAll(true);
  };

  useEffect(() => {
    if (!showAll) {
      if (answers.length > 4) {
        const temp = [];
        for (let i = 0; i < 4; i++) {
          temp.push(<Answer answer={answers[i]} key={answers[i].answer_id} />);
        }
        temp.push(<input
          type="button"
          className="btn"
          key={question.question_id}
          value="LOAD MORE ANSWERS"
          onClick={handleClick}
        />);
        changeAnswerList(temp);
      } else if (answers.length > 0) {
        changeAnswerList(answers.map((answer) => (
          <Answer answer={answer} key={answer.id} />
        )));
      }
    } else {
      changeAnswerList(answers.map((answer) => (
        <Answer answer={answer} key={answer.id} />
      )));
    }
  }, [showAll]);

  return (
    <>
      <div className="col">
        Q: {question.question_body}
      </div>
      {answersList}
    </>
  );
};
  // const { questions } = useContext(qaContext);
  // const list = questions.map((question) => (
  //   <div className="col" key={question.question_id}>
  //     <Question question={question} />
  //   </div>
  // ));
  // return <>{list}</>;

export default QuestionList;
