import React from 'react';
import {FaLaptopCode, FaCode, FaDatabase} from 'react-icons/fa';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id = "tech">
    <SectionDivider />
    <br/>
    <SectionTitle>Tech</SectionTitle>
    <SectionText>
      I have worked with a variety of tools and programming languages while engineering software for Desktop, Mobile and Web.
    </SectionText>
    <List>
      <ListItem>
        <FaLaptopCode size = "3rem"/>
        <ListContainer>
          <ListTitle>IDEs</ListTitle>
          <ListParagraph>
            Visual Studio / VS Code <br/>
            Android Stuidio / IntelliJ<br/>
            XCode <br />
            Unity <br/>
            Ardunio IDE <br />
            and more...
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <FaCode size = "3rem" />
        <ListContainer>
          <ListTitle>Languages</ListTitle>
          <ListParagraph>
            Java <br/>
            C / C# <br/>
            Python <br />
            Assembly <br />
            JavaScript <br />
            PHP <br/>
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <FaDatabase size = "3rem" />
        <ListContainer>
          <ListTitle>Information Systems</ListTitle>
          <ListParagraph>
            Databases; SQL, NoSQL, Mongo,...<br />
            Windows / Linux Sys Admin <br />
            Confluence / Jira <br />
            Salesforce (Admin and User)
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>


  </Section>
);

export default Technologies;
