import React from 'react'
import { FaFacebook, FaInstagram, FaYoutube, FaTwitter } from 'react-icons/fa'
import {
	FooterContainer,
	FooterAvatar,
	FooterWrap,
	FooterLinksContainer,
	FooterLinksWrapper,
	FooterLinkItems,
	FooterLinkTitle,
	FooterLink,
	SocialMedia,
	SocialMediaWrap,
	SocialLogo,
	WebsiteRights,
	SocialIcons,
	SocialIconLink,
} from './FooterElements'
import { animateScroll as scroll } from 'react-scroll'
import avatar from '../../images/myAvatar.svg'

const Footer = () => {
	const toggleHome = () => {
		scroll.scrollToTop()
	}
	return (
		<FooterContainer>
			<FooterWrap>
				<FooterLinksContainer>
					{/* <FooterAvatar src={avatar} /> */}
					<FooterLinksWrapper>
						<FooterLinkItems>
							<FooterLinkTitle>About Us</FooterLinkTitle>
							<FooterLink to='/signin'>How it works</FooterLink>
							<FooterLink to='/signin'>Testimonials</FooterLink>
							<FooterLink to='/signin'>Careers</FooterLink>
							<FooterLink to='/signin'>Investors</FooterLink>
							<FooterLink to='/signin'>Terms of Service</FooterLink>
						</FooterLinkItems>
						<FooterLinkItems>
							<FooterLinkTitle>About Us</FooterLinkTitle>
							<FooterLink to='/signin'>How it works</FooterLink>
							<FooterLink to='/signin'>Testimonials</FooterLink>
							<FooterLink to='/signin'>Careers</FooterLink>
							<FooterLink to='/signin'>Investors</FooterLink>
							<FooterLink to='/signin'>Terms of Service</FooterLink>
						</FooterLinkItems>
					</FooterLinksWrapper>
					<FooterLinksWrapper>
						<FooterLinkItems>
							<FooterLinkTitle>About Us</FooterLinkTitle>
							<FooterLink to='/signin'>How it works</FooterLink>
							<FooterLink to='/signin'>Testimonials</FooterLink>
							<FooterLink to='/signin'>Careers</FooterLink>
							<FooterLink to='/signin'>Investors</FooterLink>
							<FooterLink to='/signin'>Terms of Service</FooterLink>
						</FooterLinkItems>
						<FooterLinkItems>
							<FooterLinkTitle>About Us</FooterLinkTitle>
							<FooterLink to='/signin'>How it works</FooterLink>
							<FooterLink to='/signin'>Testimonials</FooterLink>
							<FooterLink to='/signin'>Careers</FooterLink>
							<FooterLink to='/signin'>Investors</FooterLink>
							<FooterLink to='/signin'>Terms of Service</FooterLink>
						</FooterLinkItems>
					</FooterLinksWrapper>
				</FooterLinksContainer>
				<SocialMedia>
					<SocialMediaWrap>
						<SocialLogo to='/' onClick={toggleHome}>
							mariusz niedzielski
						</SocialLogo>
						<WebsiteRights>Mariusz Niedzielski&copy; {new Date().getFullYear()} </WebsiteRights>
						<SocialIcons>
							<SocialIconLink href='/' target='_blank' aria-label='Facebook'>
								<FaFacebook />
							</SocialIconLink>
							<SocialIconLink href='/' target='_blank' aria-label='Instagram'>
								<FaInstagram />
							</SocialIconLink>
							<SocialIconLink href='/' target='_blank' aria-label='Youtube'>
								<FaYoutube />
							</SocialIconLink>
							<SocialIconLink href='//www.twitter.com' target='_blank' aria-label='Twitter'>
								<FaTwitter />
							</SocialIconLink>
						</SocialIcons>
					</SocialMediaWrap>
				</SocialMedia>
			</FooterWrap>
		</FooterContainer>
	)
}

export default Footer
