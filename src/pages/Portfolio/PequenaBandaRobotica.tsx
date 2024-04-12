import React from "react";
import styled from "styled-components";
import LiteYouTubeEmbed from "react-lite-youtube-embed";
import "react-lite-youtube-embed/dist/LiteYouTubeEmbed.css";

import prettierBandImg from "../../assets/images/PBR/Prettier-band.jpg";
import prettierDrummerImg from "../../assets/images/PBR/Prettier-drummer.jpg";
import prettierGlockImg from "../../assets/images/PBR/Prettier-glock.jpg";
import prettierVocalImg from "../../assets/images/PBR/Prettier-vocal-section.jpg";

import harryVid from "../../assets/videos/PBR/Harry.mp4";
import soundProcessingVid from "../../assets/videos/PBR/Sound-processing.mp4";
import vocalSectionVid from "../../assets/videos/PBR/Vocal-section.mp4";
import { usePortofolioContext } from "../../components/Portfolio/context";
import { ImageRow } from "../../components/Portfolio";

const PequenaBandaRobotica: React.FC = () => {
  const context = usePortofolioContext();
  if (context === null) throw new Error("Porfolio context if missing");
  const { handleImageClick } = context;

  return (
    <Wrapper id="pequena-banda-robotica">
      <h1 className="section-title">Pequeña Banda Robótica</h1>
      <div className="text-block">
        <p>
          The "Pequeña Banda Robótica" (Small Robotic Band) is an exploration in Robotics and Music. Contructed from
          recycled, found materials such as chopsticks and jamjar lids, this arduino-controlled miniature band is made
          up of three members, but it is ever-growing!
        </p>
      </div>

      <ImageRow
        handleClick={handleImageClick}
        imageSources={[{ src: prettierBandImg, alt: "The Pequeña Banda Robotica" }]}
      />

      <div className="text-block">
        <p>
          The aim of creating the Pequeña Banda Robótica is to make robotics more approachable and move towards
          facilitating access to learning.
        </p>
      </div>

      <ImageRow
        handleClick={handleImageClick}
        imageSources={[
          { src: prettierDrummerImg, alt: "The drummer" },
          { src: prettierGlockImg, alt: "The glockenspiel" },
          { src: prettierVocalImg, alt: "The vocal section" },
        ]}
      />

      <div className="youtube-lite-container">
        <LiteYouTubeEmbed id="dNsn_Z9T3mk" title="Mr Sandman" noCookie={true} />
      </div>

      <h2>The Drummer</h2>

      <div className="text-block">
        <p>
          The band's first musician, kickstarting the whole project. The sound from the snare and the kick is captured
          by piezoelectric sensors, and digitally processed to enhance its sound.
        </p>
      </div>

      <video className="vertical-video" controls>
        <source src={soundProcessingVid} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <h2>The Glockenspiel</h2>

      <div className="text-block">
        <p>
          A glockenspiel is a type of metallophone, consisting of pitched metallic bars, usually arranged in a keyboard
          layout. In our version they are placed in a semicircular positioning to simplify the mechanical requirements.
        </p>
      </div>

      <video className="vertical-video" controls>
        <source src={harryVid} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <h2>The Vocal Section</h2>
      <div className="text-block">
        <p>
          Three wooden boxes equipped with piezoelectric buzzers and a small servomotor form the vocal section of the
          band. In the following video we can see them perform in manual mode, operated using a MIDI controller.
        </p>
      </div>

      <video className="vertical-video" controls>
        <source src={vocalSectionVid} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <h2>The code</h2>

      <div className="text-block">
        <p>
          The Pequeña Banda Robótica is an open-source project, and its code is fully available in{" "}
          <a href="https://github.com/valeiras" target="_blank">
            my GitHub account.
          </a>
        </p>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section``;

export default PequenaBandaRobotica;
