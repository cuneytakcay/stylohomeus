import { useState, useEffect } from 'react'
import HeaderImage from '../../../components/headerImage/HeaderImage'
import MetaInfo from '../../../utils/MetaInfo'
import './subProducts.scss'

const VerticalBlinds = () => {
	const [images, setImages] = useState([])

	useEffect(() => {
		let imgArray = []
		for (let i = 1; i <= 23; i++) {
			imgArray.push(
				require(`../../../assets/images/vertical/vertical${i}.jpg`)
			)
		}

		setImages(imgArray)
	}, [])

	return (
		<>
			<MetaInfo
				title="- Vertical Fabric Blinds"
				content="Find out about the vast options of vertical fabric blinds of Stylohome Window Coverings."
			/>
			<HeaderImage
				title="Vertical Fabric Blinds"
				imgPath="verticalheader"
			/>
			<div className="sub-products container">
				<p>
					Vertical Fabric Blinds are an easy to maintain option that
					reduce glare while letting ideal amount of sunlight into
					your room. These products have different types to cater your
					needs, from tightly woven panels for privacy, to vinyl to
					backings that help block out unwanted light.
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

export default VerticalBlinds
