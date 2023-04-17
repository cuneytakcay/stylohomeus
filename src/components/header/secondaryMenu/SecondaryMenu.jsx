import { MailOutline, PhoneEnabled } from '@material-ui/icons';
import './secondaryMenu.scss';

const SecondaryMenu = () => {
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
		</div>
	);
};

export default SecondaryMenu;
