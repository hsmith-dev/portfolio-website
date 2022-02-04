import Link from 'next/link';
import React from 'react';
import { FaGithub, FaLinkedinIn, FaMailBulk} from 'react-icons/fa';
import { GoTerminal } from 'react-icons/go';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons , Span} from './HeaderStyles';

const Header = () =>  (
  <Container>
    <Div1>
      <Link href = "/">
        <a style = {{ display: "flex", alignItems: "center", color: "white", marginBottom: "20px"}}>
          <GoTerminal size ="3rem" /><Span>hsmith.dev</Span> 
        </a>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href = "#projects">
          <NavLink>Projects</NavLink>
        </Link>
      </li>
      <li>
        <Link href = "#tech">
          <NavLink>Tech</NavLink>
        </Link>
      </li>
      <li>
        <Link href = "#about">
          <NavLink>About</NavLink>
        </Link>
      </li>
    </Div2>
    <Div3>
    <SocialIcons href='https://github.com/hsmith-dev'>
        <FaGithub size="3rem"/>
      </SocialIcons>
      <SocialIcons href='https://www.linkedin.com/in/harrimsmith'>
        <FaLinkedinIn size="3rem"/>
      </SocialIcons>
      <SocialIcons href='mailto:me@hsmith.dev'>
        <FaMailBulk size="3rem"/>
      </SocialIcons>
    </Div3>
  </Container>
);

export default Header;
