import { useState, useEffect } from 'react';
import InputNumber from './ImputNumber';
import Message from './Message';
import RestartButton from './RestartButton';
import '../Styles/Game.css';

const Game = () => {
  const [targetNumber, setTargetNumber] = useState(null);
  const [guess, setGuess] = useState('');
  const [message, setMessage] = useState('');
  const [gameOver, setGameOver] = useState(false);

  useEffect(() => {
    startNewGame();
  }, []);

  const startNewGame = () => {
    const newTargetNumber = Math.floor(Math.random() * 100) + 1;
    setTargetNumber(newTargetNumber);
    setGuess('');
    setMessage('¡Adivina el número entre 1 y 100!');
    setGameOver(false);
    console.log('Número objetivo:', newTargetNumber);
  };

  const handleGuessChange = (event) => {
    setGuess(event.target.value);
  };

  const checkGuess = () => {
    const userGuess = parseInt(guess, 10);
    if (isNaN(userGuess)) {
      setMessage('Por favor, ingresa un número válido.');
      return;
    }

    if (userGuess === targetNumber) {
      setMessage('¡Correcto! ¡Has adivinado el número!');
      setGameOver(true);
    } else if (userGuess < targetNumber) {
      setMessage('El número es mayor.');
    } else {
      setMessage('El número es menor.');
    }
  };

  return (
    <div className="game-container">
      <h1>Adivina el Número</h1>
      <Message message={message} />
      {!gameOver ? (
        <>
          <InputNumber
            value={guess}
            onChange={handleGuessChange}
            onKeyDown={(e) => e.key === 'Enter' && checkGuess()}
          />
          <button onClick={checkGuess}>Adivinar</button>
        </>
      ) : (
        <RestartButton onRestart={startNewGame} />
      )}
    </div>
  );
};

export default Game;