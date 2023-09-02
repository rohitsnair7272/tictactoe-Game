import './styles.scss';
import Board from './components/board';
import { useState } from 'react';
import { calculateWinner } from './components/winner';

function App() {
  const [squares, setsquares] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(false);
  const winner = calculateWinner(squares);
  const nextPlayerMessage = isXNext ? 'X' : 'O';
  const statusMessage = winner
    ? `The Winner is ${winner}`
    : `The Next Player is ${nextPlayerMessage}`;

  const HandleSquareClick = clickedPosition => {
    if (squares[clickedPosition] || winner) {
      return;
    }
    setsquares(currentsquare => {
      return currentsquare.map((squareValue, pos) => {
        if (clickedPosition == pos) {
          return isXNext ? 'X' : 'O';
        } else {
          return squareValue;
        }
      });
    });
    setIsXNext(currentPlayer => !currentPlayer);
  };
  return (
    <div className="app">
      <Board squares={squares} HandleSquareClick={HandleSquareClick} />
      <h3>{statusMessage}</h3>
    </div>
  );
}

export default App;
