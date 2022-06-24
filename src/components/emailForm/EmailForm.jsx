import { useRef, useState } from 'react'
import emailjs from 'emailjs-com'
import { Close } from '@material-ui/icons'
import './emailForm.scss'

const EmailForm = ({ toggleMessagebox }) => {
	const [resultMsg, setResultMsg] = useState('')
	const form = useRef()

	const sendEmail = e => {
		e.preventDefault()

		emailjs
			.sendForm(
				process.env.REACT_APP_SERVICE_ID,
				process.env.REACT_APP_TEMPLATE_ID,
				form.current,
				process.env.REACT_APP_USER_ID
			)
			.then(
				result => {
					setResultMsg(
						'Email sent successfully. We will get back to you as soon as possible.'
					)
					console.log(result)
				},
				error => {
					setResultMsg('An error occured. Please try again.')
					console.log(error)
				}
			)
	}

	const checkInput = e => {
		if (e.target.value.trim().length > 0) {
			e.target.classList.add('occupied')
		} else {
			e.target.classList.remove('occupied')
		}
	}

	return (
		<div className="dark-bg">
			<div className="message-form">
				<button
					className="msg-close-btn"
					onClick={toggleMessagebox}
					aria-label="Close Message Box"
				>
					<Close />
				</button>
				<form ref={form} onSubmit={sendEmail}>
					<div className="form-input">
						<input
							id="name"
							type="text"
							name="name"
							required
							onChange={checkInput}
						/>
						<label htmlFor="name">Name</label>
					</div>
					<div className="form-input">
						<input
							id="email"
							type="email"
							name="email"
							required
							onChange={checkInput}
						/>
						<label htmlFor="email">Email</label>
					</div>
					<div className="form-input">
						<textarea
							id="message"
							name="message"
							onChange={checkInput}
						/>
						<label htmlFor="message">Message</label>
					</div>
					<div className="btn-cont">
						<button
							className="orange-btn btn md-btn"
							aria-label="Send Message"
						>
							Send
						</button>
					</div>
					{resultMsg.length > 0 && (
						<div className="result-cont">
							<p>{resultMsg}</p>
						</div>
					)}
				</form>
			</div>
		</div>
	)
}

export default EmailForm
