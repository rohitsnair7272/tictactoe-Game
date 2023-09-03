const StatusMessage = ({ isXNext, winner, squares }) => {
  const noMovesLeft = squares.every(squareValue => squareValue != null);
  const nextPlayerMessage = isXNext ? 'X' : 'O';

  const renderStatusMessage = () => {
    if (winner) {
      return (
        <>
          The winner is{' '}
          <span className={winner == 'X' ? 'textgreen' : 'text-orange'}>
            {winner}
          </span>
        </>
      );
    }
    if (!winner && noMovesLeft) {
      return (
        <>
          Its A DRAW between <span className="text-green">X</span> and{' '}
          <span className="text-orange">O</span>
        </>
      );
    }
    if (!winner && !noMovesLeft) {
      return (
        <>
          The Next Player Is{' '}
          <span className={isXNext ? 'text-green' : 'text-orange'}>
            {nextPlayerMessage}
          </span>
        </>
      );
    }
    return null;
  };
  return <div className="status-message">{renderStatusMessage()}</div>;
};
export default StatusMessage;
