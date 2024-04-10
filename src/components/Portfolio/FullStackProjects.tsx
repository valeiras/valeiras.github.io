import React from "react";
import styled from "styled-components";
import { Project } from "../../types";
import { TbWorldWww } from "react-icons/tb";
import { FaGithub } from "react-icons/fa6";

import imgTualuce from "../../assets/images/Full-stack/Tualuce-1.png";
import imgAcontractluz from "../../assets/images/Full-stack/Acontractluz-2.png";
import imgCeciRodriguezFotos from "../../assets/images/Full-stack/CeciRodriguezFotos.png";
import imgRichEditor from "../../assets/images/Full-stack/RichEditor.png";

import { Link } from "react-router-dom";

const FullStackProjects: React.FC = () => {
  const projects: Project[] = [
    {
      projectName: "Tualuce",
      description: `Beatiful SPA webpage created using React, React Router and React Transition Group.`,
      projectUrl: "https://tualuce.eu",
      img: imgTualuce,
    },
    {
      projectName: "Ceci Rodríguez Fotos",
      description: `Personal portfolio webpage for Spanish photographer Ceci Rodríguez. This project includes a private secure area
      that allows the owner to upload new pictures and update the contents of the webpage`,
      projectUrl: "https://www.ceci-rodriguez-fotos.es/",
      gitHubUrl: "https://github.com/valeiras/ceci-rod-fotos-fullstack",
      img: imgCeciRodriguezFotos,
    },
    {
      projectName: "Acontract-luz",
      description: `Another beatiful SPA webpage created with React. 
        It includes a personal client area and access the full manufacturer's catalog from its database.`,
      projectUrl: "https://www.acontract-luz.com/",
      img: imgAcontractluz,
    },
    {
      projectName: "Rich text editor",
      description: `Rich text editor created using Lexical and React. 
        The editor is then provided as a web component, so it can be later included in any project using whichever framework.`,
      projectUrl: "https://utils.ennubo.es/editor/",
      gitHubUrl: "https://github.com/valeiras/react-rich-text-editor",
      img: imgRichEditor,
    },
  ];

  return (
    <Wrapper>
      {projects.map(({ projectName, description, projectUrl, gitHubUrl, img }) => {
        return (
          <div className="project-container">
            <h3 className="project-name">{projectName}</h3>
            <img src={img} alt={projectName} className="project-img" />
            <p className="project-description">{description}</p>
            <div className="project-links">
              <Link to={projectUrl} target="_blank">
                <TbWorldWww />
              </Link>
              {gitHubUrl && (
                <Link to={gitHubUrl} target="_blank">
                  <FaGithub />
                </Link>
              )}
            </div>
          </div>
        );
      })}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;
  margin-top: 2rem;
  gap: 2rem;

  @media screen and (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }

  .project-container {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: center;
    border: 1px solid var(--dark-blue);
    border-radius: var(--border-radius);
    box-shadow: var(--shadow-2);
    transition: var(--transition);
    padding: 2% 10%;
  }

  .project-container:hover {
    box-shadow: var(--shadow-4);
  }

  .project-img {
    width: 100%;
  }

  .project-description {
    flex-grow: 1;
  }

  .project-links {
    display: flex;
    flex-direction: row;
    font-size: 1.5rem;
    gap: 0.5rem;
  }
`;

export default FullStackProjects;
