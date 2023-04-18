import { useState } from 'react';
import axios from 'axios';
import './formFields.scss';

const INITIAL_STATE = {
	first_name: '',
	last_name: '',
	email: '',
	phone: '',
	city: '',
	state: '',
	note: '',
};

const ConsultationForm = () => {
	const [form, setForm] = useState(INITIAL_STATE);
	const [message, setMessage] = useState('');
	const [messageClass, setMessageClass] = useState('success');

	const handleChange = e => {
		setForm({
			...form,
			[e.target.name]: e.target.value,
		});
	};

	const { first_name, last_name, email, phone, city, state, note } = form;

	const handleSubmit = async e => {
		e.preventDefault();

		axios
			.post('https://api.apispreadsheets.com/data/dZ3N47q5taAWjUZV/', form)
			.then(res => {
				if (res.status === 201) {
					setMessage('Your request has been successfully submitted!');
					setMessageClass('success');
					setForm(INITIAL_STATE);
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
							value={first_name}
							onChange={handleChange}
							required
						/>
					</label>
					<label>
						Last Name:
						<input
							type="text"
							name="last_name"
							value={last_name}
							onChange={handleChange}
							required
						/>
					</label>
					<label>
						Email:
						<input
							type="email"
							name="email"
							value={email}
							onChange={handleChange}
							required
						/>
					</label>
					<label>
						Phone:
						<input
							type="tel"
							name="phone"
							value={phone}
							onChange={handleChange}
							required
						/>
					</label>
					<label>
						City:
						<input
							type="text"
							name="city"
							value={city}
							onChange={handleChange}
							required
						/>
					</label>
					<label>
						State:
						<select name="state" value={state} onChange={handleChange}>
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
						onChange={handleChange}
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
