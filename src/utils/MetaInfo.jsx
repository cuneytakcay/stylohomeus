import { Helmet } from 'react-helmet'

const MetaInfo = ({ title, content }) => {
	return (
		<Helmet>
			<title>Stylohome Window Coverings {title}</title>
			<meta name="description" content={content} />
		</Helmet>
	)
}

export default MetaInfo
