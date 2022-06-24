import { useState, useEffect } from 'react'

import './headerImage.scss'

const HeaderImage = ({ title, imgPath }) => {
	const [img, setImg] = useState('')

	useEffect(() => {
		setImg(require(`../../assets/images/header/${imgPath}.jpg`))
	}, [imgPath])

	return (
		<div className="header-image">
			<img src={img} alt="" width="1000" height="450" lazyload="true" />
			<div className="text-cont">
				<header>
					<h1>{title}</h1>
				</header>
			</div>
		</div>
	)
}

export default HeaderImage
