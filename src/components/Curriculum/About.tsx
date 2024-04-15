import React from "react";
import styled from "styled-components";

type Props = { isPrint: boolean };

const About: React.FC<Props> = ({ isPrint }) => {
  return (
    <Wrapper className="cv-section" id="about">
      <h4 className="cv-section-header left-header">ABOUT</h4>
      <p className="long-text">
        After completing{" "}
        <a className={isPrint ? "decorated" : ""} href="https://theses.hal.science/tel-01727349/document">
          my PhD
        </a>{" "}
        in Robotics and Computer Science, I introduced my love of music and sound into my practice. I'm attracted by the
        technical aspect of sound and music, since I see all of these as inextricably linked and also love the creative
        side of technology and programming. In the last few years, I have specialized myself in web development and
        worked as a full-stack engineer.
        {isPrint && (
          <span>
            {" "}
            You can see some of my latest work in{" "}
            <a className={isPrint ? "decorated" : ""} href="https://valeiras.github.io/">
              my portfolio
            </a>
            .
          </span>
        )}
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

  a.decorated {
    text-decoration: underline;
  }
`;

export default About;
