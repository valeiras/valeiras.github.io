import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import personalPhoto from "../../assets/images/CV/Foto CV.png";
import { About, Contact, Education, Experience, Skills } from "./";
import { useCVContext } from "./context";

const CVLayout: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const cvContext = useCVContext();
  if (cvContext === null) throw new Error("CV context if missing");
  const { isPrint, setIsPrint } = cvContext;

  useEffect(() => {
    setIsPrint(false);
    const handleResize = () => {
      if (containerRef.current) {
        const cvWidth = containerRef.current.getBoundingClientRect().width;
        const cvHeight = containerRef.current.getBoundingClientRect().height;

        const windowWidth = window.innerWidth;

        const r = cvWidth / windowWidth;
        if (r >= 1.0) {
          containerRef.current.style.transform = `scale(${1 / r}) translateX(-50%)`;
          containerRef.current.style.transformOrigin = "0 0";
          document.body.style.overflow = `hidden`;

          const cvScaledHeight = cvHeight / r;
          const documentHeight = Math.max(cvScaledHeight, window.innerHeight);

          containerRef.current.style.top = `${(documentHeight - cvScaledHeight) / 2.0}px`;
        } else {
          containerRef.current.style.removeProperty("transform");
          containerRef.current.style.removeProperty("top");
          document.body.style.removeProperty("height");
          document.body.style.removeProperty("overflow");
        }
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [setIsPrint]);

  return (
    <Wrapper>
      <div id="cv-container" ref={containerRef}>
        <div id="left-container">
          <img id="personal-photo" src={personalPhoto} alt="David Reverter Valeiras" />
          <About />

          {!isPrint && (
            <div id="btn-container">
              <a href="/pdf/CV_David_Reverter_Valeiras.pdf" download>
                <button id="download-btn">Download as pdf</button>
              </a>
            </div>
          )}

          <Contact />
        </div>
        <div id="right-container">
          <div className="cv-section" id="name">
            <div>
              <h3 id="name">David Reverter Valeiras</h3>
              <hr />
              <h4>Doctor of Engineering - Front End Developer</h4>
            </div>
          </div>
          <Education />
          <Skills />
          <Experience />
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: #ccc;
  overflow: auto;

  #cv-container {
    display: flex;
    left: 50%;
    transform: translateX(-50%);
    width: 800px;
    height: 1131px;
    background-color: #fff;
    border: 1px solid #999;
    flex-flow: row wrap;
    justify-content: center;
    box-shadow: 2px 2px 2px;
    position: relative;
  }

  #left-container,
  #right-container,
  div.cv-section {
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
  }

  #left-container,
  #right-container {
    padding-top: 1.5rem;
    padding-bottom: 1rem;
  }

  div.cv-section {
    width: 100%;
  }

  #left-container {
    width: 40%;
    background-color: aliceblue;
  }

  #right-container {
    width: 60%;
    background-color: #fff;
  }

  #personal-photo {
    width: 70%;
    border-radius: 10px;
    flex-grow: 0;
  }

  #btn-container {
    margin-top: 30px;
    flex-grow: 10;
  }
  #contact {
    flex-grow: 0;
  }

  #name,
  #education,
  #skills {
    flex-grow: 1;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    text-align: center;
  }

  h3 {
    font-size: 1.45rem;
  }

  h5 {
    font-size: 0.9rem;
    margin-top: 10px;
  }

  h5:first-of-type {
    margin-top: 1rem;
  }

  h4.cv-section-header {
    font-size: 1.2rem;
    width: 100%;
    margin-top: 1rem;
  }

  h4.right-header {
    background-color: aliceblue;
    padding: 2px 0;
  }

  hr {
    width: 90%;
    color: #012b55;
  }

  div.left-align {
    width: 100%;
    padding-left: 40px;
    padding-right: 40px;
    display: flex;
    flex-flow: column nowrap;
    justify-content: flex-start;
    align-items: flex-start;
  }

  a {
    text-decoration: none;
  }

  div.two-column {
    width: 100%;
    display: flex;
    flex-flow: row nowrap;
    column-gap: 0.5rem;
    justify-content: center;
    align-items: flex-start;
    padding-left: 40px;
    padding-right: 40px;
  }

  ul {
    list-style-type: none;
    width: fit-content;
    list-style-position: outside;
    margin: 0;
    padding: 0;
  }

  .custom-list {
    margin-top: 1rem;
  }

  #logos {
    font-size: 0.9rem;
  }

  #contacts {
    font-size: 0.9rem;
  }

  #education,
  #experience {
    font-size: 0.8rem;
  }

  ul#logos li {
    text-align: center;
  }

  li.title {
    font-weight: 700;
    margin-bottom: -0.2rem;
  }

  li.institution:not(:last-child) {
    font-weight: 100;
    margin-bottom: 0.5rem;
  }

  .contact-list li:not(:last-child) {
    /* display: flex; */
    margin-bottom: 3px;
  }

  #download-btn {
    padding: 10px;
    color: var(--dark-blue);
    background-color: #fff;
    border: solid 0.5px var(--dark-blue);
    border-radius: 5px;
    cursor: pointer;
    transition: 0.5s;
    box-shadow: 0 0 1px;
    margin: 20px;
  }

  #download-btn:hover {
    color: #fff;
    background-color: var(--dark-blue);
  }
`;

export default CVLayout;
