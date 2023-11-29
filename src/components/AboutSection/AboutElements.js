import styled from 'styled-components'

export const AboutContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	min-height: 100vh;
	background: #101522;
`
export const AboutH1 = styled.h1`
	margin: 20px 0;
	font-size: 2.5rem;
	color: #fff;
	text-shadow: 1px 1px 5px #e8aa42;

	@media screen and (max-width: 576px) {
		font-size: 2rem;
	}
`
export const AboutWrapper = styled.div`
	display: flex;
`

export const AboutH2 = styled.h2`
	font-size: 1.5rem;
`

export const AboutText = styled.div`
	font-size: 1rem;
	text-align: left;
	margin: 10px;
	color: #fff;
`

export const AboutHR = styled.hr`
	opacity: 0.3;
`
