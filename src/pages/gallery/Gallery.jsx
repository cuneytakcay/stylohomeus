import { useState, useEffect, useRef } from 'react'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import MetaInfo from '../../utils/MetaInfo'
import '@splidejs/splide/dist/css/splide.min.css'
import './gallery.scss'

const Gallery = () => {
	const [images, setImages] = useState([])

	const mainRef = useRef()
	const thumbsRef = useRef()

	useEffect(() => {
		let imgArray = []
		for (let i = 100; i <= 197; i++) {
			imgArray.push(require(`../../assets/images/gallery/img-${i}.jpg`))
		}

		setImages(imgArray)

		if (mainRef.current && thumbsRef.current && thumbsRef.current.splide) {
			mainRef.current.sync(thumbsRef.current.splide)
		}
	}, [])

	const mainOptions = {
		type: 'fade',
		gap: '0',
		pagination: false,
		lazyLoad: 'nearby',
		arrows: false,
	}

	const thumbsOptions = {
		type: 'slide',
		rewind: true,
		gap: '10px',
		pagination: false,
		cover: true,
		isNavigation: true,
		perPage: 4,
		lazyLoad: 'nearby',
		dragMinThreshold: {
			mouse: 4,
			touch: 10,
		},
		breakpoints: {
			640: {
				perPage: 3,
			},
			500: {
				perPage: 2,
			},
		},
	}

	return (
		<div className="container gallery">
			<MetaInfo
				title="- Gallery"
				content="Stylohome window coverings provides vast options of high quality blinds, shades, and drapes including zebra blinds, roller shades, decorative panel blinds, double mechanism blinds, curtains & drapes, vertical fabric blinds, premium home decorative items, and motorized shades."
			/>
			<header className="slider-header">
				<h2>Product Gallery</h2>
			</header>
			<div className="main-slider">
				<Splide options={mainOptions} ref={mainRef}>
					{images.map((img, ind) => (
						<SplideSlide key={ind}>
							<div className="gallery-slide">
								<img
									src={img}
									alt=""
									width="640"
									height="480"
									lazyload="true"
								/>
							</div>
						</SplideSlide>
					))}
				</Splide>
			</div>
			<div className="thumbs">
				<Splide options={thumbsOptions} ref={thumbsRef}>
					{images.map((img, ind) => (
						<SplideSlide key={ind}>
							<div className="gallery-slide">
								<img
									src={img}
									alt=""
									width="152"
									height="114"
									lazyload="true"
								/>
							</div>
						</SplideSlide>
					))}
				</Splide>
			</div>
		</div>
	)
}

export default Gallery
