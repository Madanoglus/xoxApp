import Square from "./MultiSquare";
import "../../App.css";
import { useState } from "react";

function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null));

  const [isX, setIsX] = useState(true);

  const handleClick = (i) => {
    if (calgulateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = isX ? "X" : "O";
    setSquares(squares);
    setIsX(!isX);
  };

  const winner = calgulateWinner(squares);
  let status;

  if (winner) {
    status = `Winner : ${winner}`;
  } else {
    status = `Next player: ${isX ? "X" : "O"}`;
  }
  function calgulateWinner(squares) {
    const winningPaterns = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < winningPaterns.length; i++) {
      const [a, b, c] = winningPaterns[i];
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return squares[a];
      }
    }
    return null;
  }

  const handleReset = () => {
    setIsX(true);
    setSquares(Array(9).fill(null));
  };

  return (
    <div>
      <h4>MULTİPLAYER GAME AREA</h4>
      <div className="multiboard">
        <div className="board-row">
          <Square value={squares[0]} onClick={() => handleClick(0)} />
          <Square value={squares[1]} onClick={() => handleClick(1)} />
          <Square value={squares[2]} onClick={() => handleClick(2)} />
        </div>
        <div className="board-row">
          <Square value={squares[3]} onClick={() => handleClick(3)} />
          <Square value={squares[4]} onClick={() => handleClick(4)} />
          <Square value={squares[5]} onClick={() => handleClick(5)} />
        </div>
        <div className="board-row">
          <Square value={squares[6]} onClick={() => handleClick(6)} />
          <Square value={squares[7]} onClick={() => handleClick(7)} />
          <Square value={squares[8]} onClick={() => handleClick(8)} />
        </div>
        <div className="status">{status}</div>
        <div className="restart" onClick={handleReset}>
          Restart Game
        </div>
      </div>
    </div>
  );
}

export default Board;
