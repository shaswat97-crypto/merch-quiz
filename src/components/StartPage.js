import React from "react";
import { useNavigate } from "react-router-dom";

function StartPage() {
    const navTo = useNavigate();
    const onStartQuiz = () =>{
        navTo('/question/0')
    }
  return (
    <div className="start-page">
      <h1>Welcome to the Quiz!</h1>
      <h2>Are you ready to test your Javascript knowledge?</h2>
      <button className="button-9" onClick={onStartQuiz}>Start Quiz</button>
    </div>
  );
}

export default StartPage;