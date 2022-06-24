import { useState, useEffect } from 'react'
import HeaderImage from '../../../components/headerImage/HeaderImage'
import MetaInfo from '../../../utils/MetaInfo'
import './subProducts.scss'

const DecorativeBlinds = () => {
	const [images, setImages] = useState([])

	useEffect(() => {
		let imgArray = []
		for (let i = 1; i <= 4; i++) {
			imgArray.push(
				require(`../../../assets/images/decorative/decorative${i}.jpg`)
			)
		}

		setImages(imgArray)
	}, [])

	return (
		<>
			<MetaInfo
				title="- Decorative Blinds"
				content="Find out about the vast options of decorative blinds of Stylohome Window Coverings."
			/>
			<HeaderImage
				title="Decorative Panel Blinds"
				imgPath="decorativeheader"
			/>
			<div className="sub-products container">
				<p></p>
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

export default DecorativeBlinds
