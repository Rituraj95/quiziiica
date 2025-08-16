import React, { useState } from 'react';

function Quiz({ questions, completeQuiz }) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [score, setScore] = useState(0);
  const [userAnswers, setUserAnswers] = useState(
    Array(questions.length).fill(null).map((_, index) => ({
      selectedOption: null,
      isCorrect: false,
      question: questions[index].question,
      options: questions[index].options,
      correctAnswer: questions[index].answer
    }))
  );

  const handleOptionSelect = (optionIndex) => {
    setSelectedOption(optionIndex);
  };

  const handleNextQuestion = () => {
    if (selectedOption !== null) {
      const isCorrect = selectedOption === questions[currentQuestion].answer;
      const newScore = isCorrect ? score + 1 : score;
      
      const updatedUserAnswers = [...userAnswers];
      updatedUserAnswers[currentQuestion] = {
        ...updatedUserAnswers[currentQuestion],
        selectedOption,
        isCorrect
      };

      setScore(newScore);
      setUserAnswers(updatedUserAnswers);

      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
        setSelectedOption(null);
      } else {
        completeQuiz(newScore, updatedUserAnswers);
      }
    }
  };

  return (
    <div className="quiz-container">
      <div className="question-section">
        <div className="question-count">
          Question {currentQuestion + 1}/{questions.length}
        </div>
        <div className="question-text">
          {questions[currentQuestion].question}
        </div>
      </div>
      <div className="answer-section">
        {questions[currentQuestion].options.map((option, index) => (
          <button
            key={index}
            className={`option-button ${selectedOption === index ? 'selected' : ''}`}
            onClick={() => handleOptionSelect(index)}
          >
            {option}
          </button>
        ))}
      </div>
      <div className="navigation-buttons">
        {currentQuestion > 0 && (
          <button
            className="prev-button"
            onClick={() => {
              setCurrentQuestion(currentQuestion - 1);
              setSelectedOption(userAnswers[currentQuestion - 1].selectedOption);
            }}
          >
            Previous Question
          </button>
        )}
        <button
          className="next-button"
          onClick={handleNextQuestion}
          disabled={selectedOption === null}
        >
          {currentQuestion === questions.length - 1 ? 'Submit Quiz' : 'Next Question'}
        </button>
      </div>
    </div>
  );
}

export default Quiz;