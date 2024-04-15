import React from "react";
import { Card } from "../components/Index";
import styled from "styled-components";
import portfolioImg from "../assets/images/Index/Portfolio.png";
import cvImg from "../assets/images/Index/Portada CV.png";
import SocialMedia from "../components/SocialMedia";

const Home: React.FC = () => {
  return (
    <Wrapper>
      <div className="header-container">
        <h1>David Reverter Valeiras</h1>
      </div>
      <div className="card-container">
        <Card link="/#/portfolio/full-stack" title="Portfolio" img={portfolioImg} />
        <Card link="/#/curriculum" title="CV" img={cvImg} />
      </div>

      <div className="footer-container">
        <SocialMedia />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  min-height: 100dvh;
  width: 100vw;
  overflow: auto;
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 0 2rem;

  .footer-container {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
  }

  h1 {
    text-align: center;
    width: 100%;
    font-size: 2rem;
    margin: 2rem 0 3rem;
  }

  @media screen and (min-width: 992px) {
    h1 {
      font-size: 2.5rem;
    }
  }

  div.text-container {
    margin-bottom: 10px;
  }

  a {
    text-decoration: none;
  }

  .card-container {
    display: flex;
    flex-direction: column;
    gap: 3rem;
  }

  @media (min-width: 992px) {
    .card-container {
      flex-direction: row;
      gap: 5rem;
    }
  }
`;

export default Home;
