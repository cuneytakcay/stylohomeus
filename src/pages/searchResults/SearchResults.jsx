import { Link } from 'react-router-dom'
import HeaderImage from '../../components/headerImage/HeaderImage'
import MetaInfo from '../../utils/MetaInfo'
import './searchResults.scss'

const SearchResults = () => {
	return (
		<>
			<MetaInfo
				title="- Site Search"
				content="Search Stylohome Window Coverings site to find out more about our vast options of products."
			/>
			<HeaderImage title="Results Found" imgPath="defaultheader" />
			<div className="container">
				<ul>
					<li>
						<Link to="/">Result 1</Link>
					</li>
					<li>
						<Link to="/">Result 2</Link>
					</li>
					<li>
						<Link to="/">Result 3</Link>
					</li>
					<li>
						<Link to="/">Result 4</Link>
					</li>
				</ul>
			</div>
		</>
	)
}

export default SearchResults
