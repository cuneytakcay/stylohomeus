import { Link } from 'react-router-dom'
import HeaderImage from '../../components/headerImage/HeaderImage'
import productSlides from '../../data/productSlides.json'
import decorative from '../../assets/images/productSlider/decorative.jpg'
import drapes from '../../assets/images/productSlider/drapes.jpg'
import roller from '../../assets/images/productSlider/roller.jpg'
import vertical from '../../assets/images/productSlider/vertical.jpg'
import zebra from '../../assets/images/productSlider/zebra.jpg'
import motorized from '../../assets/images/productSlider/remote.jpg'
import MetaInfo from '../../utils/MetaInfo'
import './products.scss'

const Products = () => {
	const images = {
		decorative,
		drapes,
		roller,
		vertical,
		zebra,
		motorized,
	}

	return (
		<>
			<MetaInfo
				title="- Products"
				content="Find out about the vast product options of Stylohome Window Coverings."
			/>
			<HeaderImage title="Products" imgPath="defaultheader" />
			<div className="container">
				<ul className="pro-grid">
					{productSlides.map((item, ind) => (
						<li className="pro-card" key={ind}>
							<div className="img-cont">
								<Link to={item.link}>
									<img
										src={images[item.imgKey]}
										alt={item.title}
										width="640"
										height="480"
										lazyload="true"
									/>
								</Link>
							</div>
							<div className="text-cont">
								<h3>
									<Link to={item.link}>{item.title}</Link>
								</h3>
								<p>{item.description.slice(0, 90)}...</p>
								<Link to={item.link} className="read-more">
									Read more
								</Link>
							</div>
						</li>
					))}
				</ul>
			</div>
		</>
	)
}

export default Products
