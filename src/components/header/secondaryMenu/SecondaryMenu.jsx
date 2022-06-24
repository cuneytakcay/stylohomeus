// import { useState } from 'react'
import { MailOutline, PhoneEnabled } from '@material-ui/icons'
// import EmailForm from '../../emailForm/EmailForm'
import './secondaryMenu.scss'

const SecondaryMenu = () => {
	// const [messageActive, setMessageActive] = useState(false)

	// const toggleMessagebox = () => setMessageActive(!messageActive)

	return (
		<div className="secondary-menu">
			<a className="item contact" href="tel:+15204429333">
				<PhoneEnabled />
				<span>Call Now</span>
			</a>
			<a className="item contact" href="mailto:sean@stylohomeus.com">
				<MailOutline />
				<span>Email Us</span>
			</a>
			{/* <span>
				<span
					className="item contact"
					role="button"
					onClick={toggleMessagebox}
				>
					<MailOutline />
					<span>Email Us</span>
				</span>
				{messageActive && (
					<EmailForm toggleMessagebox={toggleMessagebox} />
				)}
			</span> */}
		</div>
	)
}

export default SecondaryMenu
