import { Facebook, Instagram, Share } from '@material-ui/icons'

import './socialIcons.scss'

const SocialIcons = () => {
	return (
		<div className="social-icons">
			<a
				href="https://facebook.com/StyloHome-BlindsShades-More-100167182521182"
				target="_blank"
				rel="noopener noreferrer"
				title="Visit our Facebook Page"
			>
				<Facebook />
				<span className="sr-only">Visit our facebook page</span>
			</a>
			<a
				href="https://instagram.com/stylohomeus"
				target="_blank"
				rel="noopener noreferrer"
				title="Visit our Instagram Page"
			>
				<Instagram />
				<span className="sr-only">Visit our instagram page</span>
			</a>
			<a
				href="https://www.facebook.com/sharer/sharer.php?u=http://www.stylohomewindowcoverings.com&amp;src=sdkpreparse"
				target="_blank"
				rel="noopener noreferrer"
				title="Share on Facebook"
			>
				<Share />
				<span className="sr-only">Share on Facebook</span>
			</a>
		</div>
	)
}

export default SocialIcons
