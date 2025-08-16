import React from 'react';
import QuestionReview from './QuetionReview';

function Result({ score, userAnswers, restartQuiz }) {
  const totalQuestions = userAnswers.length;
  const percentage = (score / totalQuestions) * 100;
  const correctAnswers = userAnswers.filter(answer => answer.isCorrect).length;

  return (
    <div className="result-container">
      <h2>Quiz Results</h2>
      <div className="score-section">
        <p>Your score: <span className="score-value">{score.toFixed(2)}</span>/{totalQuestions}</p>
        <p>Correct answers: <span className="correct-value">{correctAnswers}</span>/{totalQuestions}</p>
        <p>Percentage: <span className="percentage-value">{percentage.toFixed(2)}%</span></p>
      </div>
      
      <QuestionReview userAnswers={userAnswers} />
      
      <button className="restart-button" onClick={restartQuiz}>
        Restart Quiz
      </button>
    </div>
  );
}

export default Result;