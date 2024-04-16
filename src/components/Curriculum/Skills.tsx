import React from "react";
import styled from "styled-components";
import { nanoid } from "nanoid";
import { useCVContext } from "./context";

type SkilllLevel = "100" | "80" | "60" | "40" | "20";

type Skill = {
  text: string;
  level: SkilllLevel;
  iconClass: string;
};

type Language = {
  name: string;
  level: SkilllLevel;
  levelName: string;
};

const skillsLeftTable: Skill[] = [
  { text: "Typescript", level: "100", iconClass: "devicon-typescript-plain" },
  { text: "HTML", level: "100", iconClass: "devicon-html5-plain" },
  { text: "C++", level: "80", iconClass: "devicon-cplusplus-plain" },
];

const skillsRightTable: Skill[] = [
  { text: "Javascript", level: "100", iconClass: "devicon-javascript-plain" },
  { text: "CSS", level: "100", iconClass: "devicon-css3-plain" },
  { text: "Python", level: "80", iconClass: "devicon-python-plain" },
];

const toolsLeftTable: Skill[] = [
  { text: "Node.js", level: "100", iconClass: "devicon-nodejs-plain" },
  { text: "Next.js", level: "80", iconClass: "devicon-nextjs-plain" },
  { text: "Arduino", level: "80", iconClass: "devicon-arduino-plain" },
];

const toolsRightTable: Skill[] = [
  { text: "React", level: "100", iconClass: "devicon-react-original" },
  { text: "Git", level: "80", iconClass: "devicon-git-plain" },
  { text: "Matlab", level: "80", iconClass: "devicon-matlab-plain" },
];

const languagesLeftTable: Language[] = [
  { name: "Spanish", level: "100", levelName: "Native" },
  { name: "Galician", level: "100", levelName: "Native" },
];

const languagesRightTable: Language[] = [
  { name: "English", level: "80", levelName: "Fluent" },
  { name: "French", level: "80", levelName: "Fluent" },
];

const skillToReactNode: (skill: Skill) => React.ReactNode = ({ text, level, iconClass }) => {
  return (
    <React.Fragment key={nanoid()}>
      <i className={`skill-icon ${iconClass}`} />
      {text}
      <div className="skill-bar-container">
        <div className={`skill-bar s${level}`}></div>
      </div>
    </React.Fragment>
  );
};

const languageToReactNode: (language: Language) => React.ReactNode = ({ name, level, levelName }) => {
  return (
    <React.Fragment key={nanoid()}>
      <p className="skill">{name}</p>
      <p className="level">{levelName}</p>
      <div className="skill-bar-container">
        <div className={`skill-bar s${level}`}></div>
      </div>
    </React.Fragment>
  );
};

const Skills: React.FC = () => {
  const cvContext = useCVContext();
  if (cvContext === null) throw new Error("CV context if missing");
  const { isPrint } = cvContext;

  return (
    <Wrapper className="cv-section" id="skills" $isPrint={isPrint}>
      <h4 className="cv-section-header right-header">SKILLS</h4>
      <h5>Programming languages:</h5>
      <div className="two-column">
        <div className="skills-table">{skillsLeftTable.map(skillToReactNode)}</div>
        <div className="skills-table">{skillsRightTable.map(skillToReactNode)}</div>
      </div>
      <h5>Tools:</h5>
      <div className="two-column">
        <div className="skills-table">{toolsLeftTable.map(skillToReactNode)}</div>
        <div className="skills-table">{toolsRightTable.map(skillToReactNode)}</div>
      </div>
      <h5>Languages:</h5>
      <div className="two-column">
        <div className="skills-table">{languagesLeftTable.map(languageToReactNode)}</div>
        <div className="skills-table">{languagesRightTable.map(languageToReactNode)}</div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div<{ $isPrint?: boolean }>`
  div.skills-table {
    display: flex;
    width: 50%;
    flex-flow: row wrap;
    margin: 5px 0 10px;
    align-items: center;
    font-size: 0.8rem;
  }

  .skill-icon {
    margin-right: 1rem;
  }

  p.skill,
  p.level {
    flex: 1;
    font-size: 0.8rem;
  }

  p.skill {
    font-weight: 700;
    text-align: left;
  }

  p.level {
    text-align: right;
  }

  .skill-bar-container {
    height: 6px;
    width: 100%;
    margin-bottom: 2px;
    border: 0.1px solid var(--dark-blue);
    background-color: aliceblue;
  }

  .skill-bar {
    background-color: var(--dark-blue);
    height: 100%;
  }

  @keyframes animate-s100 {
    from {
      width: 0;
    }
    to {
      width: 100%;
    }
  }

  @keyframes animate-s80 {
    from {
      width: 0;
    }
    to {
      width: 80%;
    }
  }

  @keyframes animate-s60 {
    from {
      width: 0;
    }
    to {
      width: 60%;
    }
  }

  @keyframes animate-s40 {
    from {
      width: 0;
    }
    to {
      width: 40%;
    }
  }

  .skill-bar.s100 {
    width: 100%;
    animation-name: animate-s100;
    animation-duration: ${(props) => (props.$isPrint ? "0s" : "2.5s")};
  }

  .skill-bar.s80 {
    width: 80%;
    animation-name: animate-s80;
    animation-duration: ${(props) => (props.$isPrint ? "0s" : "2s")};
  }

  .skill-bar.s60 {
    width: 60%;
    animation-name: animate-s60;
    animation-duration: ${(props) => (props.$isPrint ? "0s" : "1.5s")};
  }

  .skill-bar.s40 {
    width: 40%;
    animation-name: animate-s40;
    animation-duration: ${(props) => (props.$isPrint ? "0s" : "1s")};
  }
`;

export default Skills;
