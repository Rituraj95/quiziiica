import React from 'react';

function QuestionReview({ userAnswers }) {
  return (
    <div className="review-section">
      <h3>Question Review</h3>
      <div className="review-questions">
        {userAnswers.map((answer, index) => (
          <div 
            key={index} 
            className={`review-item ${
              answer.isCorrect ? 'correct' : 'incorrect'
            }`}
          >
            <p className="review-question">
              <strong>Q{index + 1}:</strong> {answer.question}
            </p>
            <p className="user-answer">
              Your answer: {answer.options[answer.selectedOption]}
              {!answer.isCorrect && (
                <span className="incorrect-icon"> ✗</span>
              )}
              {answer.isCorrect && (
                <span className="correct-icon"> ✓</span>
              )}
            </p>
            {!answer.isCorrect && (
              <p className="correct-answer">
                Correct answer: {answer.options[answer.correctAnswer]}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default QuestionReview;