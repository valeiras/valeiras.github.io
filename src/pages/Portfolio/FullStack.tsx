import React from "react";
import styled from "styled-components";
import { FullStackProjects } from "../../components/Portfolio";

const FullStack: React.FC = () => {
  return (
    <Wrapper id="full-stack">
      <h1 className="section-title">Full-stack developer</h1>
      <p>
        As a full-stack developer I have worked in a number of projects. Many of these cannot be shared, as the code
        remains private, but here is some of the stuff I can show you:
      </p>
      <FullStackProjects />
    </Wrapper>
  );
};

const Wrapper = styled.section``;

export default FullStack;
