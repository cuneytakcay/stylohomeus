import { useState } from 'react';

const TextInput = ({ label, type, name }) => {
	const [state, setState] = useState('');

	const handleChange = e => {
		setState({ [name]: e.target.value });
	};

	return (
		<label>
			{label}:
			<input type={type} name={name} onChange={handleChange} />
		</label>
	);
};

export default TextInput;
