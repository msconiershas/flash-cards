import React, { useState } from 'react';

function MainApp() {

  const questions = [
    {
      questionText: 'Which Chinese dynasty established longstanding contact with the Japanese?',
      answerOptions: [
        { answerText: 'Song', isCorrect: false },
        { answerText: 'Han', isCorrect: false },
        { answerText: 'Sui', isCorrect: true },
        { answerText: 'Zhou', isCorrect: false },
      ],
    },
    {
      questionText: 'Who made Christianity legal in Ancient Rome?',
      answerOptions: [
        { answerText: 'Justinian', isCorrect: false },
        { answerText: 'Cesar', isCorrect: false },
        { answerText: 'Octavian', isCorrect: false },
        { answerText: 'Constantine', isCorrect: true },
      ],
    },
    {
      questionText: 'What empire fell to the Babylonians around 608 BCE?',
      answerOptions: [
        { answerText: 'Persians', isCorrect: false },
        { answerText: 'Scythians', isCorrect: false },
        { answerText: 'Assyrians', isCorrect: true },
        { answerText: 'Romans', isCorrect: false },
      ],
    },
    {
      questionText: 'What country held onto most of Western Roman records through the Dark Ages?',
      answerOptions: [
        { answerText: 'Ireland', isCorrect: true },
        { answerText: 'England', isCorrect: false },
        { answerText: 'France', isCorrect: false },
        { answerText: 'Denmark', isCorrect: false },
      ],
    },
    {
      questionText: 'What shape did ancient Chinese coins have?',
      answerOptions: [
        { answerText: 'square', isCorrect: false },
        { answerText: 'knife', isCorrect: true },
        { answerText: 'hexagon', isCorrect: false },
        { answerText: 'cube', isCorrect: false },
      ],
    },
     {
      questionText: 'Who were the Jewish people fighting in the war that created the 8 candle Hanukkah?',
      answerOptions: [
        { answerText: 'Romans', isCorrect: false },
        { answerText: 'Greeks', isCorrect: true },
        { answerText: 'Persians', isCorrect: false },
        { answerText: 'Arabs', isCorrect: false },
      ],
    },
  ]

  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [showScore, setShowScore] = useState(false)
  const [score, setScore] = useState(0)
  const handleAnswerButtonClick = (isCorrect) => {
    if (isCorrect === true) {
      setScore(score + 1);
    }

    const nextQuetions = currentQuestion + 1;
    if (nextQuetions < questions.length) {
      setCurrentQuestion(nextQuetions);
    }
    else {
      setShowScore(true)
    }
  }

  return (
    <>
      <h1 className='header'>History Quiz</h1>
      <div className="app">
        {showScore ? (
          <div className='score-section'>
            You scored {score} out of {questions.length}
          </div>
        )
          :
          (
            <>
              <div className='question-section'>
                <div className='question-count'>
                  <span>Question {currentQuestion + 1}</span>
                </div>
                <div className='question-text'>
                  {questions[currentQuestion].questionText}
                </div>
              </div>

              <div className='answer-section'>
                {
                  questions[currentQuestion].answerOptions.map((answerOptions) => (
                    <button onClick={() => handleAnswerButtonClick(answerOptions.isCorrect)}>{answerOptions.answerText}</button>
                  ))
                }
              </div>
            </>
          )}
      </div>
    </>
  );
}

export default MainApp;
