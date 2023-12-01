import styled from 'styled-components'

export const DocsContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	min-height: 100vh;
	background: #010606;
`
export const DocsH1 = styled.h1`
	margin: 20px 0;
	font-size: 2.5rem;
	color: #fff;
	text-shadow: 1px 1px 5px #e8aa42;

	@media screen and (max-width: 576px) {
		font-size: 2rem;
	}
`
export const DocsWrapper = styled.div`
	display: flex;
	flex-direction: column;
	max-width: 1100px;
`
export const DocsText = styled.div`
	margin: 20px;
	font-size: 1rem;
	color: #010606;
`
export const DocsH2 = styled.h2`
	margin-bottom: 10px;
	font-size: 1.5rem;
	text-align: center;
	text-transform: uppercase;
	color: #e8aa42;
`
export const DocsImgContainer = styled.div`
    width: 200px;
    height: 200px;
    `

export const DocsImg = styled.img`
	width: 100%;
	height: 100%;
    `
export const DocsLink = styled.a`
margin-bottom: 10px;
display: block;
font-size: 1.2rem;
text-align: center;
text-decoration: none;
background-color: #e8aa42;
color: #010606;
border-radius: 20px;
cursor: pointer;
transition: all 0.2s ease-in-out;

&:hover {
    background: #fff;
    box-shadow: 1px 1px 10px #E8AA42;
}
`
