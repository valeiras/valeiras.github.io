import React from "react";
import styled from "styled-components";

const About: React.FC = () => {
  return (
    <Wrapper className="cv-section" id="about">
      <h4 className="cv-section-header left-header">ABOUT</h4>
      <p className="long-text">
        After completing my
        <a href="https://theses.hal.science/tel-01727349/document">PhD in Robotics and Computer Science</a>, I
        introduced my love of music and sound into my practice. I'm attracted by the technical aspect of sound and
        music, since I see all of these as inextricably linked and also love the creative side of technology and
        programming. In the last few years, I have specialized myself in web development and worked as a full-stack
        engineer.
      </p>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  flex-grow: 0;

  p.long-text {
    padding: 15px 30px 0;
    text-align: justify;
    font-size: 0.8rem;
  }
`;

export default About;
