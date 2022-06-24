import { Link } from 'react-router-dom'
import SocialIcons from '../socialIcons/SocialIcons'
import logo from '../../assets/stylohome-logo-footer.png'
import './footer.scss'

const Footer = () => {
	return (
		<footer className="footer">
			<div className="footer-logo">
				<Link to="/">
					<img
						src={logo}
						alt="Stylohome Blinds and Shades"
						width="180"
						height="64"
					/>
				</Link>
			</div>
			<div className="footer-social">
				<SocialIcons />
			</div>
			<nav></nav>
			<p>
				&copy; 2022 Stylohome Blinds, Shades & More. All Rights
				Reserved.
			</p>
		</footer>
	)
}

export default Footer
