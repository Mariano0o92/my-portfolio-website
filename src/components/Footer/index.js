import React from 'react'
import { FaGithub, FaLinkedin, FaPhoneAlt, FaRegEnvelope } from 'react-icons/fa'
import {
	FooterContainer,
	FooterAvatar,
	FooterWrap,
	FooterLinksContainer,
	FooterTitle,
	FooterLinksWrapper,
	FooterLinkItems,
	FooterLink,
	FooterFormWrapper,
	FooterFormItems,
	SocialMedia,
	SocialMediaWrap,
	SocialLogo,
	WebsiteRights
} from './FooterElements'
import { animateScroll as scroll } from 'react-scroll'
import avatar from '../../images/myAvatar.svg'
import ContactForm from './FooterForm.js'

const Footer = () => {
	const toggleHome = () => {
		scroll.scrollToTop()
	}
	return (
		<FooterContainer id='footer' >
			<FooterWrap>
				<FooterLinksContainer>
					<FooterTitle>Say Hello!</FooterTitle>
					<FooterLinksWrapper>
						<FooterLinkItems>
					<FooterAvatar src={avatar} />
						</FooterLinkItems>
					</FooterLinksWrapper>
					<FooterLinksWrapper>
						<FooterLinkItems>
							<FooterLink href='tel:+48792241724'><FaPhoneAlt /> +48 792-241-724</FooterLink>
							<FooterLink href='mailto:mariuszniedzielski@mailfence.com?subject=Hi Mariusz!' target='_blank'><FaRegEnvelope /> mariuszniedzielski@mailfence.com</FooterLink>
							<FooterLink href='https://github.com/Mariano0o92' target='_blank' aria-label='GitHub'><FaGithub /> GitHub</FooterLink>
							<FooterLink href='https://www.linkedin.com/in/mariusz-niedzielski-226868162/' target='_blank' aria-label='LinkedIn'><FaLinkedin /> LinkedIn</FooterLink>
						</FooterLinkItems>
						</FooterLinksWrapper>
						<FooterFormWrapper>
						<FooterFormItems>
							<ContactForm />
						</FooterFormItems>
						</FooterFormWrapper>
					
				</FooterLinksContainer>
				<SocialMedia>
					<SocialMediaWrap>
						<SocialLogo to='/' onClick={toggleHome}>
							mariusz niedzielski
						</SocialLogo>
						<WebsiteRights>Mariusz Niedzielski&copy; {new Date().getFullYear()} <span>All Rights Reserved</span></WebsiteRights>
					</SocialMediaWrap>
				</SocialMedia>
			</FooterWrap>
		</FooterContainer>
	)
}

export default Footer
