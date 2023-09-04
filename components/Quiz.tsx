"use client";

import React, { useState } from "react";
import questions from "@/data/questions";

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);

  const handleAnswerButtonClick = (isCorrect: boolean) => {
    if (isCorrect) {
      setScore(score + 1);
    }

      setCurrentQuestion(currentQuestion + 1);
  };

  return (
    <div className="quiz-container h-full">
      {currentQuestion === questions.length ? (
        <div className="quiz-result">
          <h2>
            Your Score: {score} / {questions.length}
          </h2>
          <p>Great job!</p>
        </div>
      ) : (
        <div className="quiz-question">
          <h2>Question {currentQuestion + 1}</h2>
          <p>{questions[currentQuestion].questionText}</p>
          <ul className="answer-options flex flex-wrap">
            {questions[currentQuestion].answerOptions.map(
              (answerOption, index) => (
                <li key={index} className="w-1/2 flex p-2">
                  <button
                  className="flex py-2 px-1 flex-1 items-center justify-center border border-white rounded"
                    onClick={() =>
                      handleAnswerButtonClick(answerOption.isCorrect)
                    }
                  >
                    {answerOption.answerText}
                  </button>
                </li>
              )
            )}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Quiz;
