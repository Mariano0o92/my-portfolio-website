import React from 'react';
import { DocsContainer, DocsH1, DocsWrapper, DocsText, DocsH2, DocsImgContainer, DocsImg, DocsLink } from './DocsElements';
import Resume from '../../images/resume.svg';
import Diploma from '../../images/diploma.svg';

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
          <DocsLink>Polish</DocsLink>
          <DocsLink>English</DocsLink>
        </DocsText>
        <DocsText>
          <DocsH2>Diploma</DocsH2>
          <DocsImgContainer>
            <DocsImg src={Diploma} />
          </DocsImgContainer>
          <DocsLink>Polish</DocsLink>
          <DocsLink>English</DocsLink>
        </DocsText>
      </DocsWrapper>
    </DocsContainer>
  );
};

export default Docs;

