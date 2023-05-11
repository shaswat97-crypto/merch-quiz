import React from "react";
import { quizQuestions } from "./qiuzQuestions";
import "./result.css";
function ResultPage({ result, timeLeft }) {
  return (
    <div className="result">
      <h1>Quiz Result</h1>
      <div className="rcont">
        <p>
          You scored {result} out of {quizQuestions.length}
        </p>
        <p>Time taken: {timeLeft} seconds</p>
      </div>
    </div>
  );
}

export default ResultPage;
