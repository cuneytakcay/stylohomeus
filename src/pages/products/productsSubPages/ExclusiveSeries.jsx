import { useState, useEffect } from 'react'
import HeaderImage from '../../../components/headerImage/HeaderImage'
import MetaInfo from '../../../utils/MetaInfo'
import './subProducts.scss'

const ExclusiveSeries = () => {
	const [images, setImages] = useState([])

	useEffect(() => {
		let imgArray = []
		for (let i = 1; i <= 8; i++) {
			imgArray.push(
				require(`../../../assets/images/exclusive/exclusive${i}.jpg`)
			)
		}

		setImages(imgArray)
	}, [])

	return (
		<>
			<MetaInfo
				title="- Exclusive Series"
				content="Find out about the vast options of exclusive series of Stylohome Window Coverings."
			/>
			<HeaderImage title="Exclusive Series" imgPath="exclusiveheader" />
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

export default ExclusiveSeries
