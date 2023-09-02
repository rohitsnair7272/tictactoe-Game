import { useState } from 'react';
import Square from './square';
const Board = () => {
  const [squares, setsquares] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(false);
  const HandleSquareClick = clickedPosition => {
    if (squares[clickedPosition]) {
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
  const RenderSquare = position => {
    return (
      <Square
        value={squares[position]}
        onClick={() => HandleSquareClick(position)}
      />
    );
  };
  return (
    <div className="board">
      <div className="board-row">
        {RenderSquare(0)}
        {RenderSquare(1)}
        {RenderSquare(2)}
      </div>
      <div className="board-row">
        {RenderSquare(3)}
        {RenderSquare(4)}
        {RenderSquare(5)}
      </div>
      <div className="board-row">
        {RenderSquare(6)}
        {RenderSquare(7)}
        {RenderSquare(8)}
      </div>
    </div>
  );
};
export default Board;
