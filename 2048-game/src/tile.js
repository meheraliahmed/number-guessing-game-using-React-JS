// Tile.js
import React from 'react';
import './tile.css';

const Tile = ({ value }) => {
  return (
    <div className={`tile ${value ? `tile-${value}` : ''}`}>
      {value !== null ? value : ''}
    </div>
  );
};

export default Tile;
