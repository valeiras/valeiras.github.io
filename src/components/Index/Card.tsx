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
          <div className="text-container">
            <span className="title">{title}</span>
          </div>
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
  padding-top: 20px;
  padding-bottom: 40px;

  &:hover {
    transform: scale(1.05);
  }
`;

export default Card;
