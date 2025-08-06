import React from 'react';
import '../Styles/RestartButton.css';

const RestartButton = ({ onRestart }) => {
  return (
    <button onClick={onRestart} className="restart-button">
      Jugar de nuevo
    </button>
  );
};

export default RestartButton;