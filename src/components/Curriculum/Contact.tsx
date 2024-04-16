import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { type IconDefinition, faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import HiddenEmail from "./HiddenEmail";
import { nanoid } from "nanoid";
import Email from "./Email";
import { useCVContext } from "./context";

const contactLinks: { link?: string; text: string; logo: IconDefinition }[] = [
  { text: "Granada (Spain)", logo: faLocationDot },
  { link: "https://www.linkedin.com/in/david-reverter-valeiras-b8772440/", text: "LinkedIn profile", logo: faLinkedin },
  { link: "https://github.com/valeiras", text: "github.com/valeiras", logo: faGithub },
];

const Contact: React.FC = () => {
  const cvContext = useCVContext();
  if (cvContext === null) throw new Error("CV context if missing");
  const { isPrint } = cvContext;

  return (
    <Wrapper className="cv-section" id="contact">
      <h4 className="cv-section-header left-header">CONTACT</h4>
      <div className="contact-list">
        {contactLinks.map(({ logo, link, text }) => {
          return (
            <React.Fragment key={nanoid()}>
              <FontAwesomeIcon icon={logo} className="right-aligned" />
              <a href={link}> {text}</a>
            </React.Fragment>
          );
        })}
        <FontAwesomeIcon icon={faEnvelope} className="right-aligned" />
        {isPrint ? <Email /> : <HiddenEmail />}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  font-size: 0.9rem;

  .contact-list {
    padding-top: 15px;
    width: 90%;
    display: grid;
    grid-template-columns: 1fr 5fr;
    align-items: center;
    column-gap: 0.5rem;
  }

  .right-aligned {
    justify-self: right;
  }
  .custom-list#contacts {
    width: 80%;
  }
`;

export default Contact;
