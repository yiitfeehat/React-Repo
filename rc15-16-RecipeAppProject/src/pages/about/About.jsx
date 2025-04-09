import React from 'react'
import { AboutContainer, HeaderContainer, InfoContainer, StyledImage } from './AboutStyles'
import codingSvg from "../../assets/coding.svg"

const About = () => {
  return (
    <AboutContainer>

      <AboutContainer>
        <StyledImage src={codingSvg} alt=""/>

        <div>
          <HeaderContainer >
            About Software Developer <span>AshleyMiller </span>
          </HeaderContainer>
        </div>
        <InfoContainer>
          <h2>Hi, I'am Ashley Miller</h2>
          <h3>I’m currently learning Full-Stack Development Languages.</h3>
          <h4>
            I've already known JS, ReactJS, ReactNative, NodeJS, MongoDB,SQL,
            Java, Hibernate, SpringBoot, AWS Services.
          </h4>
          <h2>
            <a href="mailto:Ashley@clarusway.com">Send email</a> :
            Ashley@clarusway.com
          </h2>
          {/* whatsapp://tel:3216541234 */}
        </InfoContainer>
      </AboutContainer>
    </AboutContainer>
  );
}

export default About