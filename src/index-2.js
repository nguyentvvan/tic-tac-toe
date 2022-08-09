import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const Square = ({value}) => {
  const [checked, setChecked] = useState(false);

  return(
    <button
      className='square'
      onClick={() => setChecked(true)}
    >
      {value}
    </button>
  );
};

const Board = () => {
  const renderSquare = (i) => <Square value={i} />;

  return(
    <div className='board'>
      <div className='board-row'>
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className='board-row'>
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className='board-row'>
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  );
};

function Game() {
  const status = 'Next player: X';
  return(
    <div className='game'>
      <Board />
      <div className="game-info">
        <div className="status">{status}</div>
        <ol>
          <li>
            <button>Game start</button>
          </li>
          <li>
            <button>Game start</button>
          </li>
        </ol>
      </div>
    </div>
  );
};

ReactDOM.render(<Game />, document.getElementById('root'));
