import { useState } from 'react';
import styles from './App.module.css';

const NUMS = ['C', '+', '-', '7', '8', '9', '4', '5', '6', '1', '2', '3', '0', '='];

const App = () => {
	const [input, setInput] = useState('');
	const [colorOfResult, setColorOfResult] = useState('#fff');

	const handleClick = (value) => {
		setColorOfResult('#fff');
		return setInput((input) => input + value);
	};

	const calculate = () => {
		setColorOfResult('#dd8d14');
		// eslint-disable-next-line no-eval
		return setInput(eval(input));
	};

	const clear = () => {
		setColorOfResult('#fff');
		return setInput('');
	};

	return (
		<div className={styles.container}>
			<input
				value={input}
				type="text"
				id="calc"
				className={`${styles.calculatorInput}`}
				style={{ color: colorOfResult }}
				readOnly
			/>
			<div className={styles.calculator}>
				{NUMS.map((value) => (
					<button
						key={value}
						className={`${value === '0' && styles.zero} ${
							value !== '0' && styles.btn
						} ${value === '=' && styles.operation} ${
							value === '-' && styles.operation
						} ${value === '+' && styles.operation} ${
							value === 'C' && styles.clear
						}`}
						onClick={() =>
							`${value === '=' && calculate()} ${
								value === '-' && handleClick(value)
							} ${value === '+' && handleClick(value)} ${
								value === 'C' && clear()
							} ${Number(value) <= 9 && handleClick(value)}`
						}
					>
						{value}
					</button>
				))}
			</div>
		</div>
	);
};

export default App;
