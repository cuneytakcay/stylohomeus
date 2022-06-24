import Sitemap from '../../components/sitemap/Sitemap'
import HeaderImage from '../../components/headerImage/HeaderImage'
import MetaInfo from '../../utils/MetaInfo'

const NotFound = () => {
	return (
		<>
			<MetaInfo
				title="- Sitemap"
				content="Find out about the vast product options of Stylohome Window Coverings."
			/>
			<HeaderImage imgPath="defaultheader" />
			<Sitemap />
		</>
	)
}

export default NotFound
