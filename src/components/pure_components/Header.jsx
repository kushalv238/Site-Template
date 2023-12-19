import '../../stylesheets/headers.css'

import { useState, useEffect } from 'react'

import { useSelector } from 'react-redux'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { /*faAngleDown,*/ faBars, faX } from '@fortawesome/free-solid-svg-icons'

import AccountCircleIcon from '@mui/icons-material/AccountCircle';

import useWindowDimensions from '../../utility/getWindowDimensions'
import { Link } from 'react-router-dom'

import logo from './../../resources/images/logo.png'

import scrollToTop from '../../utility/scrollToTop'

const Header = (props) => {
	const user = useSelector(state => state.user.userInfo);

	// const [dropDownActive, setDropDownActive] = useState(false);
	const [navbarActive, setNavbarActive] = useState(false);

	useEffect(() => {
		setNavbarActive(false)
		console.log(user)
	}, [])

	const { width } = useWindowDimensions();

	const accountInfo =
		(user && user.photoURL)
			? <img className="userProfileImg lg:w-12 md:w-20" src={user.photoURL} alt='user profile img' title={user.name} />
			: <AccountCircleIcon />

	return (
		<>
			<header className={(props.notTop ? 'notTop' : '') + (props.onPage === 5 ? 'header__dark' : '')} data-head="top">
				<div className="logo" style={props.notTop ? { minWidth: '6%', maxWidth: '19rem' } : {}}>
					<Link to=''>
						<img src={logo} alt="Application" title='Application' style={props.notTop ? { width: '90%' } : {}} />
					</Link>
					<Link to=''>
						Application
					</Link>
				</div>

				<ul className={`navbar${(width < 900 && !navbarActive) ? ' hide' : ''}`}>
					<li className={`nav-item ${props.onPage === 1 ? 'activePage' : ''}`}>
						<Link
							to=''
							onClick={
								props.onPage === 1
									? () => {
										scrollToTop()
										setNavbarActive(false)
									}
									: () => props.setOnPage(1)
							}
						>
							Home
						</Link>
					</li>
					<li className={`nav-item ${props.onPage === 2 ? 'activePage' : ''}`}>
						<Link
							to="about"
							onClick={
								props.onPage === 2
									? () => {
										scrollToTop()
										setNavbarActive(false)
									}
									: () => props.setOnPage(2)
							}
						>About</Link>
					</li>
					<li className={`nav-item ${props.onPage === 3 ? 'activePage' : ''}`}>
						<Link
							to="contact"
							onClick={
								props.onPage === 3
									? () => {
										scrollToTop()
										setNavbarActive(false)
									}
									: () => props.setOnPage(3)
							}
						>Contact Us</Link>
					</li>
					<li className={`nav-item ${props.onPage === 4 ? 'activePage' : ''}`}>
						<Link
							to="faqs"
							onClick={
								props.onPage === 4
									? () => {
										scrollToTop()
										setNavbarActive(false)
									}
									: () => props.setOnPage(4)
							}
						>FAQ's</Link>
					</li>

					<li className='nav-item' onClick={()=>{
						scrollToTop()
						setNavbarActive(false)
					}}>
						{
							user ?
								<Link to="auth">
									{accountInfo}
								</Link>
								:
								<div className='flex items-center gap-3 auth-opt'>
									<Link to="auth/login">
										<p className=''>Log in</p>
									</Link>
									<Link to="auth/signup" className='registerBtn'>
										Register as a voter
									</Link>
								</div>
						}
					</li>

					{/* Code for drop-down menu (CSS already written) */}
					{/* <li
						onMouseEnter={() => setDropDownActive(true)}
						onMouseLeave={() => setDropDownActive(false)}
						onClick={() => { setDropDownActive(!dropDownActive) }}
						className={`dropdown-button${props.onPage === 4 ? ' activePage' : ''}`}
					>
						<span className="dropdown">
							Events
							<FontAwesomeIcon icon={faAngleDown} />
						</span>
						<ul className={`dropdown-menu${dropDownActive ? '' : ' hide'}`}>
							<li className="dropdown-item">
								<a href='/'><p className='dropdown-item-text'>Event 1 &gt;</p></a>
							</li>
							<li className="dropdown-item">
								<a href='/'><p className='dropdown-item-text'>Event 2 &gt;</p></a>
							</li>
							<li className="dropdown-item">
								<a href='/'><p className='dropdown-item-text'>Event 3 &gt;</p></a>
							</li>
						</ul>
					</li> */}
				</ul>

				<div
					className={`hamburger${width < 900 ? '' : ' hide'}`}
					onClick={() => setNavbarActive(!navbarActive)}
				>
					<FontAwesomeIcon icon={navbarActive ? faX : faBars} />
				</div>
			</header>

			<div className="header-spacing"></div>
		</>
	)
}

export default Header