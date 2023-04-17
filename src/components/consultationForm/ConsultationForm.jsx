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
	const [message, setMessage] = useState('');
	const [messageClass, setMessageClass] = useState('success');

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
		phone: `(${phone.slice(0, 3)}) ${phone.slice(3, 6)}-${phone.slice(6, 10)}`,
		city,
		state,
		note,
	};

	const handleSubmit = async e => {
		e.preventDefault();

		axios
			.post('https://api.apispreadsheets.com/data/dZ3N47q5taAWjUZV/', user)
			.then(res => {
				if (res.status === 201) {
					setMessage('Your request has been successfully submitted!');
          setMessageClass('success');
					clearForm();
				} else {
					setMessage(
						'An error has occurred while submitting the form! Please try again later.'
					);
					setMessageClass('fail');
				}
			})
			.catch(err => {
				console.log(err);
				setMessage(
					'An error has occurred while submitting the form! Please try again later.'
				);
				setMessageClass('fail');
			});
	};

	const clearForm = () => {
		setFirstName('');
		setLastName('');
		setEmail('');
		setPhone('');
		setCity('');
		setState('');
		setNote('');
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
							value={firstName}
							onChange={handleFirstNameChange}
							required
						/>
					</label>
					<label>
						Last Name:
						<input
							type="text"
							name="last_name"
							value={lastName}
							onChange={handleLastNameChange}
							required
						/>
					</label>
					<label>
						Email:
						<input
							type="email"
							name="email"
							value={email}
							onChange={handleEmailChange}
							required
						/>
					</label>
					<label>
						Phone:
						<input
							type="tel"
							name="phone"
							value={phone}
							onChange={handlePhoneChange}
							required
						/>
					</label>
					<label>
						City:
						<input
							type="text"
							name="city"
							value={city}
							onChange={handleCityChange}
							required
						/>
					</label>
					<label>
						State:
						<select name="state" value={state} onChange={handleStateChange}>
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
						rows="10"
						value={note}
						onChange={handleNoteChange}
						required
					></textarea>
				</label>
				<button className="form-btn btn orange-btn">Submit</button>
				{message && <p className={messageClass}>{message}</p>}
			</form>
		</div>
	);
};

export default ConsultationForm;
