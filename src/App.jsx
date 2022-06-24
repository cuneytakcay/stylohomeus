import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Header from './components/header/Header'
import Home from './pages/home/Home'
import Products from './pages/products/Products'
import Curtains from './pages/products/productsSubPages/Curtains'
import DecorativeBlinds from './pages/products/productsSubPages/DecorativeBlinds'
import MotorizedShades from './pages/products/productsSubPages/MotorizedShades'
import RollerShades from './pages/products/productsSubPages/RollerShades'
import DoubleMechanism from './pages/products/productsSubPages/DoubleMechanism'
import VerticalBlinds from './pages/products/productsSubPages/VerticalBlinds'
import ZebraBlinds from './pages/products/productsSubPages/ZebraBlinds'
import ExclusiveSeries from './pages/products/productsSubPages/ExclusiveSeries'
import Gallery from './pages/gallery/Gallery'
import Info from './pages/info/Info'
import Sitemap from './pages/sitemap/Sitemap'
import NotFound from './pages/error/NotFound'
import Footer from './components/footer/Footer'

import './app.scss'

const App = () => {
	return (
		<div className="app">
			<BrowserRouter>
				<Header />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/products" element={<Products />} />
					<Route
						path="/products/curtains-drapes"
						element={<Curtains />}
					/>
					<Route
						path="/products/decorative-panel"
						element={<DecorativeBlinds />}
					/>
					<Route
						path="/products/motorized-shades"
						element={<MotorizedShades />}
					/>
					<Route
						path="/products/roller-shades"
						element={<RollerShades />}
					/>
					<Route
						path="/products/double-mechanism"
						element={<DoubleMechanism />}
					/>
					<Route
						path="/products/vertical-fabric"
						element={<VerticalBlinds />}
					/>
					<Route
						path="/products/zebra-blinds"
						element={<ZebraBlinds />}
					/>
					<Route
						path="/products/exclusive-series"
						element={<ExclusiveSeries />}
					/>
					<Route path="/gallery" element={<Gallery />} />
					<Route path="/info" element={<Info />} />
					<Route path="/sitemap" element={<Sitemap />} />
					<Route path="*" element={<NotFound />} />
				</Routes>
				<Footer />
			</BrowserRouter>
		</div>
	)
}

export default App
