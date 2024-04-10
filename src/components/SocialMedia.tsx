import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { type IconDefinition, faGithub, faInstagram, faTwitter, faFacebook } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

type socialNetwork = {
  icon: IconDefinition;
  link: string;
};

const socialNetworks: socialNetwork[] = [
  { icon: faGithub, link: "https://github.com/valeiras" },
  { icon: faInstagram, link: "https://www.instagram.com/drvaleiras/" },
  { icon: faTwitter, link: "https://twitter.com/Valeiras" },
  { icon: faFacebook, link: "https://www.facebook.com/errepuntovaleiras" },
];

const SocialMedia: React.FC = () => {
  return (
    <Wrapper>
      {socialNetworks.map(({ link, icon }) => {
        return (
          <Link to={link} target="_blank" key={link}>
            <FontAwesomeIcon icon={icon} />
          </Link>
        );
      })}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  text-align: center;
  font-size: 1.5rem;
  padding-bottom: 1rem;
  margin-top: 5rem;

  a {
    margin: 0 0.5rem;
  }
`;

export default SocialMedia;
