import React from 'react'
import { AboutContainer, AboutH1, AboutWrapper, AboutH2, AboutText, AboutHR, Strong } from './AboutElements'

const About = () => {
return (
<AboutContainer id='about'>
    <AboutH1>My Story...</AboutH1>
    <AboutWrapper>
        <AboutText>
            <AboutH2>Who am I?</AboutH2>
            My name is Mariusz Niedzielski and currently I am looking for vacancy as a Junior Front Developer. I've
            graduated <Strong>civil engineering</Strong> on the University of Zielona Góra with
            Bachelor’s degree.<br /><br /><AboutHR /><br />But that was mistake. I've made decision about what I want to do in my life
            when I was frivolous teenager. My friend said to me 'Let's study civil engineering!' And I was like 'Why
            not... 😉'. At the beginning of 2023, I started thinking about a change in my professional life. I did some
            research online and purchased a website development course on <Strong>Udemy</Strong> platform. And it was a
            good shot!<br /><br /><AboutHR /><br />
            First, I studied after my regular job. After few months I realized it brings me a lot of fun and this is
            what I want to do full-time . In July I said 'ADIÓS!' to my boss and started focusing strictly on
            bettering my skills in web development. The simplicity, along with multiple new possibilities and functionalities which brings the <Strong>ReactJS</Strong> library, caused the fact that I bond my future as a programmer especially with this technology.<br /><br /><AboutHR /><br />
            I love seeing the visual effect of my work written in code. Minimalistic and neat design with the emphasis on the details, well-matched colors of the graphic design with dynamic functionalities is what I like the most in creating websites. I tried to make this particular site was made in this style - slick and simple.<br /><br /><AboutHR /><br />
        </AboutText>
        <AboutText>
        <AboutH2>Personality & Skills</AboutH2>
            I'm ambitious, determined and communicative person. I have a keen eye for a <Strong>detail</Strong> and always do my job with passion. I appreciate a good sense of humor, yet professional in the team I work with. I also like challenges and am curious about new solutions.<br /><br /><AboutHR /><br />I can assure you, these are not empty words. When I was 23, I decided to make for England. I've spent there 4 years. It was a <Strong>School of life</Strong>. I've learned how to live on my own. I was taking every possible job (machine operator, chef, warehouse operative). It gaves me priceless life experiences and allowed me to improve my <Strong>English language</Strong> skills.<br /><br /><AboutHR /><br />
            If while reading you've gotten to this point - <Strong>thank you!</Strong>👍 I really appreciate that and hope you're not bored. Feel free to contact me, whether it’s about work or a casual conversation. I will be more than happy to answer any message I get. Hope to hear from you and <Strong>have a nice day!</Strong><br /><br /><AboutHR /><br />
        </AboutText>
    </AboutWrapper>
</AboutContainer>
)
}

export default About