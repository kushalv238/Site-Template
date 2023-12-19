import { Link } from 'react-router-dom'

// import InstagramIcon from '@mui/icons-material/Instagram'

import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn'

import scrollToTop from '../../utility/scrollToTop'

import '../../stylesheets/footer.css'

const Footer = (props) => {
	return (
		<footer>
			<div className='footer-wrapper'>
				<div className='footer-grider'>
					<div className='footer-columns'>
						<p className='heading'>About Us</p>
						<p className='footerDesc'>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem dolor fugiat sapiente culpa velit sint asperiores, animi porro sed illum.
						</p>
					</div>
					<div className='footer-columns'>
						<div>
							<p className='heading'>Address</p>
							<p className='footerDesc'>
								<a
									href="https://goo.gl/maps/UUdvCoeZa2aycxBv7"
									target='_blank'
									rel='noreferrer'
								>
									SVKM's Dwarkadas J. Sanghvi College of Engineering, Vile Parle West,
									Mumbai-400056
								</a>
							</p>
						</div>
						<div>
							<p className='heading'>Contact</p>
							<div className='footerDesc'>
								<a
									href='mailto:kushalv238@gmail.com'
									target='_blank'
									rel='noreferrer'
								>
									kushalv238@gmail.com
								</a>
								<p>
									Kushal: <a href='tel:+91 98927 75337' title='Riya Surya'>+91 98927 75337</a>
								</p>
							</div>
						</div>
					</div>
					<div className='footer-columns footer-links'>
						<p className='heading'>Links</p>
						<Link
							className='footerLinks'
							to='/'
							onClick={
								props.onPage === 1
								? () => scrollToTop()
								: () => props.setOnPage(1)
							}
						>
							Home
						</Link>
						<Link
							className='footerLinks'
							to='/events'
							onClick={
								props.onPage === 2
								? () => scrollToTop()
								: () => props.setOnPage(2)
							}
						>
							Events
						</Link>

						<Link
							className='footerLinks'
							to='/team'
							onClick={
								props.onPage === 3
								? () => scrollToTop()
								: () => props.setOnPage(3)
							}
						>
							Team
						</Link>

						<Link
							className='footerLinks'
							to='/contact'
							onClick={
								props.onPage === 4
								? () => scrollToTop()
								: () => props.setOnPage(4)
							}
						>
							Contact Us
						</Link>
					</div>
					<div className='footer-columns'>
						<p className='heading'>Follow Us</p>
						<div className='socialsList gap-2'>
							<a
								title='Instagram'
								href='https://www.instagram.com/'
								target='_blank'
								rel='noreferrer'
								className='footerLinks'
							>
								{/* <Instagram /> */}
								<InstagramIcon />
							</a>
							<a
								title='LinkedIn'
								href='https://www.linkedin.com/'
								target='_blank'
								rel='noreferrer'
								className='footerLinks'
							>
								<LinkedInIcon />
							</a>
						</div>
					</div>
				</div>
			</div>
		</footer>
	)
}

export default Footer
