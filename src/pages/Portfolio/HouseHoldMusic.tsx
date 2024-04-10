import React from "react";
import styled from "styled-components";

import LiteYouTubeEmbed from "react-lite-youtube-embed";
import "react-lite-youtube-embed/dist/LiteYouTubeEmbed.css";

const HouseHoldMusic: React.FC = () => {
  return (
    <Wrapper id="household-music">
      <h1 className="section-title">Household Music</h1>
      <div className="text-block">
        <p>
          Passion for music, Sound Processing and DIY projects come together in this project: Household Music. Creating
          music using simple, day-to-day objects available around the house.
        </p>
      </div>

      <LiteYouTubeEmbed id="fnRCxRtJDMs" title="Household music Vol III" noCookie={true} />

      <div className="text-block">
        <p>
          The aim of this project is to showcase how anything can become an instrument. It brings back the childhood
          wonder of searching for music and experimenting with everything.
        </p>
      </div>

      <LiteYouTubeEmbed id="3eepl7VwVts" title="Household music Vol II" noCookie={true} />

      <div className="text-block">
        <p>
          The educational potential of this project is particularly interesting. Often we're accustomed to believe that
          musical instruments have to be professionally manufactured but, if we go to root of it, we see that simple
          modifications in an object can produce different musical notes. For example, the amount of water in a glass
          dictates the tone of a drip falling, or the tension of a rubber band can act as a homemade bass guitar.
        </p>
      </div>

      <LiteYouTubeEmbed id="tVUjKA8dVQA" title="Household music Vol I" noCookie={true} />
    </Wrapper>
  );
};

const Wrapper = styled.section``;

export default HouseHoldMusic;
