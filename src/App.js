import React, { useState } from 'react';
import Quiz from './components/Quiz';
import Result from './components/Result';
import './style.css';
import { quiz1 } from './components/quiz1quetions';
import { quiz2 } from './components/quiz2quetions';


function App() {
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [score, setScore] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const [selectedQuiz, setSelectedQuiz] = useState(null);
  const [quizTitle, setQuizTitle] = useState('');

  const quizzes = {
    '15 august quiz': quiz1,
    '20 august quiz': quiz2,
    
  };

  const startQuiz = (quizKey) => {
    setSelectedQuiz(quizzes[quizKey].questions);
    setQuizTitle(quizzes[quizKey].title);
    setQuizCompleted(false);
    setScore(0);
    setUserAnswers([]);
  };

  const completeQuiz = (finalScore, answers) => {
    setScore(finalScore);
    setUserAnswers(answers);
    setQuizCompleted(true);
  };

  const returnToQuizSelection = () => {
    setSelectedQuiz(null);
    setQuizCompleted(false);
  };

  return (
    <div className="app">
      <h1>CURRENT AFFAIRS DAILY QUIZ </h1>
      
      {!selectedQuiz ? (
        <div className="quiz-selection">
          <h2>Select a Quiz</h2>
          <div className="quiz-buttons">
            {Object.keys(quizzes).map((quizName) => (
              <button
                key={quizName}
                onClick={() => startQuiz(quizName)}
                className="quiz-option"
              >
                {quizName}
                <p className="quiz-description">{quizzes[quizName].questions.length} questions</p>
              </button>
            ))}
          </div>
        </div>
      ) : !quizCompleted ? (
        <>
          <h2>{quizTitle}</h2>
          <Quiz 
            questions={selectedQuiz}
            completeQuiz={completeQuiz} 
          />
        </>
      ) : (
        <Result 
          score={score} 
          userAnswers={userAnswers}
          restartQuiz={returnToQuizSelection}
          quizTitle={quizTitle}
        />
      )}
    </div>
  );
}

export default App;