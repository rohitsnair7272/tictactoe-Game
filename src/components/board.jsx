import { useState } from 'react';
import Square from './square';
const Board = () => {
  const [squares, setsquares] = useState(Array(9).fill(null));
  const HandleSquareClick = clickedPosition => {
    setsquares(currentsquare => {
      return currentsquare.map((squareValue, pos) => {
        if (clickedPosition == pos) {
          return 'X';
        } else {
          return squareValue;
        }
      });
    });
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
