import React from 'react'
import { AboutContainer, AboutH1, AboutWrapper, AboutH2, AboutText, AboutHR, Strong } from './AboutElements'

const About = () => {
	return (
		<AboutContainer id='about'>
			<AboutH1>My Story...</AboutH1>
			<AboutWrapper>
				<AboutText>
					<AboutH2>Who am I?</AboutH2>
					My name is Mariusz Niedzielski and I am currently looking for a vacancy as a Junior Frontend Developer. I
					graduated from University of Zielona Góra with bachelor's degree in <Strong>civil engineering.</Strong>
					<br />
					<br />
					<AboutHR />
					<br />
					Unfortunately, decision about this course turned out to be a huge mistake. This is what happens when life
					choices are made by a frivolous teenager. I decided to go for Civil Engineering over IT at my friends'
					suggestion and it still haunts me to this day. At the beggining of 2023 I started to think about a change in
					my professional life. As this have been on my mind for a long time, I purchased a website development course
					on <Strong>Udemy</Strong> platform. And it was a good shot!
					<br />
					<br />
					<AboutHR />
					<br />
					At first, I studied in the afternoons and on the weekends, but after a few months I realized it brings me a
					lot of fun and this is what I want to do full-time. In June I said „Adiós" to my boss and focused strictly on
					bettering my skills in web development putting all my eggs in one basket. The simplicity of{' '}
					<Strong>ReactJS</Strong> library along with the number of new functionalities it offers caused the fact that I
					bond my future career as a programmer especially with this technology.
					<br />
					<br />
					<AboutHR />
					<br />
					I love seeing the visual effect of my work. Minimalistic and neat project with the emphasis on details,
					well-matched colours of the graphic design with dynamic functionalities and full responsiveness for better
					user experience is what I value the most in creating websites. I tried to make this particular site in this
					style - slick and simple.
					<br />
					<br />
					<AboutHR />
					<br />
				</AboutText>
				<AboutText>
					<AboutH2>Personality & Skills</AboutH2>
					I'm ambitious, determined and communicative person. I have an eye for <Strong>detail</Strong> and always do my
					job with passion. I value a good sense of humor, but also a professionalism within the team. I enjoy taking up
					new challenges and I am curious about new solutions.
					<br />
					<br />
					<AboutHR />
					<br />
					And these are not just empty words. At the age of 23, I decided to move to the UK. I took every possible job
					while trying to figure out what I want to do. It was a <Strong>School of life</Strong>. Four years there were
					challenging, yet rewarding over time. It was a priceless life experience that helped me to improve my
					<Strong>English skills</Strong> and showed me that only the sky is the limit 💪.
					<br />
					<br />
					<AboutHR />
					<br />
					If you got to this point - <Strong>thank you!</Strong>👍 I really appreciate that 😉. Feel free to contact me, whether it’s about work or a casual conversation. I will be more
					than happy to answer any message I get. Hope to hear from you and <Strong>have a nice day!</Strong>
					<br />
					<br />
					<AboutHR />
					<br />
				</AboutText>
			</AboutWrapper>
		</AboutContainer>
	)
}

export default About
