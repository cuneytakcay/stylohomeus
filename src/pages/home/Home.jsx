import Hero from '../../components/hero/Hero'
import ProductSlider from '../../components/productSlider/ProductSlider'
import QuickInfo from '../../components/quickInfo/QuickInfo'
import Testimonials from '../../components/testimonials/Testimonials'
import ConsultationForm from '../../components/consultationForm/ConsultationForm'
import MetaInfo from '../../utils/MetaInfo'

import './home.scss'

const Home = () => {
	return (
		<div className="home">
			<MetaInfo
				title=""
				content="Stylohome window coverings provides vast options of high quality blinds, shades, and drapes including zebra blinds, roller shades, decorative panel blinds, double mechanism blinds, curtains & drapes, vertical fabric blinds, premium home decorative items, and motorized shades."
			/>
			<Hero />
			<div className="container">
				<QuickInfo />
				<ProductSlider />
				<Testimonials />
				<ConsultationForm />
			</div>
		</div>
	)
}

export default Home
