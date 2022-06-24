import { MailOutline, PhoneEnabled } from '@material-ui/icons'
import MetaInfo from '../../utils/MetaInfo'
import './info.scss'

const About = () => {
	return (
		<div className="about container">
			<MetaInfo
				title="- Info"
				content="Find out about Stylohome Window Coverings work hours and contact info to schedule a free estimate visit."
			/>
			<h2>Company Info</h2>
			<div className="info">
				<h3>Contact</h3>
				<p className="contact-us">
					<span className="label">
						<PhoneEnabled /> Call us:{' '}
					</span>
					<a className="linkstyle" href="tel:+15204429333">
						(520) 442-9333
					</a>
				</p>
				<p className="contact-us">
					<span className="label">
						<MailOutline /> Email us:{' '}
					</span>
					<a className="linkstyle" href="mailto:sean@stylohomeus.com">
						sean@stylohomeus.com
					</a>
				</p>
			</div>
			<div className="info">
				<h3>Work Hours</h3>
				<table>
					<thead>
						<tr>
							<th>Days</th>
							<th>Hours</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>Sunday</td>
							<td>Closed</td>
						</tr>
						<tr>
							<td>Monday</td>
							<td>10AM - 6PM</td>
						</tr>
						<tr>
							<td>Tuesday</td>
							<td>10AM - 6PM</td>
						</tr>
						<tr>
							<td>Wednesday</td>
							<td>10AM - 6PM</td>
						</tr>
						<tr>
							<td>Thursday</td>
							<td>10AM - 6PM</td>
						</tr>
						<tr>
							<td>Friday</td>
							<td>10AM - 6PM</td>
						</tr>
						<tr>
							<td>Saturday</td>
							<td>10AM - 4PM</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	)
}

export default About
