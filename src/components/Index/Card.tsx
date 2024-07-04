import React from "react";
import styled from "styled-components";

type Props = {
  link: string;
  title: string;
  img: string;
};

const Card: React.FC<Props> = ({ link, title, img }) => {
  return (
    <Wrapper>
      <a href={link} target="_blank">
        <div className="card">
          <div className="title">{title}</div>
          <div className="img-container">
            <img className="snapshot" src={img} alt="Porfolio" />
          </div>
        </div>
      </a>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 30vw;
  min-width: 300px;
  max-width: 500px;
  height: fit-content;
  background-color: aliceblue;
  border-radius: 50px;
  text-align: center;
  transition: 0.3s;
  padding-top: 1rem;
  padding-bottom: 2rem;

  &:hover {
    transform: scale(1.05);
  }

  img.snapshot {
    width: 65%;
    height: 100%;
    border-radius: 20px;
    box-shadow: 1px 1px 3px var(--dark-blue);
  }

  @media screen and (min-width: 992px) {
    img.snapshot {
      width: 60%;
    }
  }

  .title {
    width: 100%;
    text-align: center;
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }
`;

export default Card;
