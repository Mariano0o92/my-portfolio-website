import styled from "styled-components";
import { Link } from 'react-router-dom'

export const FooterContainer = styled.footer`
background-color: #101522;
color: #fff;
text-shadow: 1px 1px 5px #E8AA42;
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
align-items: stretch;
flex-wrap: wrap;

@media screen and (max-width: 820px) {
    padding-top: 32px;
}
`
export const FooterTitle = styled.h1`
margin-bottom: 16px;
font-size: 1.3rem;
width: 100%;
text-align: center;
`

export const FooterAvatar = styled.img`
width: 150px;
height: 150px;
border-radius: 50%;
`

export const FooterLinksWrapper = styled.div`
display: flex;
`

export const FooterLinkItems = styled.div`
margin: 16px;
display: flex;
flex-direction: column;
align-items: flex-start;
justify-content: center;
text-align: left;
box-sizing: border-box;
color: #fff;

@media screen and (max-width: 420px) {
   margin: 0;
   padding: 10px;
   width: 100%;
}
`

export const FooterLink = styled.a`
font-size: 1rem;
margin-bottom: 0.5rem;
color: #fff;
text-decoration: none;
transition: 0.3s ease-out;

&:hover {
    color: #E8AA42;
}
`
export const FooterFormWrapper = styled.div`
display: flex;
`

export const FooterFormItems = styled.div`
margin: 16px;
display: flex;
flex-direction: column;
align-items: flex-start;
justify-content: space-between;
text-align: left;
box-sizing: border-box;
color: #fff;

@media screen and (max-width: 420px) {
   margin: 0;
   padding: 10px;
   width: 100%;
}
`


export const FooterForm = styled.form`
display: grid;
grid-template-columns: 1fr 1fr;
gap: 6px;
font-size: 1rem;
margin-bottom: 0.5rem;
color: #fff;
text-decoration: none;
transition: 0.3s ease-out;

@media screen and (max-width: 500px) {
grid-template-columns: 1fr;
}
`

export const FooterFormLabel = styled.label`
grid-column: 1 /2;
`
export const FooterFormInput = styled.input`
grid-column: 1 /2;

&:focus {
    outline: 1px solid #E8AA42;
}
`
export const FooterFormTextAreaLabel = styled.label`
grid-column: 2 /3;
grid-row: 1 / 2;

@media screen and (max-width: 500px) {
    grid-column: 1 /2;
    grid-row: 8 / 9;
}
`
export const FooterFormTextarea = styled.textarea`
grid-column: 2 /3;
grid-row: 2 / 7;
min-width: 260px;
min-height: 130px;
max-width: 50vw;
resize: vertical, horizontal;

@media screen and (max-width: 500px) {
    grid-column: 1 /2;
    grid-row: 9 / 13;
    max-width: 90vw;
}

&:focus {
    outline: 1px solid #E8AA42;
}
`
export const FooterFormButton = styled.button`
grid-column: 2 /3;
margin: 0 auto;
padding: 5px 10px;
width: 50%;
text-decoration: none;
color: #010606;
background-color: #E8AA42;
border-radius: 50px;
border: none;
cursor: pointer;
transition: all 0.4s ease-in-out;


@media screen and (max-width: 500px) {
    grid-column: 1 /2;
    grid-row: 13 / 14;
}
&:hover {
background-color: #fff;
color: #010606;
box-shadow: 1px 1px 10px #fff;
}
`

export const SocialMedia = styled.section`
max-width: 1000px;
width: 100%;
text-align: center;
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
color: #fff;

@media screen and (max-width: 430px) {
    span {
        display: block;
    }
}
`


