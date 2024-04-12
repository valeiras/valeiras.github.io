import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import Navbar from "../../components/Portfolio/Navbar";
import { SocialMedia } from "../../components/Index";
import { Outlet } from "react-router-dom";
import { PortfolioContextProvider } from "../../components/Portfolio/context";
import ImageGallery from "../../components/Portfolio/ImageGallery";

const Portfolio: React.FC = () => {
  const navbarRef = useRef<HTMLUListElement>(null);
  const spacerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleResize = () => {
      if (navbarRef.current && spacerRef.current) {
        const navbarHeight = navbarRef.current.getBoundingClientRect().height;
        spacerRef.current.style.height = `${navbarHeight}px`;
      }
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("load", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <PortfolioContextProvider>
      <Wrapper>
        <Navbar navbarRef={navbarRef} />
        <ImageGallery />
        <div id="spacer" ref={spacerRef}></div>

        <Outlet />
        <SocialMedia />
      </Wrapper>
    </PortfolioContextProvider>
  );
};

const Wrapper = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  text-align: center;
  gap: 0;
  overflow-x: hidden;

  /* --------------------------- Section classes --------------------------*/

  #spacer {
    height: 100px;
  }

  section {
    width: 90%;
  }

  @media screen and (min-width: 992px) {
    section {
      width: 80%;
    }
  }

  @media screen and (min-width: 1200px) {
    section {
      width: 70%;
    }
  }

  @media screen and (min-width: 1400px) {
    section {
      width: 60%;
    }
  }

  section#social-media {
    margin-bottom: 0.5rem;
    bottom: 0;
  }

  /* --------------------------- Text classes --------------------------*/
  @media (max-width: 1400px) {
    html {
      font-size: 16px;
    }
  }

  /* Tablet */
  @media (max-width: 768px) {
    html {
      font-size: 14px;
    }
  }

  /* Cellphone */
  @media (max-width: 450px) {
    html {
      font-size: 14px;
    }
  }

  h1 {
    font-size: 2rem;
  }

  h1.section-title {
    margin-top: 0.5rem;
    margin-bottom: 1rem;
  }

  @media screen and (min-width: 992px) {
    margin-top: 1rem;
  }

  h2 {
    margin-top: 1.5rem;
    margin-bottom: -1rem;
  }

  p {
    text-align: justify;
    width: 100%;
  }

  p:first-child {
    margin-top: 2rem;
  }

  p:last-child {
    margin-bottom: 2rem;
  }

  .fa-brands {
    font-size: 1.5rem;
    padding: 0 0.5rem;
  }

  /* --------------------------- Video classes --------------------------*/
  .vimeo-embed {
    width: 100%;
  }

  .video-iframe {
    aspect-ratio: 16/9;
    width: 100%;
    margin: 0 auto 0;
    padding: 2px;
  }

  .vertical-video {
    width: 30%;
  }

  .youtube-lite-container {
    padding: 2px;
  }

  /* Laptop */
  @media (max-width: 1400px) {
    .vertical-video {
      width: 40%;
    }
  }

  /* Tablet */
  @media (max-width: 768px) {
    .vertical-video {
      width: 50%;
    }
  }

  /* Cellphone */
  @media (max-width: 450px) {
    .vertical-video {
      width: 70%;
    }
  }

  /* --------------------------- Image classes --------------------------*/
  img:not(#header-img):not(.project-img) {
    cursor: zoom-in;
  }

  img {
    padding: 2px;
    transition: 0.2s;
  }

  img:not(#header-img):not(.project-img):hover {
    transform: scale(1.01);
  }

  .img-full-width {
    max-width: 100%;
    max-height: 100%;
  }

  .img-half {
    width: 50%;
  }

  /* --------------------------- Lists --------------------------*/

  ul.no-bullets,
  ul.dashes {
    margin: 0;
    padding: 0;
  }

  ul.no-bullets {
    list-style-type: none;
  }

  ul.dashes {
    list-style-type: "-";
    list-style-position: outside;
  }

  .list-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-content: flex-start;
    gap: 0;
    margin-bottom: 2rem;
  }

  .list-container ul {
    width: 40%;
  }

  /* Tablet */
  @media (max-width: 1000px) {
    .list-container ul {
      width: 100%;
    }
  }

  ul.no-bullets li {
    margin: 0.5rem auto 0;
  }

  ul.dashes li {
    margin: 0 auto 1.5rem;
  }

  #social-media {
    margin-top: 2rem;
  }
`;

export default Portfolio;
