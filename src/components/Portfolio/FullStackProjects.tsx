import React from "react";
import styled from "styled-components";
import { Project } from "../../types";
import { TbWorldWww } from "react-icons/tb";
import { FaGithub } from "react-icons/fa6";

import imgTualuce from "../../assets/images/Full-stack/Tualuce-1.png";
import imgWorkingDay from "../../assets/images/Full-stack/working-day.png";
import imgArtesa from "../../assets/images/Full-stack/artesa.png";
import imgPortfolio from "../../assets/images/Full-stack/Portfolio.png";
import imgAcontractluz from "../../assets/images/Full-stack/Acontractluz-2.png";
import imgCeciRodriguezFotos from "../../assets/images/Full-stack/CeciRodriguezFotos.png";
import imgRichEditor from "../../assets/images/Full-stack/RichEditor.png";

import { Link } from "react-router-dom";
import { nanoid } from "nanoid";

const FullStackProjects: React.FC = () => {
  const projects: Project[] = [
    {
      projectName: "Artesa",
      description: `Full-stack app for managing product traceability, fully created with Next.js and shadcn/ui. 
        The code is written in Typescript, and the database is hosted in Supabase.`,
      projectUrl: "https://artesa.vercel.app/",
      gitHubUrl: "https://github.com/valeiras/artesa",
      myContribution: "In charge of the full project.",
      img: imgArtesa,
    },
    {
      projectName: "Tualuce",
      description: `Beatiful SPA webpage created using React, React Router and React Transition Group.`,
      projectUrl: "https://tualuce.eu",
      myContribution: "Only responsible for the front-end.",
      img: imgTualuce,
    },
    {
      projectName: "Working Day",
      description: `Full-stack app for managing work hours, fully created with Next.js and DaisyUI. 
      The code is wirtten in Typescript, and its main features are tested using Vitest and React Testing library. The PostgreSQL database is hosted in Supabase.`,
      projectUrl: "https://working-day-two.vercel.app/",
      gitHubUrl: "https://github.com/valeiras/working-day",
      myContribution: "In charge of the full project.",
      img: imgWorkingDay,
    },
    {
      projectName: "This portfolio",
      description: `This very portfolio is a React project, written in Typescript and hosted in gitHub pages.
        Styles are applied using styles components.`,
      projectUrl: "https://valeiras.github.io/#/portfolio/full-stack",
      gitHubUrl: "https://github.com/valeiras/valeiras.github.io",
      myContribution: "In charge of the full project.",
      img: imgPortfolio,
    },
    {
      projectName: "Rich text editor",
      description: `Rich text editor created using Lexical and React. 
      The editor is then provided as a web component, so it can be later included in any project using whichever framework.`,
      projectUrl: "https://utils.ennubo.es/editor/",
      gitHubUrl: "https://github.com/valeiras/react-rich-text-editor",
      myContribution: "In charge of the full project.",
      img: imgRichEditor,
    },
    {
      projectName: "Ceci Rodríguez Fotos",
      description: `Personal portfolio webpage for Spanish photographer Ceci Rodríguez. This project includes a private secure area
      that allows the owner to upload new pictures and update the contents of the webpage, which are hosted in MongoDB Atlas.`,
      projectUrl: "https://www.ceci-rodriguez-fotos.es/",
      gitHubUrl: "https://github.com/valeiras/ceci-rod-fotos-fullstack",
      myContribution: "In charge of the full project.",
      img: imgCeciRodriguezFotos,
    },
    {
      projectName: "Acontract-luz",
      description: `Another beatiful SPA webpage created with React. 
      It includes a personal client area and access the full manufacturer's catalog from its database.`,
      projectUrl: "https://www.acontract-luz.com/",
      myContribution: "Only responsible for the front-end.",
      img: imgAcontractluz,
    },
  ];

  return (
    <Wrapper className="WrapperProjectsContainer">
      {projects.map(({ projectName, description, projectUrl, gitHubUrl, myContribution, img }) => {
        return (
          <div className="project-container" key={nanoid()}>
            <h3 className="project-name">{projectName}</h3>
            <Link to={projectUrl} target="_blank">
              <img width={640} height={360} src={img} alt={projectName} className="project-img" />
            </Link>
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
            <p className="contribution">
              <span className="contribution-header">My contribution: </span>
              {myContribution}
            </p>
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
  justify-items: start;

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
    height: auto;
    border-radius: 5px;
  }

  .project-description {
    flex-grow: 1;
    font-size: 0.8rem;
  }

  .contribution {
    font-size: 0.8rem;
  }

  .contribution-header {
    font-weight: bold;
  }

  .project-links {
    display: flex;
    flex-direction: row;
    font-size: 1.5rem;
    gap: 0.5rem;
  }
`;

export default FullStackProjects;
