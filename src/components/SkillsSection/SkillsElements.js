import styled from "styled-components";

export const SkillsContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
height: 100vh;
color: #fff;
background: #010606;
text-shadow: 1px 1px 5px #e8aa42;

`

export const SkillsH1 = styled.h1`
font-size: 2.5rem;
margin-bottom: 20px;
`

export const SkillsRow = styled.div`
display: flex;
align-items: center;
justify-content: center;
width: 100vw;
max-width: 1100px;
`

export const SkillsElement = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
margin: 20px;
width: 100%;
border: 2px solid #E8AA42;
border-radius: 10px;
transition: 0.3s all ease-out !important;

&:hover {
    box-shadow: 0 0 25px #E8AA42;
}
`

export const Heading = styled.h2`
margin-bottom: 24px;
font-size: 1.3rem;

@media screen and (max-width: 480px) {
    font-size: 32px;
}
`


export const ImgWrap = styled.div`

`

export const Img = styled.img`
width: 100px;
height: 100px;
margin-bottom: 10px;
padding-right: 0;
`