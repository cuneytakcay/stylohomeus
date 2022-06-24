import Sitemap from '../../components/sitemap/Sitemap'
import HeaderImage from '../../components/headerImage/HeaderImage'
import MetaInfo from '../../utils/MetaInfo'

const NotFound = () => {
	return (
		<>
			<MetaInfo
				title="- Page Not Found"
				content="Stylohome window coverings provides vast options of high quality blinds, shades, and drapes including zebra blinds, roller shades, decorative panel blinds, double mechanism blinds, curtains & drapes, vertical fabric blinds, premium home decorative items, and motorized shades."
			/>
			<HeaderImage
				title="Page cannot be found..."
				imgPath="defaultheader"
			/>
			<Sitemap />
		</>
	)
}

export default NotFound
