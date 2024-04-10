import React from "react";
import styled from "styled-components";

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

      <iframe
        loading="lazy"
        src="https://www.youtube.com/embed/fnRCxRtJDMs"
        className="video-iframe"
        title="Household music Vol III"
      ></iframe>
      <br />

      <br />
      <button className="read-more-less" id="btn-household-music-more">
        Read more...
      </button>
      <br />

      <div id="household-music-2">
        <div className="text-block">
          <p>
            The aim of this project is to showcase how anything can become an instrument. It brings back the childhood
            wonder of searching for music and experimenting with everything.
          </p>
        </div>

        <iframe
          loading="lazy"
          src="https://www.youtube.com/embed/3eepl7VwVts"
          className="video-iframe"
          title="Household music Vol III"
        ></iframe>
        <br />

        <div className="text-block">
          <p>
            The educational potential of this project is particularly interesting. Often we're accustomed to believe
            that musical instruments have to be professionally manufactured but, if we go to root of it, we see that
            simple modifications in an object can produce different musical notes. For example, the amount of water in a
            glass dictates the tone of a drip falling, or the tension of a rubber band can act as a homemade bass
            guitar.
          </p>
        </div>

        <iframe
          loading="lazy"
          src="https://www.youtube.com/embed/tVUjKA8dVQA"
          className="video-iframe"
          title="Household music Vol III"
        ></iframe>
        <br />
        <button className="read-more-less" id="btn-household-music-less">
          <a href="#household-music">Read less...</a>
        </button>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section``;

export default HouseHoldMusic;
