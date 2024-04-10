import React, { useRef } from "react";
import styled from "styled-components";

import logo from "../../assets/images/logo.gif";
import { NavLink } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { usePortofolioContext } from "./context";

const navbarItems: { text: string; section: string }[] = [
  { text: "Full-stack developer", section: "full-stack" },
  { text: "Mekanika", section: "mekanika" },
  // { text: "Pequeña Banda Robótica", section: "pequena-banda-robotica" },
  // { text: "Household Music", section: "household-music" },
  // { text: "PhD - Neuromorphic Vision", section: "phd-neuromorphic-vision" },
  // { text: "Music", section: "music" },
  // { text: "Choose your own song", section: "choose-your-own-song" },
];

type Props = {
  navbarRef: React.RefObject<HTMLUListElement>;
};

const Navbar: React.FC<Props> = ({ navbarRef }) => {
  const { showLinks, setShowLinks } = usePortofolioContext();
  const linksContainerRef = useRef<HTMLDivElement>(null);
  const linksRef = useRef<HTMLUListElement>(null);

  const toggleLinks = () => {
    setShowLinks(!showLinks);
    console.log("Toggling links");
  };

  const linkStyles =
    showLinks && linksRef.current
      ? { height: `${linksRef.current.getBoundingClientRect().height}px` }
      : { height: `0px` };

  return (
    <Wrapper id="nav-bar">
      <ul className="main-bar" ref={navbarRef}>
        <li
          id="logo"
          onClick={() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          <img loading="lazy" id="header-img" src={logo} />
        </li>
        {navbarItems.map(({ text, section }) => {
          return (
            <NavLink to={section} className="nav-link nav-link-laptop" key={section}>
              {text}
            </NavLink>
          );
        })}
        <li className="nav-toggle-container">
          <button className={showLinks ? "nav-toggle show-links" : "nav-toggle"} onClick={toggleLinks}>
            <FaBars />
          </button>
        </li>
      </ul>

      <div ref={linksContainerRef} style={linkStyles} className="mobile-links-container">
        <ul className="mobile-links" ref={linksRef}>
          {navbarItems.map(({ text, section }) => {
            return (
              <NavLink to={section} className="nav-link nav-link-mobile" key={section} onClick={toggleLinks}>
                {text}
              </NavLink>
            );
          })}
        </ul>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.nav`
  background-color: white;
  z-index: 999;
  width: 100%;
  margin: 0;
  padding: 0;
  position: fixed;
  top: 0;
  flex-direction: column;
  left: 0;
  box-shadow: var(--shadow-2);
  display: flex;

  #header-img {
    width: 15vw;
    max-width: 220px;
    min-width: 180px;
  }

  ul.main-bar {
    display: inline-flex;
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: auto;
    flex-direction: row;
    align-items: stretch;
    width: 100%;
    justify-content: space-between;
  }

  #logo,
  .nav-link {
    display: flex;
    align-items: center;
    text-align: center;
    justify-content: center;
    text-decoration: none;
    padding: 0.2rem 1.2rem;
    font-size: 1rem;
    flex-grow: 1;
    cursor: pointer;
  }

  .nav-link.active,
  .nav-link:hover {
    background-color: aliceblue;
    color: inherit;
  }

  .nav-link-laptop {
    display: none;
  }

  #logo {
    flex-grow: 0;
  }

  .nav-toggle-container {
    display: flex;
    align-items: center;
  }

  .nav-toggle {
    display: flex;
    border: none;
    background-color: #fff;
    color: inherit;
    font-size: 1rem;
    margin: 0 1.2rem;
    transition: var(--transition);
  }

  .nav-toggle.show-links {
    transform: rotate(-90deg);
  }

  .mobile-links-container {
    transition: var(--transition);
    overflow: hidden;
  }

  .mobile-links {
    display: flex;
    flex-direction: column;
  }

  @media screen and (min-width: 1200px) {
    .nav-toggle {
      display: none;
    }

    .mobile-links {
      display: none;
    }

    .nav-link-laptop {
      display: flex;
    }
  }
`;

export default Navbar;
