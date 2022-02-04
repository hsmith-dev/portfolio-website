import React from 'react';
import { FaGithub, FaLinkedinIn, FaMailBulk} from 'react-icons/fa'
import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>Engineering solutions for problems with software.</Slogan>
        </CompanyContainer>
        <SocialContainer>
          <SocialIcons href='https://github.com/hsmith-dev'>
            <FaGithub size="3rem"/>
          </SocialIcons>
          <SocialIcons href='https://www.linkedin.com/in/harrimsmith'>
            <FaLinkedinIn size="3rem"/>
          </SocialIcons>
          <SocialIcons href='mailto:me@hsmith.dev'>
            <FaMailBulk size="3rem"/>
          </SocialIcons>
       </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
