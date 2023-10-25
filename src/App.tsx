import './App.css';
import { useState } from 'react';
import { ScoreScreen } from './ScoreScreen';

type Question = {
  prompt: string;
  correctAnswer: string;
  answers: string[];
}

const questions : Question[] = [
  {
    prompt: 'what color is the sky',
    correctAnswer: 'blue',
    answers: [
      'blue',
      'green',
      'yellow',
      'red'
    ],
  },
  {
    prompt: 'what is the best programming language',
    correctAnswer: 'typescript',
    answers: [
      'perl',
      'python',
      'java',
      'typescript'
    ],
  },
]

function App() {

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState('');
  const [score, setScore] = useState(0);

  const isGameOver = currentQuestionIndex >= questions.length;  
  const currentQuestion = questions[currentQuestionIndex];

  function Quiz() {
    return (
      <>
          <h1>{currentQuestion.prompt}</h1>

          <form 
            className='quiz-form'
            onSubmit={(e) => {
            e.preventDefault();

            // TODO did they get the right answer?
            if (selectedAnswer === currentQuestion.correctAnswer) {
              setScore(score + 1);
            }
            // TODO increment to the next question OR end the quiz if they finished all the questions
            setCurrentQuestionIndex(currentQuestionIndex + 1);
          }}>
            {currentQuestion.answers.map((answer) => {
              return (
                <label key={answer}>
                  <input
                    onChange={() => {
                      setSelectedAnswer(answer);
                    }}
                    type='radio' name='answer' checked={answer === selectedAnswer}></input> {answer}
                </label>
              );
            })}
            <button>Submit</button>
          </form>
        </>
    )
  }

  return (
    <div className='page'>
      {isGameOver ? <ScoreScreen
      score={score}
      totalQuestions={questions.length}
      reset={() => {
        setCurrentQuestionIndex(0);
        setSelectedAnswer('');
        setScore(0);
      }}
      /> : <Quiz/>}
    </div>
  )
}

export default App
