import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
          Hi, my <br/>
          name is Harrison.
      </SectionTitle>
      <SectionText>
        I'm a <b>Software Engineer.</b><br/>
        Senior at Weber State University in Utah. 
      </SectionText>
    </LeftSection>
    
  </Section>
);

export default Hero;