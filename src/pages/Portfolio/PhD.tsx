import React from "react";
import styled from "styled-components";

const PhD: React.FC = () => {
  return (
    <Wrapper id="phd-neuromorphic-vision">
      <h1 className="section-title">PhD - Neuromorphic Vision</h1>
      <div className="text-block">
        <p>
          I completed my PhD at the Institut de la Vision, Paris. The main focus of my research was the development of
          new algorithms for neuromorphic event-based cameras.
        </p>
        <p>
          My thesis, titled "Event-Based Detection and Tracking", is available to read
          <a href="https://theses.hal.science/tel-01727349" target="_blank">
            here.
          </a>
        </p>
      </div>

      <iframe
        loading="lazy"
        src="https://www.youtube.com/embed/feBozLYZhB8"
        className="video-iframe"
        title="Event-Based 3D pose estimation"
      ></iframe>

      <button className="read-more-less" id="btn-phd-more">
        Read more...
      </button>

      <div id="phd-2">
        <h2>Publications</h2>
        <br />
        <ul className="dashes">
          <li>
            Reverter Valeiras, D., Clady, X., Ieng, S. H., & Benosman, R. B. (2018). “
            <a href="https://ieeexplore.ieee.org/abstract/document/8463622" target="_blank">
              Event-Based Line Fitting and Segment Detection using a Neuromorphic Visual Sensor
            </a>
            ”. IEEE Transactions on Neural Networks and Learning Systems.
          </li>

          <li>
            Reverter Valeiras, D., Kime, S., Ieng, S. H., & Benosman, R. B. (2016). “
            <a href="https://www.frontiersin.org/articles/10.3389/fnins.2016.00208/full" target="_blank">
              An Event-Based Solution to the Perspective-n-Point Problem
            </a>
            ”. Frontiers in Neuroscience.
          </li>

          <li>
            Reverter Valeiras, D., Orchard, G., Ieng, S. H., & Benosman, R. (2016). “
            <a href="https://www.frontiersin.org/articles/10.3389/fnins.2015.00522/full" target="_blank">
              Neuromorphic Event-Based 3D Pose Estimation
            </a>
            ”. Frontiers in Neuroscience.
          </li>

          <li>
            Akolkar H., Reverter Valeiras D., Benosman, R., & Bartolozzi, C. (2015). “
            <a href="" target="_blank">
              Visual-Auditory saliency detection using event-driven visual sensors
            </a>
            ”. IEEE 2015 International Conference on Event-based Control, Communication, and Signal Processing (EBCCSP).
          </li>

          <li>
            Reverter Valeiras, D., Lagorce, X., Clady, X., Bartolozzi, C., Ieng, S. H., & Benosman, R. (2015). “
            <a href="https://ieeexplore.ieee.org/abstract/document/7063246" target="_blank">
              An Asynchronous Neuromorphic Event-Driven Visual Part-Based Shape Tracking
            </a>
            ”. IEEE Transactions on Neural Networks and Learning Systems.
          </li>
        </ul>

        <img
          loading="lazy"
          src="/assets/images/PhD\Pose-estimation.png"
          alt="3D Pose Estimation"
          className="img-full-width"
        />

        <h2>Conferences, Workshops and Stays</h2>
        <br />
        <ul className="dashes">
          <li>04/27/2014 - 04/11/2014: The CapoCaccia Workshops toward Neuromorphic Intelligence. Alghero, Itally.</li>
          <li>06/08/2015 - 07/18/2015: Telluride Neuromorphic Cognition Engineering Workshop. Telluride, Colorado.</li>
          <li>
            02/20/2015 - 03/19/2015: research collaboration with the SINAPSE Institute, National University of
            Singapore.
          </li>
        </ul>
        <button className="read-more-less" id="btn-phd-less">
          <a href="#phd-neuromorphic-vision">Read less...</a>
        </button>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section``;

export default PhD;
