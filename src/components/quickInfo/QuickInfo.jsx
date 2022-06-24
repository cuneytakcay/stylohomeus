import premiumQuality from '../../assets/premium-quality.svg'
import freeBadge from '../../assets/free-badge.svg'
import satisfactionGuaranteed from '../../assets/satisfaction-guaranteed.svg'
import './quickInfo.scss'

const QuickInfo = () => {
	return (
		<div className="quick-info">
			<header>
				<h2>Why Shop at Stylohome?</h2>
			</header>
			<div className="quick-info-cont">
				<div className="info-item">
					<div className="info-icon" aria-hidden="true">
						<img
							src={freeBadge}
							alt="Free Estimate"
							width="100"
							height="100"
						/>
					</div>
					<h3>Estimation & Installation Services at NO cost</h3>
					<p>
						We provide free estimation and installation services for
						you so that you can make the best decision for your
						windows.
					</p>
				</div>
				<div className="info-item">
					<div className="info-icon" aria-hidden="true">
						<img
							src={premiumQuality}
							alt="Premium Quality"
							width="100"
							height="100"
						/>
					</div>
					<h3>Professional Team & Latest Technology</h3>
					<p>
						Our team made up of experienced staff members will help
						you at every step, from guiding you in making the right
						choice to setting up and instructing how to use our
						latest technology blinds.
					</p>
				</div>
				<div className="info-item">
					<div className="info-icon" aria-hidden="true">
						<img
							src={satisfactionGuaranteed}
							alt="Satisfaction Guaranteed"
							width="100"
							height="100"
						/>
					</div>
					<h3>Blinds for Every Environment</h3>
					<p>
						Our great collection blinds come in a wide variety of
						colors and patterns that complement every environment
						from a cozy home to a business office.
					</p>
				</div>
			</div>
		</div>
	)
}

export default QuickInfo
