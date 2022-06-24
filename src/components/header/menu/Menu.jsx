import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ArrowDropDown, Close, Menu } from '@material-ui/icons'

import menuLinks from '../../../data/menuLinks.json'

import './menu.scss'

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false)
	const [submenuIsOpen, setSubmenuIsOpen] = useState(false)
	const [width, setWidth] = useState(window.innerWidth)
	const breakPoint = 1024

	useEffect(() => {
		const recalcWidth = () => setWidth(window.innerWidth)

		window.addEventListener('resize', recalcWidth)
		return () => window.removeEventListener('resize', recalcWidth)
	}, [])

	const toggleMenu = () => setIsOpen(!isOpen)

	const openSubmenu = e => {
		setSubmenuIsOpen(!submenuIsOpen)

		if (e.target.classList.contains('active')) {
			e.target.classList.remove('active')
			e.target.closest('.has-dropdown').classList.remove('active')
		} else {
			e.target.classList.add('active')
			e.target.closest('.has-dropdown').classList.add('active')
		}
	}

	return (
		<nav className="navbar-container">
			{width <= breakPoint && (
				<button
					className="menu-btn"
					onClick={toggleMenu}
					aria-label="Toggle Menu"
					aria-expanded={isOpen}
					aria-controls="dd-menu"
				>
					{!isOpen ? <Menu /> : <Close />}
				</button>
			)}
			<ul id="dd-menu" className={isOpen ? 'navbar active' : 'navbar'}>
				{menuLinks.map((item, ind) => (
					<li className={item.subitems && 'has-dropdown'} key={ind}>
						<Link to={item.url}>
							<span
								className="link-item"
								onClick={
									width <= breakPoint ? toggleMenu : null
								}
							>
								{item.title}
							</span>
						</Link>
						{item.subitems && width <= breakPoint && (
							<button
								className="dd-arrow"
								onClick={openSubmenu}
								dataind={ind}
								aria-label="Toggle Submenu"
								aria-expanded={submenuIsOpen}
								aria-controls="submenu"
							>
								<ArrowDropDown />
							</button>
						)}
						{item.subitems && (
							<ul id="submenu" className="dropdown">
								{item.subitems.map((subitem, subind) => (
									<li key={subind}>
										<Link to={`${item.url}/${subitem.url}`}>
											<span
												className="subitem"
												onClick={
													width <= breakPoint
														? toggleMenu
														: null
												}
											>
												{subitem.title}
											</span>
										</Link>
									</li>
								))}
							</ul>
						)}
					</li>
				))}
			</ul>
		</nav>
	)
}

export default Navbar
