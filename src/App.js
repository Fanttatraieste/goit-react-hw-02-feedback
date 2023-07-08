import { useState } from 'react';

export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [total, setTotal] = useState(0);

  function handleGood() {
    setGood(good => good + 1);
    setTotal(total => total + 1);
  }

  function handleNeutral() {
    setNeutral(neutral => neutral + 1);
    setTotal(total => total + 1);
  }

  function handleBad() {
    setBad(bad => bad + 1);
    setTotal(total => total + 1);
  }

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        padding: '100px',
        gap: '30px',
      }}
    >
      <Feedback
        handleGood={handleGood}
        handleBad={handleBad}
        handleNeutral={handleNeutral}
      />
      {(total && (
        <Statistics good={good} bad={bad} neutral={neutral} total={total} />
      )) ||
        'No feedback given'}
    </div>
  );
}

function Feedback({ handleGood, handleBad, handleNeutral }) {
  return (
    <div>
      <h2>Please leave feedback</h2>
      <button style={{ marginRight: '10px' }} onClick={handleGood}>
        Good
      </button>
      <button style={{ marginRight: '10px' }} onClick={handleNeutral}>
        Neutral
      </button>
      <button style={{ marginRight: '10px' }} onClick={handleBad}>
        Bad
      </button>
    </div>
  );
}

function Statistics({ good, bad, neutral, total }) {
  return (
    <div>
      <h2>Statistics</h2>
      <p>
        Good: <span>{good}</span>
      </p>
      <p>
        Neutral: <span>{neutral}</span>
      </p>
      <p>
        Bad: <span>{bad}</span>
      </p>
      <p>
        Total: <span>{total}</span>
      </p>
      <p>
        Positive feedback: <span>{Math.round((good / total) * 100) || 0}%</span>
      </p>
    </div>
  );
}
