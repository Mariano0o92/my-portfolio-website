import styled from 'styled-components'
import { Link } from 'react-scroll'

export const Nav = styled.nav`
	position: sticky;
	top: 0;
	background: ${({ $scrollNav }) => ($scrollNav ? '#000' : 'transparent')};
	height: 80px;
	margin-top: -80px;
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 1rem;
	text-shadow: 1px 1px 5px #E8AA42;
	z-index: 10;
	transition: 0.8s all ease;

	@media screen and (max-height: 480px) {
		margin-top: -130px;
	}
`

export const NavbarContainer = styled.div`
	display: flex;
	justify-content: space-between;
	height: 80px;
	z-index: 1;
	width: 100%;
	padding: 0 24px;
	max-width: 1100px;

	@media screen and (max-width: 578px) {
		padding: 0 12px;
	}
`

export const NavLink = styled(Link)`
	position: relative;
	display: flex;
	align-items: center;
	margin-left: 24px;
	font-size: 1.5rem;
	font-weight: bold;
	text-decoration: none;
	color: #fff;
	justify-self: flex-start;
	cursor: pointer;

	@media screen and (max-width: 578px) {
		margin-left: 0;
	}
`

export const NavLogo = styled.img`
	height: 100%;
	width: 180px;
`

export const MobileIcon = styled.div`
	display: none;

	@media screen and (max-width: 768px) {
		display: block;
		position: absolute;
		top: 0;
		right: 0;
		transform: translate(-80%, 60%);
		font-size: 1.8rem;
		color: #fff;
		cursor: pointer;
	}
`

export const NavMenu = styled.ul`
	display: flex;
	align-content: center;
	list-style: none;
	text-align: center;
	margin-right: -22px;

	@media screen and (max-width: 768px) {
		display: none;
	}
`

export const NavItem = styled.li`
	height: 80px;
`

export const NavLinks = styled(Link)`
	position: relative;
	display: flex;
	align-items: center;
	padding: 0 1rem;
	height: 100%;
	color: #fff;
	text-decoration: none;
	cursor: pointer;
	transition: 0.2s all ease-in-out;

	&::after {
		content: '';
		position: absolute;
		bottom: 0;
		left: 0;
		height: 3px;
		width: 100%;
		background-color: #e8aa42;
		box-shadow: 1px 1px 10px #E8AA42;
		transform: scaleX(0);
		transform-origin: center;
		transition: transform 0.5s;
	}

	&:hover::after,
    &.active::after {
		transform: scaleX(1);
		transform-origin: center;
		box-shadow: 1px 1px 10px #E8AA42;
	}
`

export const NavBtn = styled.nav`
	display: flex;
	align-items: center;

	@media screen and (max-width: 768px) {
		display: none;
	}
`

export const NavBtnLink = styled(Link)`
	padding: 10px 22px;
	font-size: 16px;
	outline: none;
	border: none;
	border-radius: 50px;
	color: #010606;
	background: #e8aa42;
	text-decoration: none;
	white-space: nowrap;
	transition: all 0.2s ease-in-out;
	cursor: pointer;

	&:hover {
		transition: all 0.2s ease-in-out;
		background: #fff;
		color: #010606;
		box-shadow: 1px 1px 10px #E8AA42;

	}
`
