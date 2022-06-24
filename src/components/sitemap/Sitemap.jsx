import { Link } from 'react-router-dom'

import menuLinks from '../../data/menuLinks.json'

import './sitemap.scss'

const Sitemap = () => {
	return (
		<div className="sitemap">
			<section className="text-box">
				<header>
					<h1>Sitemap</h1>
				</header>
				<ul className="sitemaplinks">
					{menuLinks.map((link, ind) => (
						<li className="sitemap-link" key={ind}>
							<Link to={link.url}>{link.title}</Link>
							{link.subitems && (
								<ul>
									{link.subitems?.map((sublink, subind) => (
										<li
											className="sitemap-sublink"
											key={subind}
										>
											<Link
												to={`${link.url}/${sublink.url}`}
											>
												{sublink.title}
											</Link>
										</li>
									))}
								</ul>
							)}
						</li>
					))}
				</ul>
			</section>
		</div>
	)
}

export default Sitemap
