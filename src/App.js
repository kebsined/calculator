import { useState } from 'react';
import styles from './App.module.css';

const App = () => {
	const [input, setInput] = useState('');

	const NUMS = [
		'C',
		'+',
		'-',
		'7',
		'8',
		'9',
		'4',
		'5',
		'6',
		'1',
		'2',
		'3',
		'0',
		'=',
	];

	const handleClick = value => {
		setInput(input => input + value);
	};

	const calculate = () => {
		setInput(eval(input));
	};

	const clear = () => {
		setInput('');
	};

	return (
		<div className={styles.container}>
			<input
				type='text'
				id='calc'
				className={styles.calculatorInput}
				value={input}
			/>
			<div className={styles.calculator}>
				{NUMS.map(value => (
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
