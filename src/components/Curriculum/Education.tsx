import React from "react";
import styled from "styled-components";
import { nanoid } from "nanoid";

const degrees: { institution: string; title: string; link?: string }[] = [
  {
    institution: "Université Pierre et Marie Curie (Paris)",
    title: "PhD in Computer Science",
    link: "https://theses.hal.science/tel-01727349/document",
  },
  { institution: "Université Pierre et Marie Curie (Paris)", title: "Master Degree in advanced Systems and Robotics" },
  { institution: "E.T.S.E.I. de Vigo (Vigo)", title: "Industrial Engineering, Specialty: Mechanics" },
  { institution: "Centro de formación escénica de Andalucía", title: "Live Sound Technician" },
];

const Education: React.FC = () => {
  return (
    <Wrapper className="cv-section" id="education">
      <h4 className="cv-section-header right-header">EDUCATION</h4>
      <div className="left-align">
        <ul className="custom-list">
          {degrees.map(({ link, title, institution }) => {
            return (
              <React.Fragment key={nanoid()}>
                <li className="title">
                  <a href={link} target="_blank">
                    {title}
                  </a>
                </li>
                <li className="institution">{institution}</li>
              </React.Fragment>
            );
          })}
        </ul>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div``;

export default Education;
