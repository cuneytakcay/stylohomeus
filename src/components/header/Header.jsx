import { Link } from 'react-router-dom'

import Menu from './menu/Menu'
import SecondaryMenu from './secondaryMenu/SecondaryMenu'
import SocialIcons from '../socialIcons/SocialIcons'

import logo from '../../assets/stylohome-logo-dt.png'
import mblogo from '../../assets/stylohome-logo-mobile.png'

import './header.scss'

const Header = () => {
	return (
		<div className="header-cont">
			<header className="banner">
				<h1 className="visually-hidden">
					Stylohome Blinds, Shades & More
				</h1>
				<SocialIcons />
				<SecondaryMenu />
			</header>
			<div className="nav-cont">
				<div className="logo">
					<Link to="/">
						<img
							className="dt"
							src={logo}
							alt="Stylohome Blinds, Shades and More"
							width="165"
							height="59"
						/>
						<img
							className="mb"
							src={mblogo}
							alt="Stylohome Blinds, Shades and More"
							width="120"
							height="54"
						/>
					</Link>
				</div>
				<Menu />
			</div>
		</div>
	)
}

export default Header
