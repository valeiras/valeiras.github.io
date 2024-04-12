import styled from "styled-components";
import { usePortofolioContext } from "../../components/Portfolio/context";

import ImageRow from "./../../components/Portfolio/ImageRow";
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
  const context = usePortofolioContext();
  if (context === null) throw new Error("Porfolio context if missing");
  const { handleImageClick } = context;

  return (
    <Wrapper id="mekanika">
      <h1 className="section-title">Mekanika</h1>

      <iframe
        loading="lazy"
        src="https://player.vimeo.com/video/829882661?h=91afdbf0b8&color=7877e6&title=0&byline=0&portrait=0"
        className="video-iframe"
        frameBorder="0"
      ></iframe>

      <div className="text-block">
        <p>
          Mekanika is the world's first robotic puppet rock band, conceived as a 'family project'; a collaboration
          between David R. Valeiras and Cabeza Patata Studio.
        </p>
      </div>

      <ImageRow
        handleClick={handleImageClick}
        imageSources={[{ src: mekanikaOnPictoplasmaImg, alt: "Mekanika on Pictoplasma" }]}
      />

      <div>
        <p>
          Here we document the creation process, including the robotics, puppetry, and their overlap, as well as the
          World Premiere at Pictoplasma Festival in Berlin, 2023.
        </p>
      </div>

      <ImageRow
        handleClick={handleImageClick}
        imageSources={[
          { src: musicBoxImg, alt: "Music Box Player" },
          { src: stageImg, alt: "The Stage at Pictoplasma" },
        ]}
      />
      <ImageRow
        handleClick={handleImageClick}
        imageSources={[
          { src: glockenspielImg, alt: "Glockenspiel" },
          { src: drummerImg, alt: "The Drummer" },
        ]}
      />

      <div className="text-block">
        <p>
          Mekanika is a three-piece band made up of a Drummer, Metallophone player, and an interchangeable Music Box.
          The musicians are controlled with servo motors and have different movements that allow them to play a range of
          songs automatically.
        </p>
      </div>

      <ImageRow
        handleClick={handleImageClick}
        imageSources={[
          { src: mekanikaFromLeftImg, alt: "Mekanika playing" },
          { src: mekanikaFromRightImg, alt: "Mekanika playing" },
        ]}
      />
      <ImageRow
        handleClick={handleImageClick}
        imageSources={[
          { src: patchImg, alt: "Patch on the character" },
          { src: hiHatImg, alt: "HiHat" },
        ]}
      />

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

      <ImageRow
        handleClick={handleImageClick}
        imageSources={[
          { src: glockenspiel2Img, alt: "Glockenspiel player" },
          { src: musicBox2Img, alt: "Music box player" },
          { src: bandImg, alt: "The band playing" },
        ]}
      />

      <div className="text-block">
        <p>
          Everything is programmed with Arduinos, allowing the flexibility to adjust the programming and allow for
          different types of interactions and musical encounters.
        </p>
      </div>

      <ImageRow
        handleClick={handleImageClick}
        imageSources={[
          { src: flagImg, alt: "Embroidered flag" },
          { src: mekanikaFromTheFrontImg, alt: "Mekanika playing" },
          { src: drummerCloseupImg, alt: "Drummer" },
        ]}
      />

      <ImageRow
        handleClick={handleImageClick}
        imageSources={[
          { src: geniusAtWorkImg, alt: "David working" },
          { src: stageBuildersImg, alt: "The stage being built" },
        ]}
      />

      <div className="text-block">
        <p>
          The creation of Mekanika was a complex one, mixing programming, robotics, and puppetry, often going back and
          forth between the disciplines to ensure the band played with quality and consistency while keeping a tactile
          and approachable aesthetic.
        </p>
      </div>

      <ImageRow
        handleClick={handleImageClick}
        imageSources={[
          { src: katieWithDrummerImg, alt: "Katie working on the drummer" },
          { src: drummerHeadImg, alt: "Head of the drummer" },
          { src: mbHeadImg, alt: "Head of the music box player" },
        ]}
      />

      <ImageRow
        handleClick={handleImageClick}
        imageSources={[
          { src: person1PlayingImg, alt: "Somebody playing with the band" },
          { src: person2PlayingImg, alt: "Somebody playing with the band" },
        ]}
      />

      <div className="text-block">
        <p>
          As satisfying as it was to see the band come alive in our studio, experiencing the public's reaction to
          Mekanika brought such joy and summed up perfectly the reason for creating something never before seen and the
          real rewards for creativity and perseverance.
        </p>
      </div>

      <ImageRow
        handleClick={handleImageClick}
        imageSources={[
          { src: kid1PlayingImg, alt: "A kid playing with the band" },
          { src: kid2PlayingImg, alt: "A kid playing with the band" },
        ]}
      />
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .vimeo-embed {
    width: 100%;
  }
`;

export default Mekanika;
