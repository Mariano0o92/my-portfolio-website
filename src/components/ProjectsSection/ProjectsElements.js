import styled from 'styled-components'

export const ProjectsContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	min-height: 100vh;
	background: #101522;
	text-shadow: 1px 1px 5px #e8aa42;
`

export const ProjectsWrapper = styled.div`
	margin: 10px auto;
	padding: 0 50px;
	display: grid;
	grid-template-columns: 1fr 1fr;
	grid-gap: 16px;
	align-content: center;
	min-height: 80vh;
	max-width: 1000px;

	@media screen and (max-width: 665px) {
		padding: 0 20px;
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
	}

	@media screen and (max-width: 480px) {
		padding: 0 20px;
	}
	@media screen and (max-height: 500px) {
		display: flex;
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
	padding: 10px;
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
	align-items: center;
	border-radius: 15px;
	text-align: center;
	background-color: #e8aa42;
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
	height: 70vh;
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
	margin: 20px 0;
	font-size: 2.5rem;
	color: #fff;

	@media screen and (max-width: 576px) {
		font-size: 2rem;
	}
`

export const ProjectsH2 = styled.h2`
	font-size: 1.6rem;
	margin-bottom: 10px;

	@media screen and (max-width: 576px) {
		font-size: 1.4rem;
	}
	@media screen and (max-height: 400px) {
		font-size: 1rem;
	}

	@media screen and (max-width: 480px) {
		font-size: 1rem;
	}
`

export const ProjectsP = styled.p`
	font-size: 1rem;
	text-align: center;

	@media screen and (max-width: 576px) {
		font-size: 0.8rem;
	}
	@media screen and (max-height: 400px) {
		font-size: 0.5rem;
	}
`

export const ProjectLink = styled.a`
	padding: 10px 25px;
	font-size: 1.2rem;
	text-decoration: none;
	color: #fff;
	background-color: #010606;
	border-radius: 50px;
	transition: all 0.4s ease-in-out;

	
	@media screen and (max-width: 576px) {
		font-size: 1rem;
	}
	@media screen and (max-width: 480px) {
		font-size: 0.7rem;
	}
	@media screen and (max-height: 400px) {
		font-size: 0.5rem;
	}

	&:hover {
		background-color: #fff;
		color: #010606;
		box-shadow: 1px 1px 10px #fff;
	}
`
