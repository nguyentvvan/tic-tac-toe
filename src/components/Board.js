import Square from "./Square";

const Board = ({squares, onClick}) => {
	const column = Math.sqrt(squares.length);

	const renderSquares = () => {
		let board = [];
		for (let i = 0; i < column; i++) {
			let row = [];
			for (let j = 0; j < column; j++) {
				const index = i * column + j;
				row.push(
					<Square
						key={j}
						value={squares[index]}
						onClick={() => onClick(index)}
					/>
				);
			}
			board.push(
				<div className="board-row" key={i}>
					{row}
				</div>
			);
		}
		return board;
	};

	return(
		<div className="board">
			{renderSquares()}
		</div>
	);
};

export default Board;