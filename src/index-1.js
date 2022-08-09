import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Square(props) {
	return(
		<button
			className='square'
			onClick={props.onClick}
		>
			{props.value}
		</button>
	);
}

class Board extends Component {
	constructor(props) {
		super(props);
		this.state = {
			squares: Array(9).fill(null),
			xIsNext: true,
		};
	}

  renderSquare(i) {
		return (
			<Square
				value={this.state.squares[i]}
				onClick={() => this.setState(() => {
					let newSquares = this.state.squares.slice();
					newSquares[i] = this.state.xIsNext ? 'X' : 'O';
					return {
						squares: newSquares,
						xIsNext: !this.state.xIsNext,
					};
				})}
			/>
		);
	}

	render() {
		return(
			<div className='board'>
				<div className='board-row'>
					{this.renderSquare(0)}
					{this.renderSquare(1)}
					{this.renderSquare(2)}
				</div>
				<div className='board-row'>
					{this.renderSquare(3)}
					{this.renderSquare(4)}
					{this.renderSquare(5)}
				</div>
				<div className='board-row'>
					{this.renderSquare(6)}
					{this.renderSquare(7)}
					{this.renderSquare(8)}
				</div>
			</div>
		);
	};
};

class Game extends Component {
  status = 'Next player: X';

	render() {
		return(
			<div className='game'>
				<Board />
				<div className="game-info">
					<div className="status">{this.status}</div>
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
}

ReactDOM.render(<Game />, document.getElementById('root'));
