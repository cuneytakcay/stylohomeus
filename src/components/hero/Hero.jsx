import { Link } from 'react-router-dom'
import { Splide, SplideSlide } from '@splidejs/react-splide'

import heroSlides from '../../data/heroSlides.json'

import '@splidejs/splide/dist/css/splide.min.css'
import './hero.scss'

import img01 from '../../assets/images/hero/heroheader-01.jpg'
import img02 from '../../assets/images/hero/heroheader-02.jpg'
import img03 from '../../assets/images/hero/heroheader-03.jpg'
import img01Mb from '../../assets/images/hero/heroheader-mb-01.jpg'
import img02Mb from '../../assets/images/hero/heroheader-mb-02.jpg'
import img03Mb from '../../assets/images/hero/heroheader-mb-03.jpg'

const Hero = () => {
	const images = {
		img01,
		img02,
		img03,
		img01Mb,
		img02Mb,
		img03Mb,
	}

	const options = {
		type: 'fade',
		rewind: true,
		speed: 1200,
		gap: '0',
		pagination: false,
		lazyLoad: 'nearby',
	}

	return (
		<div className="hero">
			<div className="hero-slider">
				<Splide options={options}>
					{heroSlides.map((slide, ind) => (
						<SplideSlide key={ind}>
							<div className="hero-slide">
								<div className="img-cont">
									<picture>
										<source
											srcSet={images[slide.imgKeyMb]}
											media="(max-width: 640px)"
										/>
										<img
											src={images[slide.imgKey]}
											alt=""
											width="100%"
											height="100%"
											lazyload="true"
										/>
									</picture>
								</div>
								<div className="text-cont">
									<p className="text">{slide.title}</p>
									<Link className="btn orange-btn" to="/info">
										Get a Free Estimate
									</Link>
								</div>
							</div>
						</SplideSlide>
					))}
				</Splide>
			</div>
		</div>
	)
}

export default Hero
