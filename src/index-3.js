import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function calculateWinner(square) {
	const lines = [
		[0,1,2],
		[3,4,5],
		[6,7,8],
		[0,3,6],
		[1,4,7],
		[2,5,8],
		[0,4,8],
		[2,4,6]
	];

	for (const line of lines) {
		const [a, b, c] = line;
		if (square[a] && square[a] === square[b] && square[a] === square[c]) {
			return square[a];
		}
	}
	return null;
}
class Square extends Component {
	render() {
		return(
			<button
				className='square'
				onClick={this.props.onClick}
			>
				{this.props.value}
			</button>
		);
	};
}

function SquareFC(props) {
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
  renderSquare(i) {
		return (
			<Square
				value={this.props.squares[i]}
				onClick={() => this.props.onClick(i)}
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
	constructor(props) {
		super(props);
		this.state = {
			history: [{ squares: Array(9).fill(null) }],
			step: 0,
			xIsNext: true,
		};
	};
  
	handleClick(i) {
		const history = this.state.history.slice(0, this.state.step + 1);
		const step = this.state.step;
		const currentSquares = history[step].squares;
		if (currentSquares[i] || calculateWinner(currentSquares)) {
			return;
		}
		let newSquares = currentSquares.slice();
		newSquares[i] = this.state.xIsNext ? 'X' : 'O';
		this.setState({
			history: history.concat([{
        squares: newSquares,
      }]),
			xIsNext: !this.state.xIsNext,
			step: step + 1,
		});
	}

	render() {
		const history = this.state.history;
		const step = this.state.step;
		const currentSquares = history[step].squares;
		let status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
		const winner = calculateWinner(currentSquares);
		if (winner) {
			status = 'Winner: ' + winner;
		}

		return(
			<div className='game'>
				<Board
					squares={currentSquares}
					onClick={(i) => this.handleClick(i)}
				/>
				<div className="game-info">
					<div className="status">{status}</div>
					<ol>
					{history.map((step, index) => (
						<li key={index}>
							<button
								onClick={() => {
									this.setState({
										step: index,
										xIsNext: (step % 2) === 0,
									});
								}}
							>
								Go to move #{index}
							</button>
						</li>
					))}
					</ol>
				</div>
			</div>
		);
	};
}

ReactDOM.render(<Game />, document.getElementById('root'));
