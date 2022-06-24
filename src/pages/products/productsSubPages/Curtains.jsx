import { useState, useEffect } from 'react'
import HeaderImage from '../../../components/headerImage/HeaderImage'
import MetaInfo from '../../../utils/MetaInfo'

import './subProducts.scss'

const Curtains = () => {
	const [images, setImages] = useState([])

	useEffect(() => {
		let imgArray = []
		for (let i = 1; i <= 13; i++) {
			imgArray.push(
				require(`../../../assets/images/curtain/curtain${i}.jpg`)
			)
		}

		setImages(imgArray)
	}, [])

	return (
		<>
			<MetaInfo
				title="- Curtains & Drapes"
				content="Find out about the vast options of curtains and drapes of Stylohome Window Coverings."
			/>
			<HeaderImage title="Curtains & Drapes" imgPath="curtainheader" />
			<div className="sub-products container">
				<p>
					Curtains and Drapes are the perfect choice for a more
					classic, and royal look. The high quality fabrics we offer
					have many design options that can bring your imagination
					into life.
				</p>
				<div className="image-collection">
					{images.map((img, ind) => (
						<div className="img-box" key={ind}>
							<img
								src={img}
								alt=""
								width="640"
								height="480"
								lazyload="true"
							/>
						</div>
					))}
				</div>
			</div>
		</>
	)
}

export default Curtains
