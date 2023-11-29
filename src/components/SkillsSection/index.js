import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { SkillsContainer, SkillsWrapper, SkillsRow, SkillsH1, SkillsElement, Heading, ImgWrap, Img } from './SkillsElements'
import html5Logo from '../../images/html5Logo.svg'
import css3Logo from '../../images/css3Logo.svg'
import sassLogo from '../../images/sassLogo.svg'
import javascriptLogo from '../../images/javascriptLogo.svg'
import reactLogo from '../../images/reactLogo.svg'
import bootstrapLogo from '../../images/bootstrapLogo.svg'
import githubLogo from '../../images/githubLogo.svg'
import npmLogo from '../../images/npmLogo.svg'
import vscodeLogo from '../../images/vscodeLogo.svg'
import responsiveLogo from '../../images/responsiveLogo.svg'
import expressLogo from '../../images/expressLogo.svg'
import mongodbLogo from '../../images/mongodbLogo.svg'

const SkillsSection = () => {
	useEffect(() => {
		AOS.init({ duration: 1000, once: true })
	}, [])

	return (
		<>
			<SkillsContainer id='skills'>
				<SkillsH1>Frameworks, Libraries & Technologies</SkillsH1>
				<SkillsWrapper>
				<SkillsRow>
					<SkillsElement data-aos="zoom-out-down" data-aos-delay='1200'>
						<Heading>HTML5</Heading>
						<ImgWrap>
							<Img src={html5Logo} />
						</ImgWrap>
					</SkillsElement>
					<SkillsElement data-aos="zoom-out-down" data-aos-delay='1000'>
						<Heading>CSS3</Heading>
						<ImgWrap>
							<Img src={css3Logo} />
						</ImgWrap>
					</SkillsElement>
					<SkillsElement data-aos="zoom-out-down" data-aos-delay='800'>
						<Heading>SASS</Heading>
						<ImgWrap>
							<Img src={sassLogo} />
						</ImgWrap>
					</SkillsElement>
					<SkillsElement data-aos="zoom-out-down" data-aos-delay='600'>
						<Heading>JavaScript</Heading>
						<ImgWrap>
							<Img src={javascriptLogo} />
						</ImgWrap>
					</SkillsElement>
					<SkillsElement data-aos="zoom-out-down" data-aos-delay='400'>
						<Heading>ReactJS</Heading>
						<ImgWrap>
							<Img src={reactLogo} />
						</ImgWrap>
					</SkillsElement>
					<SkillsElement data-aos="zoom-out-down" data-aos-delay='200'>
						<Heading>Bootstrap</Heading>
						<ImgWrap>
							<Img src={bootstrapLogo} />
						</ImgWrap>
					</SkillsElement>
				</SkillsRow>
				<SkillsRow>
					<SkillsElement data-aos="zoom-out-down" data-aos-delay='1200'>
						<Heading>GitHub</Heading>
						<ImgWrap>
							<Img src={githubLogo} />
						</ImgWrap>
					</SkillsElement>
					<SkillsElement data-aos="zoom-out-down" data-aos-delay='1000'>
						<Heading>NPM</Heading>
						<ImgWrap>
							<Img src={npmLogo} />
						</ImgWrap>
					</SkillsElement>
					<SkillsElement data-aos="zoom-out-down" data-aos-delay='800'>
						<Heading>VSCode</Heading>
						<ImgWrap>
							<Img src={vscodeLogo} />
						</ImgWrap>
					</SkillsElement>
					<SkillsElement data-aos="zoom-out-down" data-aos-delay='600'>
						<Heading>RWD</Heading>
						<ImgWrap>
							<Img src={responsiveLogo} />
						</ImgWrap>
					</SkillsElement>
					<SkillsElement data-aos="zoom-out-down" data-aos-delay='400'>
						<Heading>ExpressJS</Heading>
						<ImgWrap>
							<Img src={expressLogo} />
						</ImgWrap>
					</SkillsElement>
					<SkillsElement data-aos="zoom-out-down" data-aos-delay='400'>
						<Heading>MongoDB</Heading>
						<ImgWrap>
							<Img src={mongodbLogo} />
						</ImgWrap>
					</SkillsElement>
				</SkillsRow>
				</SkillsWrapper>
			</SkillsContainer>
		</>
	)
}

export default SkillsSection
