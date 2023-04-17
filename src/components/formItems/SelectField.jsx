const SelectField = ({ label, name, options }) => {
	return (
		<label>
			{label}:
			<select name={name}>
				<option value={options[0]}>{options[0]}</option>
				<option value={options[1]}>{options[1]}</option>
				<option value={options[2]}>{options[2]}</option>
			</select>
		</label>
	);
};

export default SelectField;
