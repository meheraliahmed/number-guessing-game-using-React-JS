import React, { useState } from 'react';

const Game = () => {
  const [targetNumber, setTargetNumber] = useState(Math.floor(Math.random() * 100) + 1);
  const [guess, setGuess] = useState('');
  const [message, setMessage] = useState('');
  const [attempts, setAttempts] = useState(0);
  const [score, setScore] = useState(100);
  const [highScore, setHighScore] = useState(0);
  const [hint, setHint] = useState('');
  const [reveal, setReveal] = useState(false);

  const handleGuess = () => {
    const numGuess = parseInt(guess);
    setAttempts(attempts + 1);

    if (numGuess === targetNumber) {
      setMessage('Correct! You guessed the number.');
      if (score > highScore) {
        setHighScore(score);
        setMessage('Congratulations! New high score!');
      }
      resetGame();
    } else if (numGuess < targetNumber) {
      setMessage('Too low!');
      setScore(score - 10);
    } else {
      setMessage('Too high!');
      setScore(score - 10);
    }
  };

  const giveHint = () => {
    console.log(`Hint: The target number is ${targetNumber}`);
    const lowerBound = Math.max(1, targetNumber - 25);
    const upperBound = Math.min(100, targetNumber + 25);

    if (targetNumber <= 50) {
      setHint('The number is in the lower half of the range (1-50).');
    } else {
      setHint('The number is in the upper half of the range (51-100).');
    }

    setMessage('Check the hint below!');
  };

  const revealNumber = () => {
    setReveal(true);
    setMessage('The target number has been revealed!');
    console.log(`The target number is ${targetNumber}`);
  };

  const resetGame = () => {
    setTargetNumber(Math.floor(Math.random() * 100) + 1);
    setGuess('');
    setAttempts(0);
    setScore(100);
    setHint('');
    setReveal(false);
  };

  return (
    <div>
      <h1>Number Guessing Game</h1>
      <p>Guess the number between 1 and 100</p>
      <input
        type="number"
        value={guess}
        onChange={(e) => setGuess(e.target.value)}
        placeholder="Enter your guess"
      />
      <button onClick={handleGuess}>Guess</button>
      <button onClick={giveHint}>Give Hint</button>
      <button onClick={revealNumber}>Reveal Number</button>
      <p>{message}</p>
      {hint && <p><strong>Hint:</strong> {hint}</p>}
      {reveal && <p><strong>Target Number:</strong> {targetNumber}</p>}
      <p>Attempts: {attempts}</p>
      <p>Score: {score}</p>
      <p>High Score: {highScore}</p>
      <button onClick={resetGame}>Play Again</button>
    </div>
  );
};

export default Game;
