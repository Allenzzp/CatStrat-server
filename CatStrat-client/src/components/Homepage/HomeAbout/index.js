import React, {useEffect} from 'react';
import { AboutContainer, AboutH1, AboutH2, AboutWrapper, AboutCard, AboutIcon, AboutP } from './AboutCSS'; 
import Icon1 from '../../../images/d.png';
import Icon2 from '../../../images/potatoA.png';
import Icon3 from '../../../images/potatoB.png';

import Aos from "aos";
import "aos/dist/aos.css";


const About = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, [])

  return (
    <AboutContainer id="about">
      <AboutH1>Our Team</AboutH1>
      <AboutWrapper>
        <AboutCard data-aos="flip-left">
          <AboutIcon src={Icon1} />
          <AboutH2>Diana Kuang</AboutH2>
          <AboutP>CEO, Founder</AboutP>
        </AboutCard>
        <AboutCard data-aos="flip-right">
          <AboutIcon src={Icon2} />
          <AboutH2>Allen Zhao</AboutH2>
          <AboutP>CFO, Co-Founder</AboutP>
        </AboutCard>
        <AboutCard data-aos="flip-left">
          <AboutIcon src={Icon3} />
          <AboutH2>James Huang</AboutH2>
          <AboutP>CTO, Co-Founder</AboutP>
        </AboutCard>
      </AboutWrapper>
    </AboutContainer>
  )
}

export default About;