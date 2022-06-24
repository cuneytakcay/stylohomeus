import { useState, useEffect } from 'react'
import HeaderImage from '../../../components/headerImage/HeaderImage'
import MetaInfo from '../../../utils/MetaInfo'
import './subProducts.scss'

const ZebraBlinds = () => {
	const [images, setImages] = useState([])

	useEffect(() => {
		let imgArray = []
		for (let i = 1; i <= 42; i++) {
			imgArray.push(require(`../../../assets/images/zebra/zebra${i}.jpg`))
		}

		setImages(imgArray)
	}, [])

	return (
		<>
			<MetaInfo
				title="- Zebra Blinds"
				content="Find out about the vast options of zebra blinds of Stylohome Window Coverings."
			/>
			<HeaderImage title="Zebra Blinds" imgPath="zebraheader" />
			<div className="sub-products container">
				<p>
					Zebra Blinds bring the best of both worlds with their
					practicality and vast range of design options. While the
					perfectly sheer stripes allow you to bring the luminous
					sunlight in, the opaque stripes will ensure you your
					privacy. Zebra blinds come in both mechanical, and motorized
					and remote control options.
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

export default ZebraBlinds
