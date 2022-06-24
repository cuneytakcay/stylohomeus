import { useState, useEffect } from 'react'
import HeaderImage from '../../../components/headerImage/HeaderImage'
import MetaInfo from '../../../utils/MetaInfo'
import './subProducts.scss'

const RollerShades = () => {
	const [images, setImages] = useState([])

	useEffect(() => {
		let imgArray = []
		for (let i = 1; i <= 5; i++) {
			imgArray.push(
				require(`../../../assets/images/shades/shades${i}.jpg`)
			)
		}

		setImages(imgArray)
	}, [])

	return (
		<>
			<MetaInfo
				title="- Roller Shades"
				content="Find out about the vast options of roller shades of Stylohome Window Coverings."
			/>
			<HeaderImage title="Roller Shades" imgPath="shadesheader" />
			<div className="sub-products container">
				<p>
					Roller Shades, aka Roller Blinds are one of the prominent
					blind types seen in most places. Roller blades are
					convenient but when united with our vast color and pattern
					options, they become an even more attractive option. Roller
					Shades come in both mechanical, and motorized and remote
					control options.
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

export default RollerShades
