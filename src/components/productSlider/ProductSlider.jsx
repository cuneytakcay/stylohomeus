import { Link } from 'react-router-dom'
import { Splide, SplideSlide } from '@splidejs/react-splide'

import productSlides from '../../data/productSlides.json'

import '@splidejs/splide/dist/css/splide.min.css'
import './productSlider.scss'

import decorative from '../../assets/images/productSlider/decorative.jpg'
import drapes from '../../assets/images/productSlider/drapes.jpg'
import roller from '../../assets/images/productSlider/roller.jpg'
import exclusive from '../../assets/images/productSlider/exclusive.jpg'
import vertical from '../../assets/images/productSlider/vertical.jpg'
import zebra from '../../assets/images/productSlider/zebra.jpg'
import motorized from '../../assets/images/productSlider/remote.jpg'

const ProductSlider = () => {
	const images = {
		decorative,
		drapes,
		roller,
		exclusive,
		vertical,
		zebra,
		motorized,
	}

	const options = {
		type: 'loop',
		speed: 2000,
		lazyLoad: 'nearby',
		gap: '20px',
		perPage: 3,
		breakpoints: {
			1024: {
				perPage: 2,
			},
			640: {
				perPage: 1,
			},
		},
	}

	return (
		<div className="product-slider">
			<header className="slider-header">
				<h2>Our Products</h2>
			</header>
			<div className="slider-cont">
				<Splide options={options}>
					{productSlides.map((item, ind) => (
						<SplideSlide key={ind}>
							<div className="pro-slide">
								<div className="img-cont">
									<Link to={`products/${item.link}`}>
										<img
											src={images[item.imgKey]}
											alt={item.title}
											width="640"
											height="480"
											lazyload="true"
										/>
									</Link>
								</div>
								<h3>
									<Link to={`products/${item.link}`}>
										{item.title}
									</Link>
								</h3>
							</div>
						</SplideSlide>
					))}
				</Splide>
			</div>
		</div>
	)
}

export default ProductSlider
