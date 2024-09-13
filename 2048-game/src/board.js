// Board.js
import React from 'react';
import Tile from './tile';
import './board.css';

const Board = ({ board }) => {
  return (
    <div className="board">
      {board.cells.map((row, rowIndex) => (
        <div key={rowIndex} className="board-row">
          {row.map((tile, columnIndex) => (
            <Tile key={columnIndex} value={tile.value} />
          ))}
        </div>
      ))}
    </div>
  );
};

export default Board;
