import { useState } from 'react';
import styles from './App.module.css';

const App = () => {
	const [input, setInput] = useState('');

	const NUMS = [7, 8, 9, 4, 5, 6, 1, 2, 3, 0];

	return (
		<div className={styles.container}>
			<label htmlFor='calc' className={styles.calculatorLabel}>
				ЧТО НУЖНО ПОСЧИТАТЬ?
			</label>
			<input type='text' id='calc' className={styles.calculatorInput} />

			<div className={styles.calculator}>
				{NUMS.map((num, index) => (
					<button
						className={styles.numberButton}
						key={num}
						onClick={() => setInput(input => input + NUMS[index])}
					>
						{num}
					</button>
				))}
			</div>
		</div>
	);
};

export default App;
