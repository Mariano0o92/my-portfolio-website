import styled from "styled-components";
import { Link } from 'react-router-dom'

export const FooterContainer = styled.footer`
background-color: #101522;
`
export const FooterWrap = styled.div`
padding: 48px 24px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
max-width: 1100px;
margin: 0 auto;
`

export const FooterLinksContainer = styled.div`
display: flex;
justify-content: center;

@media screen and (max-width: 820px) {
    padding-top: 32px;
}
`

export const FooterLinksWrapper = styled.div`
display: flex;

@media screen and (max-width: 820px) {
    flex-direction: column;
}
`

export const FooterLinkItems = styled.div`
margin: 16px;
display: flex;
flex-direction: column;
align-items: flex-start;
text-align: left;
width: 160px;
box-sizing: border-box;
color: #fff;

@media screen and (max-width: 420px) {
   margin: 0;
   padding: 10px;
   width: 100%;
}
`

export const FooterLinkTitle = styled.h1`
margin-bottom: 16px;
font-size: 14px;
`

export const FooterLink = styled(Link)`
font-size: 14px;
margin-bottom: 0.5rem;
color: #fff;
text-decoration: none;
transition: 0.3s ease-out;

&:hover {
    color: #E8AA42;
}
`

export const SocialMedia = styled.section`
max-width: 1000px;
width: 100%;
`

export const SocialMediaWrap = styled.div`
margin: 40px auto 0 auto;
display: flex;
justify-content: space-between;
align-items: center;
max-width: 1100px;

@media screen and (max-width: 820px) {
    flex-direction: column;
}
`

export const SocialLogo = styled(Link)`
margin-bottom: 16px;
display: flex;
justify-self: start;
align-items: center;
font-size: 1.5rem;
font-weight: bold;
color: #E8AA42;
text-decoration: none;
text-transform: uppercase;
cursor: pointer;
`

export const WebsiteRights = styled.small`
margin-bottom: 16px;
color: #fff;
`

export const SocialIcons = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
width: 240px;
`

export const SocialIconLink = styled.a`
font-size: 24px;
color: #fff;
transition: 0.3s ease-out;

&:hover {
    color: #E8AA42;
}
`


