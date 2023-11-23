import React, { useState } from 'react'
import Video from '../../videos/video.mp4'
import {
	HeroContainer,
	HeroBg,
	VideoBg,
	HeroContent,
	HeroH1,
	HeroP,
	HeroBtnWrapper,
	ArrowForward,
	ArrowRight,
    HeroShadow,
} from './HeroElements'
import { Button } from '../ButtonElement'

const HeroSection = () => {
	const [hover, setHover] = useState(false)

	const onHover = () => {
		setHover(!hover)
	}

	return (
		<HeroContainer id='home'>
			<HeroBg>
				<VideoBg autoPlay loop muted src={Video} type='video/mp4' />
			</HeroBg>
            <HeroShadow></HeroShadow>
			<HeroContent>
				<HeroH1>Hi there, I'm Mariusz</HeroH1>
				<HeroP>Front-end developer.<br />I bring innovative ideas to life<br /> and I love it! </HeroP>
				<HeroBtnWrapper>
					<Button to='about' onMouseEnter={onHover} onMouseLeave={onHover} primary='true' dark='true' smooth={true} duration={500} spy={true} exact='true' offset={-80}>Explore{hover ? <ArrowForward /> : <ArrowRight />}</Button>
				</HeroBtnWrapper>
			</HeroContent>
		</HeroContainer>
	)
}

export default HeroSection
