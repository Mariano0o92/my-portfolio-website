import React, { useEffect, useState } from 'react'
import { FaBars } from 'react-icons/fa'
import {
	Nav,
	NavbarContainer,
	NavLink,
	NavLogo,
	MobileIcon,
	NavMenu,
	NavItem,
	NavLinks,
	NavBtn,
	NavBtnLink,
} from './NavbarElements'
import logo from '../../images/logo-transparent.png'
import { animateScroll as scroll } from 'react-scroll'

const Navbar = ({ toggle }) => {
	const [scrollNav, setScrollNav] = useState(false)

	const changeNav = () => {
		if (window.scrollY >= 80) {
			setScrollNav(true)
		} else {
			setScrollNav(false)
		}
	}

	useEffect(() => {
		window.addEventListener('scroll', changeNav)
	}, [])

	const toggleHome = () => {
		scroll.scrollToTop()
	}

	return (
		<>
			<Nav $scrollNav={scrollNav}>
				<NavbarContainer>
					<NavLink to='/' onClick={toggleHome}>
						<NavLogo src={logo}></NavLogo>
					</NavLink>
					<MobileIcon onClick={toggle}>
						<FaBars />
					</MobileIcon>
					<NavMenu>
						<NavItem>
							<NavLinks to='about' smooth={true} duration={500} spy={true} exact='true' offset={-80}>
								About
							</NavLinks>
						</NavItem>
						<NavItem>
							<NavLinks to='skills' smooth={true} duration={500} spy={true} exact='true' offset={-80}>
								Skills
							</NavLinks>
						</NavItem>
						<NavItem>
							<NavLinks to='projects' smooth={true} duration={500} spy={true} exact='true' offset={-80}>
								Projects
							</NavLinks>
						</NavItem>
						<NavItem>
							<NavLinks to='docs' smooth={true} duration={500} spy={true} exact='true' offset={-80}>
								Docs
							</NavLinks>
						</NavItem>
					</NavMenu>
					<NavBtn>
						<NavBtnLink to='/signin'>Contact me</NavBtnLink>
					</NavBtn>
				</NavbarContainer>
			</Nav>
		</>
	)
}

export default Navbar
