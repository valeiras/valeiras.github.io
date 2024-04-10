import React from "react";
import styled from "styled-components";

import mekanikaOnPictoplasmaImg from "../../assets/images/Mekanika/Mekanika-on-Pictoplasma.jpg";
import musicBoxImg from "../../assets/images/Mekanika/Music-Box.jpg";
import stageImg from "../../assets/images/Mekanika/Stage.jpg";
import glockenspielImg from "../../assets/images/Mekanika/Glockenspiel.jpg";
import drummerImg from "../../assets/images/Mekanika/Drummer.jpg";
import mekanikaFromLeftImg from "../../assets/images/Mekanika/Mekanika-from-left.gif";
import mekanikaFromRightImg from "../../assets/images/Mekanika/Mekanika-from-right.gif";
import patchImg from "../../assets/images/Mekanika/Patch.jpg";
import hiHatImg from "../../assets/images/Mekanika/HiHat.jpg";
import controllerImg from "../../assets/images/Mekanika/Controller.jpg";
import glockenspiel2Img from "../../assets/images/Mekanika/Glockenspiel-2.jpg";
import musicBox2Img from "../../assets/images/Mekanika/MusicBox-2.jpg";
import bandImg from "../../assets/images/Mekanika/Band.jpg";
import flagImg from "../../assets/images/Mekanika/Flag.jpg";
import mekanikaFromTheFrontImg from "../../assets/images/Mekanika/Mekanika-from-the-front.gif";
import drummerCloseupImg from "../../assets/images/Mekanika/Drummer-closeup.jpg";
import geniusAtWorkImg from "../../assets/images/Mekanika/Genius-at-work.jpg";
import stageBuildersImg from "../../assets/images/Mekanika/Stage-builders.jpg";
import katieWithDrummerImg from "../../assets/images/Mekanika/Katie-with-drummer.jpg";
import drummerHeadImg from "../../assets/images/Mekanika/drummer-head.jpg";
import mbHeadImg from "../../assets/images/Mekanika/mb-head.jpg";
import person1PlayingImg from "../../assets/images/Mekanika/person1-playing.gif";
import person2PlayingImg from "../../assets/images/Mekanika/person2-playing.gif";
import kid1PlayingImg from "../../assets/images/Mekanika/kid1-playing.gif";
import kid2PlayingImg from "../../assets/images/Mekanika/kid2-playing.gif";

const Mekanika: React.FC = () => {
  return (
    <Wrapper id="mekanika">
      <h1 className="section-title">Mekanika</h1>

      <iframe
        loading="lazy"
        src="https://player.vimeo.com/video/829882661?h=91afdbf0b8&color=7877e6&title=0&byline=0&portrait=0"
        className="video-iframe"
        frameBorder="0"
      ></iframe>

      {/* <Vimeo video="829882661" className="vimeo-embed" /> */}

      <div className="text-block">
        <p>
          Mekanika is the world's first robotic puppet rock band, conceived as a 'family project'; a collaboration
          between David R. Valeiras and Cabeza Patata Studio.
        </p>
      </div>

      <img loading="lazy" src={mekanikaOnPictoplasmaImg} alt="Mekanika on Pictoplasma" className="img-full-width" />

      <div>
        <p>
          Here we document the creation process, including the robotics, puppetry, and their overlap, as well as the
          World Premiere at Pictoplasma Festival in Berlin, 2023.
        </p>
      </div>

      <div className="img-row">
        <img loading="lazy" src={musicBoxImg} id="img-mb" alt="Music Box Player" />
        <img loading="lazy" src={stageImg} id="img-stage" alt="The Stage at Pictoplasma" />
      </div>

      <div className="img-row">
        <img loading="lazy" src={glockenspielImg} id="img-gl" alt="Glockenspiel" />
        <img loading="lazy" src={drummerImg} id="img-drummer" alt="The Drummer" />
      </div>

      <div className="text-block">
        <p>
          Mekanika is a three-piece band made up of a Drummer, Metallophone player, and an interchangeable Music Box.
          The musicians are controlled with servo motors and have different movements that allow them to play a range of
          songs automatically.
        </p>
      </div>

      <div className="img-row">
        <img loading="lazy" src={mekanikaFromLeftImg} className="img-half" alt="Mekanika playing" />
        <img loading="lazy" src={mekanikaFromRightImg} className="img-half" alt="Mekanika playing" />
      </div>
      <div className="img-row">
        <img loading="lazy" src={patchImg} id="img-patch" alt="Patch on the character" />
        <img loading="lazy" src={hiHatImg} id="img-HH" alt="HiHat" />
      </div>

      <div className="text-block">
        <p>
          The concert experience is interactive so that, as well as watching the puppets play their instruments, the
          audience can control the music and light show themself.
        </p>
      </div>

      <img loading="lazy" src={controllerImg} alt="MIDI controller" className="img-full-width" />

      <div className="text-block">
        <p>
          A MIDI Keyboard stands in front of the stage so any audience member can control the tempo and intensity of the
          music and lights, as well as the different displays on LED panels. They can even become a digital puppet
          master, holding up different characters' arms to pause the play.
        </p>
      </div>

      <div className="img-row">
        <img loading="lazy" src={glockenspiel2Img} className="img-glmb2" alt="Glockenspiel player" />
        <img loading="lazy" src={musicBox2Img} className="img-glmb2" alt="Music box player" />
        <img loading="lazy" src={bandImg} id="img-band" alt="Music box player" />
      </div>

      <div className="text-block">
        <p>
          Everything is programmed with Arduinos, allowing the flexibility to adjust the programming and allow for
          different types of interactions and musical encounters.
        </p>
      </div>

      <div className="img-row">
        <img loading="lazy" src={flagImg} id="img-flag" alt="Embroidered flag" />
        <img loading="lazy" src={mekanikaFromTheFrontImg} id="img-front" alt="Mekanika playing" />
        <img loading="lazy" src={drummerCloseupImg} id="img-dr2" alt="Drummer" />
      </div>

      <div className="img-row">
        <img loading="lazy" src={geniusAtWorkImg} id="img-david" alt="David working" />
        <img loading="lazy" src={stageBuildersImg} id="img-stage2" alt="The stage being built" />
      </div>

      <div className="text-block">
        <p>
          The creation of Mekanika was a complex one, mixing programming, robotics, and puppetry, often going back and
          forth between the disciplines to ensure the band played with quality and consistency while keeping a tactile
          and approachable aesthetic.
        </p>
      </div>

      <div className="img-row">
        <img loading="lazy" src={katieWithDrummerImg} id="img-katie" alt="Katie working on the drummer" />
        <img loading="lazy" src={drummerHeadImg} id="img-drummer-head" alt="Head of the drummer" />
        <img loading="lazy" src={mbHeadImg} id="img-mb-head" alt="Head of the music box player" />
      </div>

      <div className="img-row">
        <img loading="lazy" src={person1PlayingImg} className="img-half" alt="Somebody playing with the band" />
        <img loading="lazy" src={person2PlayingImg} className="img-half" alt="Somebody playing with the band" />
      </div>

      <div className="text-block">
        <p>
          As satisfying as it was to see the band come alive in our studio, experiencing the public's reaction to
          Mekanika brought such joy and summed up perfectly the reason for creating something never before seen and the
          real rewards for creativity and perseverance.
        </p>
      </div>

      <div className="img-row">
        <img loading="lazy" src={kid1PlayingImg} id="img-kid1" alt="A kid playing with the band" />
        <img loading="lazy" src={kid2PlayingImg} id="img-kid2" alt="A kid playing with the band" />
      </div>
      <br />
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .vimeo-embed {
    width: 100%;
  }
`;

export default Mekanika;
