import React, { useState } from 'react';
import data from './data';
import SingleQuestion from './Question';

function App() {
  const [questions, setQuestions] = useState(data);
  return (
    <div className="accordion">
      <div className="accordion-content">
        <h2 className="accordion-title">Вопросы и ответы о входе в систему</h2>
        <div className="accordion-info">
          {questions.map((question) => {
            return <SingleQuestion key={question.id} {...question} />
          })}
        </div>
      </div>
    </div>
  )
}

export default App;
