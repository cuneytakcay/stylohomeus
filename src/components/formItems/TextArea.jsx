const TextArea = ({ label, name, rows }) => {
	return (
		<label>
			{label}:
			<textarea name={name} rows={rows} />
		</label>
	);
};

export default TextArea;
