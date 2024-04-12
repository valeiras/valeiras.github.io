import React, { useEffect } from "react";
import styled from "styled-components";

type Props = {
  isGalleryActive: boolean;
  setIsGalleryActive: React.Dispatch<React.SetStateAction<boolean>>;
  galleryRef: React.RefObject<HTMLDivElement>;
};

const ImageGallery: React.FC<Props> = ({ isGalleryActive, setIsGalleryActive, galleryRef }) => {
  const exitFullpage = () => {
    if (galleryRef.current) {
      galleryRef.current.removeAttribute("style");
      setIsGalleryActive(false);
      document.body.style.overflowY = "visible";
    }
  };

  useEffect(() => {
    const exitFullpage = () => {
      if (galleryRef.current && isGalleryActive) {
        galleryRef.current.removeAttribute("style");
        setIsGalleryActive(false);
        document.body.style.overflowY = "visible";
      }
    };
    document.addEventListener("keydown", exitFullpage);
    return () => {
      removeEventListener("keydown", exitFullpage);
    };
  }, [galleryRef, isGalleryActive, setIsGalleryActive]);

  return (
    <Wrapper
      className={isGalleryActive ? "active" : "inactive"}
      ref={galleryRef}
      onClick={exitFullpage}
      onKeyDown={exitFullpage}
    ></Wrapper>
  );
};

const Wrapper = styled.div`
  position: absolute;
  z-index: 9999;
  left: 0;
  margin: 0;
  background-size: contain;
  background-repeat: no-repeat no-repeat;
  background-position: center center;
  background-color: rgba(55, 55, 55, 0.9);
  transition: 0.5s;
  cursor: zoom-out;

  &.inactive {
    display: none;
    width: 0;
    height: 0;
  }

  &.active {
    display: block;
    width: 100vw;
  }
`;

export default ImageGallery;
