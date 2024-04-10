import React from "react";
import styled from "styled-components";
import { nanoid } from "nanoid";

const jobs: { institution: JSX.Element; title: JSX.Element }[] = [
  {
    title: <>2023-2024: Full-stack developer</>,
    institution: (
      <a href="https://www.ennubo.es/" target="_blank">
        Ennubo (Madrid)
      </a>
    ),
  },
  {
    title: (
      <>
        2022-2023: Developer of{" "}
        <a href="https://www.behance.net/gallery/170303287/Mekanika" target="_blank">
          Mekanika
        </a>
      </>
    ),
    institution: (
      <>
        <a href="https://cabezapatata.com/" target="_blank">
          Cabeza Patata
        </a>
        (London)
      </>
    ),
  },
  { title: <>2020-2022: Live Sound Technician</>, institution: <>Freelance</> },
  { title: <>2017-2020: Professional musician</>, institution: <>Freelance</> },
  { title: <>2013-2017: Doctorate</>, institution: <>Institut de la Vision (Paris)</> },
];
const Experience: React.FC = () => {
  return (
    <Wrapper className="cv-section" id="experience">
      <h4 className="cv-section-header right-header">EXPERIENCE</h4>
      <div className="left-align">
        <ul className="custom-list" id="experience">
          {jobs.map(({ title, institution }) => {
            return (
              <React.Fragment key={nanoid()}>
                <li className="title">{title}</li>
                <li className="institution">{institution} </li>
              </React.Fragment>
            );
          })}
        </ul>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div``;

export default Experience;
