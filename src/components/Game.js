import { Component } from 'react';
import Board from './Board';

const calculateWinner = (squares) => {
	const lines = [
		[0,1,2],
		[3,4,5],
		[6,7,8],
		[0,3,6],
		[1,4,7],
		[2,5,8],
		[0,4,8],
		[2,4,6],
	];
	for (let i = 0; i < lines.length; i++) {
		const [a, b, c] = lines[i];
		if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
			return squares[a];
		}
	}
	return null;
};

class Game extends Component {
	constructor(props) {
		super(props);
		this.state = {
			squares: Array(9).fill(null),
			xIsNext: true,
		};
	};

	handleClick(i) {
		const squares = this.state.squares.slice();
		if (calculateWinner(squares)) {
			return;
		}
		const xIsNext = this.state.xIsNext;
		squares[i] = xIsNext ? 'X' : 'O';
		this.setState({
			squares,
			xIsNext: !xIsNext,
		});
	};

	render() {
		const winner = calculateWinner(this.state.squares);
		let status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
		if (winner) {
			status = 'Winner: ' + winner;
		}
		return(
			<div className="game">
				<Board
					squares={this.state.squares}
					onClick={(i) => this.handleClick(i)}
				/>
				<div className="game-info">
					<h2>{status}</h2>
					<ol>
						<li>Game start</li>
					</ol>
				</div>
			</div>
		);
	};
};

export default Game;