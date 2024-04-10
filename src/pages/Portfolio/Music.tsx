import React from "react";
import styled from "styled-components";

const Music: React.FC = () => {
  return (
    <Wrapper id="music">
      <h1 className="section-title">Music</h1>

      <div className="text-block">
        <p>
          I like to cover every aspect of music, including writing and performance. Both solo and collaborations, my
          style focuses primarily on the meaning behind the songs whether that's the writing itself or the general
          musicianship.
        </p>
      </div>

      <iframe
        loading="lazy"
        src="https://www.youtube.com/embed/o-j_eMU2TzE"
        className="video-iframe"
        title="Un miercoles festivo"
      ></iframe>

      <br />
      <br />
      <button className="read-more-less" id="btn-music-more">
        Read more...
      </button>

      <div id="music-2">
        <h2>Open Mic</h2>
        <div className="text-block">
          <p>
            As the host of the Open Mic sessions in the iconic "La Tertulia" in Granada, I have the opportunity to
            invite many varied and talented musicians to the stage and, as is always enjoyable, interact with the
            audience.
          </p>
        </div>

        <iframe
          loading="lazy"
          src="https://www.youtube.com/embed/cs_lzk1qbhw"
          className="video-iframe"
          title="Hartazgo"
        ></iframe>

        <h2>Live shows</h2>
        <div className="text-block">
          <p>
            Live performances are always special experiences and give the opportunity to share music with others. I've
            travelled around Spain, performing to varied audiences.
          </p>
        </div>

        <div className="list-container">
          <ul className="no-bullets">
            <li>La Tertulia (Granada)</li>
            <li>La Casa Vieja (Albacete)</li>
            <li>Centro Lucini (Granada)</li>
            <li>La Polivalente (Málaga)</li>
            <li>Café Cultural Auriense (Ourense)</li>
            <li>Café UF (Vigo)</li>
            <li>Fusión Art (Valencia)</li>
            <li>El refugio (Alicante)</li>
            <li>El Taller Tumbao (Alicante)</li>
            <li>Club Cronopios (Barcelona)</li>
          </ul>

          <ul className="no-bullets">
            <li>Sala Búho Real (Madrid)</li>
            <li>A Novena Porta (Santiago de Compostela)</li>
            <li>Caneca Furada (A Coruña)</li>
            <li>Café Jam Session (Ourense)</li>
            <li>La recicreativa (Granada)</li>
            <li>N del T (Madrid)</li>
            <li>Hangar 48 (Madrid)</li>
            <li>Kaf Café Benimaclet (Valencia)</li>
            <li>O Besbello (Santiago de Compostela)</li>
            <li>A Taberna do Jazz (Pontevedra)</li>
          </ul>
        </div>

        <iframe
          loading="lazy"
          src="https://www.youtube.com/embed/Z6gGRjG9QDY"
          className="video-iframe"
          title="Abajo las banderas"
        ></iframe>
        <br />
        <br />
        <button className="read-more-less" id="btn-music-less">
          <a href="#music">Read less...</a>
        </button>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section``;

export default Music;
