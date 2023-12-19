import styled from 'styled-components'
import {  MdArrowForward, MdArrowDownward } from 'react-icons/md'

export const HeroContainer = styled.div`
	position: relative;
	padding: 0 30px;
	height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
	background: #0c0c0c;
	z-index: 1;

	@media screen and (max-width: 768px) {
		padding: 0 12px;
	}
	@media screen and (max-height: 400px) {
		align-items: flex-end 
	}
`

export const HeroShadow = styled.div`
	position: absolute;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	background: linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.6) 100%),
		linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, transparent 100%);
	z-index: 2;
`

export const HeroBg = styled.div`
	position: absolute;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	width: 100%;
	height: 100%;
	overflow: hidden;
`

export const VideoBg = styled.video`
	width: 100%;
	height: 100%;
	-o-object-fit: cover;
	object-fit: cover;
	background: #232a34;
`

export const HeroContent = styled.div`
	position: absolute;
	padding: 8px 24px;
	display: flex;
	flex-direction: column;
	align-items: center;
	max-width: 1200px;
	text-shadow: 1px 1px 5px #E8AA42;
	z-index: 3;

	@media screen and (max-width: 420px) {
		padding: 8px 12px;
	}
`

export const HeroH1 = styled.h1`
	color: #fff;
	font-size: 48px;
	text-align: center;

	@media screen and (max-width: 768px) {
		font-size: 40px;
	}
	@media screen and (max-width: 578px) {
		font-size: 32px;
	}
	@media screen and (max-height: 480px) {
		font-size: 28px;
	}
`

export const HeroP = styled.p`
	margin-top: 24px;
	max-width: 600px;
	font-size: 24px;
	text-align: center;
	color: #fff;

	@media screen and (max-width: 768px) {
		font-size: 24px;
	}
	@media screen and (max-width: 578px) {
		font-size: 18px;
	}
	@media screen and (max-width: 420px) {
		font-size: 13px;
	}
	@media screen and (max-height: 480px) {
		margin-top: 10px;
	}
`

export const HeroBtnWrapper = styled.div`
	margin-top: 32px;
	display: flex;
	flex-direction: column;
	align-items: center;

	@media screen and (max-height: 480px) {
		margin-top: 10px;
	}
`

export const ArrowForward = styled(MdArrowForward)`
	margin-left: 8px;
	font-size: 23px;
`

export const ArrowDown = styled( MdArrowDownward)`
	margin-left: 8px;
	font-size: 23px;
`
