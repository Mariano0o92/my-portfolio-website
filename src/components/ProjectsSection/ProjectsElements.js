import styled from 'styled-components'

export const ProjectsContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	height: 100vh;
	background: #010606;
	text-shadow: 1px 1px 5px #E8AA42;

`

export const ProjectsWrapper = styled.div`
	margin: 0 auto;
	padding: 0 50px;
	display: grid;
	grid-template-columns: 1fr 1fr 1fr;
	grid-gap: 16px;
	align-items: center;
	max-width: 1000px;

	@media screen and (max-width: 1000px) {
		grid-template-columns: 1fr 1fr;
	}

	@media screen and (max-width: 768px) {
		padding: 0 20px;
		grid-template-columns: 1fr;
	}
`

export const ProjectsVideo = styled.video`
	height: 100%;
	width: 100%;
	-o-object-fit: cover;
	object-fit: cover;
	border-radius: 10px;
	opacity: 1;
	transform: rotateY(0deg);
	transition: transform 0.8s, opacity 0.8s;
	
`
export const ProjectsText = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	bottom: 0;
	right: 0;
	padding: 30px;
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	align-items: center;
	border-radius: 15px;
	text-align: center;
	background-color: #E8AA42;
	opacity: 0;
	transform: rotateY(-180deg);
	transition: transform 0.8s, opacity 0.8s;
`
export const ProjectsCard = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	border-radius: 10px;
	box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
	perspective: 500px;

  &:hover ${ProjectsVideo} {
    opacity: 0;
	transform: rotateY(-180deg);
  }

  &:hover ${ProjectsText} {
    opacity: 1;
    transform: rotateY(0deg);
  }
	`


export const ProjectsH1 = styled.h1`
	font-size: 2.5rem;
	color: #fff;
	margin-bottom: 64px;

	@media screen and (max-width: 480px) {
		font-size: 2rem;
	}
`

export const ProjectsH2 = styled.h2`
	font-size: 1.8rem;
	margin-bottom: 10px;
`

export const ProjectsP = styled.p`
	font-size: 1rem;
	text-align: center;
`

export const ProjectLink = styled.a`
padding: 10px 25px;
font-size: 1.2rem;
text-decoration: none;
color: #fff;
background-color: #010606;
border-radius: 50px;
transition: all 0.4s ease-in-out;

&:hover {
background-color: #fff;
color: #010606;
box-shadow: 1px 1px 10px #fff;
}
`
