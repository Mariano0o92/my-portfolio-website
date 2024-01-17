import React from 'react'
import {
	ProjectsContainer,
	ProjectsH1,
	ProjectsWrapper,
	ProjectsCard,
	ProjectsVideo,
	ProjectsText,
	ProjectsH2,
	ProjectsP,
    ProjectLink
} from './ProjectsElements'
import Project1 from '../../videos/project1.mp4'
import Project2 from '../../videos/project2.mp4'
import Project3 from '../../videos/project3.mp4'
import Project4 from '../../videos/project4.mp4'

const Projects = () => {
	return (
		<ProjectsContainer id='projects'>
			<ProjectsH1>My Projects</ProjectsH1>
			<ProjectsWrapper>
				<ProjectsCard>
					<ProjectsVideo autoPlay loop muted src={Project1} type='video/mp4' />
					<ProjectsText>
						<ProjectsH2>what-a-strike</ProjectsH2>
						<ProjectsP>
							As a football fan, I've created a simple app displaying results and standings of top five leagues in the
							world.
						</ProjectsP>
						<ProjectLink href='https://what-a-strike.netlify.app/' target='_blank'>Launch</ProjectLink>
					</ProjectsText>
				</ProjectsCard>
				<ProjectsCard>
					<ProjectsVideo autoPlay loop muted src={Project2} type='video/mp4' />
					<ProjectsText>
						<ProjectsH2>the-creeptos</ProjectsH2>
						<ProjectsP>
							I'm also blockchain technology enthusiast. This app displays current rates of top cryptocurrencies.
						</ProjectsP>
                        <ProjectLink href='https://the-creeptos.netlify.app/' target='_blank'>Launch</ProjectLink>
					</ProjectsText>
				</ProjectsCard>
				<ProjectsCard>
					<ProjectsVideo autoPlay loop muted src={Project3} type='video/mp4' />
					<ProjectsText>
						<ProjectsH2>fiorka-the-doggo</ProjectsH2>
						<ProjectsP>
						Simple and funny website about my dog using ReactJS, Framer Motion animation library, Figma and parallax effect.
						</ProjectsP>
                        <ProjectLink href='https://fiorka-the-doggo.netlify.app/' target='_blank'>Launch</ProjectLink>
					</ProjectsText>
				</ProjectsCard>
				<ProjectsCard>
					<ProjectsVideo autoPlay loop muted src={Project4} type='video/mp4' />
					<ProjectsText>
						<ProjectsH2>my-money-mate</ProjectsH2>
						<ProjectsP>It's a full stack MERN application tracking your incomes and expenses.</ProjectsP>
                        <ProjectLink href='https://my-money-mate.netlify.app/' target='_blank'>Launch</ProjectLink>
					</ProjectsText>
				</ProjectsCard>
			</ProjectsWrapper>
		</ProjectsContainer>
	)
}

export default Projects
