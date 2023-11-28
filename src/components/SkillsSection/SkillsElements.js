import styled from "styled-components";

export const SkillsContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
min-height: 80vh;
color: #fff;
background: #010606;
text-shadow: 1px 1px 5px #e8aa42;

@media screen and (max-width: 900px) {
   min-height: 100vh;
	}
`

export const SkillsH1 = styled.h1`
margin: 20px 0;
font-size: 2.5rem;
text-align: center;

@media screen and (max-width: 900px) {
    font-size: 2rem;
	}
`

export const SkillsWrapper = styled.div`
margin-bottom: 10px;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
width: 100%;
max-width: 1100px;

@media screen and (max-width: 768px) {
    flex-direction: row;
	}
`

export const SkillsRow = styled.div`
display: flex;
align-items: center;
justify-content: center;
margin: 20px;
width: 100%;
max-width: 1100px;

@media screen and (max-width: 768px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin: 5px;
    width: 40%;
    gap: 10px;
	}

@media screen and (max-width: 430px) {
    display: grid;
    grid-template-columns: 1fr;
    margin: 5px;
    width: 35%;
    gap: 10px;
	}
`

export const SkillsElement = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
margin: 20px;
padding: 10px 0;
width: 100%;
height: 100%;
border: 2px solid #E8AA42;
border-radius: 10px;
transition: 0.3s all ease-out !important;

@media screen and (max-width: 768px) {
    margin: 0;
	}

@media screen and (max-width: 430px) {
    height: 100px;
	}

&:hover {
    box-shadow: 0 0 25px #E8AA42;
}
`

export const Heading = styled.h2`
margin-bottom: 10px;
font-size: 1rem;

@media screen and (max-width: 900px) {
    font-size: 0.8rem;
	}
`


export const ImgWrap = styled.div`
width: 80%;
height: 80%;

@media screen and (max-width: 430px) {
    width: 50%;
    height: 50%;
	}
`

export const Img = styled.img`
width: 100%;
height: 100%;
`