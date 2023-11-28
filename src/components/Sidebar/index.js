import React from 'react'
import { SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink, SideBtnWrap, SidebarRoute } from './SidebarElements'

const Sidebar = ({ isOpen, toggle }) => {
	return (
		<SidebarContainer $isOpen={isOpen} onClick={toggle} >
			<Icon onClick={toggle} >
				<CloseIcon />
			</Icon>
			<SidebarWrapper>
				<SidebarMenu>
					<SidebarLink to='about' onClick={toggle} smooth={true} duration={500} spy={true} exact='true' offset={-80}>About</SidebarLink>
					<SidebarLink to='skills' onClick={toggle} smooth={true} duration={500} spy={true} exact='true' offset={-80}>Skills</SidebarLink>
					<SidebarLink to='projects' onClick={toggle} smooth={true} duration={500} spy={true} exact='true' offset={-80}>Projects</SidebarLink>
					<SidebarLink to='docs' onClick={toggle} smooth={true} duration={500} spy={true} exact='true' offset={-80}>Docs</SidebarLink>
				</SidebarMenu>
                <SideBtnWrap>
                    <SidebarRoute to='footer' onClick={toggle}>Contact Me</SidebarRoute>
                </SideBtnWrap>
			</SidebarWrapper>
		</SidebarContainer>
	)
}

export default Sidebar
