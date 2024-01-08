import React, { useState } from "react";
import questionsData from "../pages/Questions.json"; 
import '../styles/Questions.css'; 

const Questions = () => {
  const [selectedQuestion, setSelectedQuestion] = useState(null);

  const handleQuestionClick = (index) => {
    if (selectedQuestion === index) {
      setSelectedQuestion(null);
    } else {
      setSelectedQuestion(index);
    }
  };

  return (
    <div className="questions-container">
      <h1>Вопросы</h1>
      <ul className="questions-list">
        {questionsData.map((question, index) => (
          <li key={index}>
            <button onClick={() => handleQuestionClick(index)}>
              {question.question}
            </button>
            {selectedQuestion === index && (
              <div className="answer">
                <p>{question.answer}</p>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Questions;
