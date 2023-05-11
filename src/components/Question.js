import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { quizQuestions } from "./qiuzQuestions";
import { useNavigate } from "react-router-dom";
import "./question.css";

function QuestionPage({ timeLeft, setTimeLeft, setResult }) {
  const navTo = useNavigate();

  const [qObj, setQObj] = useState();
  const [ans, setAns] = useState("");
  const { id } = useParams();

  useEffect(() => {
    setQObj(quizQuestions[id]);
  }, [id]);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((timeLeft) => timeLeft - 1);
    }, 1000);

    if (timeLeft === 0) {
      clearInterval(timer);
      navTo("/result");
    }

    return () => clearInterval(timer);
  }, [timeLeft]);

  function handleOptionSelected(option) {
    setAns(option);
  }

  function handleNext() {
    if (ans === qObj.answer) setResult((prev) => prev + 1);
    if (+id + 1 == quizQuestions.length) navTo("/result");
    else navTo(`/question/${+id + 1}`);
  }

  return (
    <div className="question">
      {qObj && (
        <>
          <div className="header">
            <p className="button-18">
              {+id + 1} / {quizQuestions.length}
            </p>
            <p style={{ backgroundColor: "#4D4AE8" }} className="button-18">
              {timeLeft}
            </p>
          </div>
          <div className="qcont">
            <h2>{qObj.question}</h2>

            <ul>
              {qObj.options.map((option, n) => (
                <li
                  type="none"
                  key={option}
                  onClick={() => handleOptionSelected(option)}
                >
                  <label
                    htmlFor={`ans${String.fromCharCode("A".charCodeAt(0) + n)}`}
                  >
                    <div
                      className={`letter ${option === ans ? "checked" : ""}`}
                    >
                      {String.fromCharCode("A".charCodeAt(0) + n)}
                    </div>
                    <div className="option">{option}</div>
                    <input
                      type="radio"
                      id={`ans${String.fromCharCode("A".charCodeAt(0) + n)}`}
                      name={`ans${String.fromCharCode("A".charCodeAt(0) + n)}`}
                      checked={option === ans}
                      onChange={() => {}}
                    />
                  </label>
                </li>
              ))}
            </ul>
            <button className="button-20" disabled={!ans} onClick={handleNext}>
              {+id+1 == quizQuestions.length?'Submit':'Next'}
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default QuestionPage;
