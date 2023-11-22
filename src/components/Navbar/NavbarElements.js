import styled from 'styled-components'
import { Link as LinkR } from 'react-router-dom'
import { Link as LinkS } from 'react-scroll'

export const Nav = styled.nav`
position: sticky;
top: 0;
background: #000;
height: 80px;
margin-top: -80px;
display: flex;
justify-content: center;
align-items: center;
font-size: 1rem;
z-index: 10;

@media screen and (max-width: 960px) {
    transition: 0.8s all ease;
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
`

export const NavLogo = styled(LinkR)`
display: flex;
align-items: center;
margin-left: 24px;
font-size: 1.5rem;
font-weight: bold;
text-decoration: none;
color: #fff;
justify-self: flex-start;
cursor: pointer;
`

export const MobileIcon = styled.div`
display: none;

@media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
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

export const NavLinks = styled(LinkS)`
    display: flex;
    align-items: center;
    padding: 0 1rem;
    height: 100%;
    color: #fff;
    text-decoration: none;
    cursor: pointer;

    &.active {
        border-bottom: 3px solid #01bf71;
    }
`

export const NavBtn = styled.nav`
display: flex;
align-items: center;

@media screen and (max-width: 768px){
    display: none;
}
`

export const NavBtnLink = styled(LinkR)`
padding: 10px 22px;
font-size: 16px;
outline: none;
border: none;
border-radius: 50px;
color: #010606;
background: #01bf71;
text-decoration: none;
white-space: nowrap;
transition: all 0.2s ease-in-out;
cursor: pointer;

&:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #010606;
}
`