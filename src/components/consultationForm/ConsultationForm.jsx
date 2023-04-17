import { useState } from 'react';
import axios from 'axios';
import './formFields.scss';

const ConsultationForm = () => {
	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');
	const [email, setEmail] = useState('');
	const [phone, setPhone] = useState('');
	const [city, setCity] = useState('');
	const [state, setState] = useState('');
	const [note, setNote] = useState('');

	const handleFirstNameChange = e => setFirstName(e.target.value);
	const handleLastNameChange = e => setLastName(e.target.value);
	const handleEmailChange = e => setEmail(e.target.value);
	const handlePhoneChange = e => setPhone(e.target.value);
	const handleCityChange = e => setCity(e.target.value);
	const handleStateChange = e => setState(e.target.value);
	const handleNoteChange = e => setNote(e.target.value);

	const user = {
		first_name: firstName,
		last_name: lastName,
		email,
		phone,
		city,
		state,
		note,
	};

	const handleSubmit = async e => {
		e.preventDefault();

		axios
			.post('https://api.apispreadsheets.com/data/dZ3N47q5taAWjUZV/', user)
			.then(res => {
				setFirstName('');
				setLastName('');
				setEmail('');
				setPhone('');
				setCity('');
				setState('');
				setNote('');
			})
			.catch(err => console.log(err));
	};

	const states = [
		'Alabama',
		'Alaska',
		'Arizona',
		'Arkansas',
		'California',
		'Colorado',
		'Connecticut',
		'Delaware',
		'Florida',
		'Georgia',
		'Hawaii',
		'Idaho',
		'Illinois',
		'Indiana',
		'Iowa',
		'Kansas',
		'Kentucky',
		'Louisiana',
		'Maine',
		'Maryland',
		'Massachusetts',
		'Michigan',
		'Minnesota',
		'Mississippi',
		'Missouri',
		'Montana',
		'Nebraska',
		'Nevada',
		'New Hampshire',
		'New Jersey',
		'New Mexico',
		'New York',
		'North Carolina',
		'North Dakota',
		'Ohio',
		'Oklahoma',
		'Oregon',
		'Pennsylvania',
		'Rhode Island',
		'South Carolina',
		'South Dakota',
		'Tennessee',
		'Texas',
		'Utah',
		'Vermont',
		'Virginia',
		'Washington',
		'West Virginia',
		'Wisconsin',
		'Wyoming',
	];

	return (
		<div id="consultation-form" className="consult-form">
			<h2>Request a Consultation</h2>
			<form onSubmit={handleSubmit}>
				<div className="flex">
					<label>
						First Name:
						<input
							type="text"
							name="first_name"
							onChange={handleFirstNameChange}
							required
						/>
					</label>
					<label>
						Last Name:
						<input
							type="text"
							name="last_name"
							onChange={handleLastNameChange}
							required
						/>
					</label>
					<label>
						Email:
						<input
							type="email"
							name="email"
							onChange={handleEmailChange}
							required
						/>
					</label>
					<label>
						Phone:
						<input
							type="tel"
							name="phone"
							onChange={handlePhoneChange}
							required
							pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
							placeholder="xxx-xxx-xxxx"
						/>
					</label>
					<label>
						City:
						<input
							type="text"
							name="city"
							onChange={handleCityChange}
							required
						/>
					</label>
					<label>
						State:
						<select name="state" onChange={handleStateChange}>
							{states.map(state => (
								<option key={state} value={state}>
									{state}
								</option>
							))}
						</select>
					</label>
				</div>
				<label>
					How can we help you?
					<textarea
						name="note"
						rows="20"
						onChange={handleNoteChange}
						required
					></textarea>
				</label>
				<button className="form-btn btn orange-btn">Submit</button>
			</form>
		</div>
	);
};

export default ConsultationForm;
