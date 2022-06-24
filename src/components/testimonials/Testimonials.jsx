import { useState, useRef } from 'react'
import { FormatQuote, ChevronLeft, ChevronRight } from '@material-ui/icons'

import testimonials from '../../data/testimonials.json'

import './testimonials.scss'

const Testimonials = () => {
	const [index, setIndex] = useState({ firstInd: 0, lastInd: 3 })
	const scrollRef = useRef()
	const { firstInd, lastInd } = index
	const startOfTestimonials = firstInd === 0
	const endOfTestimonials =
		index.lastInd >= testimonials.length ? true : false

	const loadPrev = () => {
		setIndex({ firstInd: firstInd - 3, lastInd: lastInd - 3 })

		scrollRef.current.scrollIntoView({ behavior: 'smooth' })
	}

	const loadNext = () => {
		setIndex({ firstInd: firstInd + 3, lastInd: lastInd + 3 })

		scrollRef.current.scrollIntoView({ behavior: 'smooth' })
	}

	return (
		<section className="testimonials" ref={scrollRef}>
			<header>
				<h2>Testimonials</h2>
			</header>
			<div className="testimony-cont">
				{testimonials.slice(firstInd, lastInd).map((testimony, ind) => (
					<article className="testimony" key={ind}>
						<FormatQuote />
						<p className="quote">{testimony.quote}</p>
						<p className="quoter">— {testimony.quoter}</p>
					</article>
				))}
			</div>
			<div className="btn-cont">
				{!startOfTestimonials && (
					<button
						className="btn orange-btn md-btn prev"
						onClick={loadPrev}
					>
						<ChevronLeft />
						Previous
					</button>
				)}
				{!endOfTestimonials && (
					<button
						className="btn orange-btn md-btn next"
						onClick={loadNext}
					>
						Next <ChevronRight />
					</button>
				)}
			</div>
		</section>
	)
}

export default Testimonials
