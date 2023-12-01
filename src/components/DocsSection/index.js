import React from 'react';
import { DocsContainer, DocsH1, DocsWrapper, DocsText, DocsH2, DocsImgContainer, DocsImg, DocsLink } from './DocsElements';
import Resume from '../../images/resume.svg';
import Diploma from '../../images/diploma.svg';
import cvENG from './english_CV.pdf'
import cvPL from './polish_CV.pdf'
import diplomaENG from './english_Diploma.pdf'
import diplomaPL from './polish_Diploma.pdf'

const Docs = () => {
  return (
    <DocsContainer id='docs'>
      <DocsH1>Documents</DocsH1>
      <DocsWrapper>
        <DocsText>
          <DocsH2>Resume</DocsH2>
          <DocsImgContainer>
            <DocsImg src={Resume} />
          </DocsImgContainer>
          <DocsLink href={cvPL} target='_blank'>Polish</DocsLink>
          <DocsLink href={cvENG} target='_blank'>English</DocsLink>
        </DocsText>
        <DocsText>
          <DocsH2>Diploma</DocsH2>
          <DocsImgContainer>
            <DocsImg src={Diploma} />
          </DocsImgContainer>
          <DocsLink href={diplomaPL} target='_blank'>Polish</DocsLink>
          <DocsLink href={diplomaENG} target='_blank'>English</DocsLink>
        </DocsText>
      </DocsWrapper>
    </DocsContainer>
  );
};

export default Docs;

