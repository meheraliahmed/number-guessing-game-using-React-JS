import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Scoreboard = () => {
  const [highScores, setHighScores] = useState([]);

  useEffect(() => {
    const fetchScores = async () => {
      const response = await axios.get('http://localhost:5000/api/scores');
      setHighScores(response.data);
    };
    fetchScores();
  }, []);

  return (
    <div>
      <h1>Scoreboard</h1>
      <ul>
        {highScores.map((score, index) => (
          <li key={index}>{score.username}: {score.highScore}</li>
        ))}
      </ul>
    </div>
  );
};

export default Scoreboard;
