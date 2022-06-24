import HeaderImage from '../../../components/headerImage/HeaderImage'
import MetaInfo from '../../../utils/MetaInfo'
import './subProducts.scss'

const MotorizedShades = () => {
	return (
		<>
			<MetaInfo
				title="- Motorized Shades"
				content="Find out about the vast options of motorized shades of Stylohome Window Coverings."
			/>
			<HeaderImage title="Motorized Shades" imgPath="defaultheader" />
			<div className="sub-products container">
				<p>
					Adapting to the world of technology our blinds offer
					motorized options that can be controlled with a remote
					control, instead of traditional hand-operated blinds. These
					products are made of great quality elements that will last
					longer than usual. With motorized shades, live smart not
					hard.
				</p>
				<div className="video-collection">
					<div className="vid">
						<iframe
							id="ytplayer"
							type="text/html"
							src="https://www.youtube.com/embed/W4smSjFzb4A"
							frameBorder="0"
							title="YouTube video"
						></iframe>
					</div>
					<div className="vid">
						<iframe
							id="ytplayer"
							type="text/html"
							src="https://www.youtube.com/embed/TRPrbe3qwCY"
							frameBorder="0"
							title="YouTube video"
						></iframe>
					</div>
				</div>
			</div>
		</>
	)
}

export default MotorizedShades
