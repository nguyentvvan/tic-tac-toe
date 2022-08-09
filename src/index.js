import ReactDOM from 'react-dom';
import './index.css';
import Game from './components/Game';

const App = () => {
	return (
		<Game />
	);
};

ReactDOM.render(<App />, document.getElementById('root'));