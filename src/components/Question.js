import React, { useEffect, useState } from "react";

function Question({ question, onAnswered }) {
  const time = 10
  const [timeRemaining, setTimeRemaining] = useState(time);

  // add useEffect code
  useEffect(() => {
    const counter = setTimeout(() => {
      return setTimeRemaining(current => {
        return current - 1
      })
    }, 1000)

    if (timeRemaining <= 0) {
        clearTimeout(counter)
        setTimeRemaining(time)
        onAnswered(false)
      }
    
    return function cleanup() {
      clearTimeout(counter)
    }
  })

  function handleAnswer(isCorrect) {
    setTimeRemaining(time);
    onAnswered(isCorrect);
  }

  const { id, prompt, answers, correctIndex } = question;

  return (
    <>
      <h1>Question {id}</h1>
      <h3>{prompt}</h3>
      {answers.map((answer, index) => {
        const isCorrect = index === correctIndex;
        return (
          <button key={answer} onClick={() => handleAnswer(isCorrect)}>
            {answer}
          </button>
        );
      })}
      <h5>{timeRemaining} seconds remaining</h5>
    </>
  );
}

export default Question;
