import React from "react";
import styled from "styled-components";

const PequenaBandaRobotica: React.FC = () => {
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
      <div className="img-row">
        <img
          loading="lazy"
          src="/assets/images/PBR/Prettier-band.jpg"
          alt="The Pequeña Banda Robotica"
          className="img-full-width"
        />
      </div>

      <br />
      <button className="read-more-less" id="btn-pequena-banda-robotica-more">
        Read more...
      </button>
      <br />

      <div id="pequena-banda-robotica-2">
        <p>
          The aim of creating the Pequeña Banda Robótica is to make robotics more approachable and move towards
          facilitating access to learning.
        </p>

        <div className="img-row">
          <img loading="lazy" src="/assets/images/PBR/Prettier-drummer.jpg" className="img-third" alt="The drummer" />
          <img
            loading="lazy"
            src="/assets/images/PBR/Prettier-glock.jpg"
            className="img-third"
            alt="The glockenspiel"
          />
          <img
            loading="lazy"
            src="/assets/images/PBR/Prettier-vocal-section.jpg"
            className="img-third"
            alt="The vocal section"
          />
        </div>

        <iframe
          loading="lazy"
          src="https://www.youtube.com/embed/dNsn_Z9T3mk"
          className="video-iframe"
          title="Mr Sandman"
        ></iframe>

        <h2>The Drummer</h2>

        <div className="text-block">
          <p>
            The band's first musician, kickstarting the whole project. The sound from the snare and the kick is captured
            by piezoelectric sensors, and digitally processed to enhance its sound.
          </p>
        </div>

        <video className="vertical-video" controls>
          <source src="/assets/videos/PBR/Sound-processing.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <h2>The Glockenspiel</h2>

        <div className="text-block">
          <p>
            A glockenspiel is a type of metallophone, consisting of pitched metallic bars, usually arranged in a
            keyboard layout. In our version they are placed in a semicircular positioning to simplify the mechanical
            requirements.
          </p>
        </div>

        <video className="vertical-video" controls>
          <source src="/assets/videos/PBR/Harry.mp4" type="video/mp4" />
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
          <source src="/assets/videos/PBR/Vocal-section.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <h2>The code</h2>

        <div className="text-block">
          <p>
            The Pequeña Banda Robótica is an open-source project, and its code is fully available in
            <a href="https://github.com/valeiras" target="_blank">
              my GitHub account.
            </a>
          </p>
        </div>
        <button className="read-more-less" id="btn-pequena-banda-robotica-less">
          <a href="#pequena-banda-robotica">Read less...</a>
        </button>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section``;

export default PequenaBandaRobotica;
