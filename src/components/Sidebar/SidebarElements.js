import styled from "styled-components";
import { Link } from 'react-scroll'
import { FaTimes } from "react-icons/fa";

export const SidebarContainer = styled.aside`
position: fixed;
top: 0;
left: 0;
display: grid;
align-items: center;
width: 100%;
height: 100%;
background: #0d0d0d;
text-shadow: 1px 1px 5px #E8AA42;
transition: 0.3s ease-in-out;
opacity: ${({ $isOpen }) => ($isOpen ? '1' : '0')};
top: ${({ $isOpen }) => ($isOpen ? '0' : '-100%')};
z-index: 999;
`

export const CloseIcon = styled(FaTimes)`
color: #fff;
`

export const Icon = styled.div`
position: absolute;
top: 1.2rem;
right: 1.5rem;
background: transparent;
font-size: 2rem;
outline: none;
cursor: pointer;
`

export const SidebarWrapper = styled.div`
color: #fff;
`

export const SidebarMenu = styled.ul`
display: grid;
grid-template-columns: 1fr;
grid-template-rows: repeat(4, 10vh);
gap: 1vh;
text-align: center;
`

export const SidebarLink = styled(Link)`
display: flex;
align-items: center;
justify-content: center;
font-size: 1.5rem;
text-decoration: none;
list-style: none;
transition: 0.2s ease-in-out;
color: #fff;
cursor: pointer;

&:hover {
    color: #E8AA42;
    transition: 0.2s ease-in-out;
}
`

export const SideBtnWrap = styled.div`
display: flex;
justify-content: center;
`

export const SidebarRoute = styled(Link)`
padding: 16px 64px;
font-size: 16px;
border: none;
border-radius: 50px;
background: #E8AA42;
color: #010606;
white-space: nowrap;
text-decoration: none;
outline: none;
cursor: pointer;
transition: all 0.2s ease-in-out;

&:hover {
    background: #fff;
    color: #010606;
    transition: all 0.2s ease-in-out;

}
`
