export function ScoreScreen({totalQuestions, score, reset} : {totalQuestions: number; score: number; reset: () => void;}) {

    const numberOfWrongAnswers = totalQuestions - score;
    return (
      <>
        <h2>Your Score: {score}, you got {numberOfWrongAnswers} questions wrong.</h2>
        <button onClick={reset}>Try Again</button>
      </>
    )
  }