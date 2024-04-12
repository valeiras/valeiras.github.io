import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import LiteYouTubeEmbed from "react-lite-youtube-embed";
import "react-lite-youtube-embed/dist/LiteYouTubeEmbed.css";

import poseEstimationImg from "../..//assets/images/PhD/Pose-estimation.png";
import { usePortofolioContext } from "../../components/Portfolio/context";

const PhD: React.FC = () => {
  const context = usePortofolioContext();
  if (context === null) throw new Error("Porfolio context if missing");
  const { handleImageClick } = context;

  return (
    <Wrapper id="phd-neuromorphic-vision">
      <h1 className="section-title">PhD - Neuromorphic Vision</h1>
      <div className="text-block">
        <p>
          I completed my PhD at the Institut de la Vision, Paris. The main focus of my research was the development of
          new algorithms for neuromorphic event-based cameras. My thesis, titled "Event-Based Detection and Tracking",
          is available to read{" "}
          <Link to="https://theses.hal.science/tel-01727349" target="_blank">
            here.
          </Link>
        </p>
      </div>

      <div className="youtube-lite-container">
        <LiteYouTubeEmbed id="feBozLYZhB8" title="Event-Based 3D pose estimation" noCookie={true} />
      </div>

      <h2>Publications</h2>
      <br />
      <ul className="dashes">
        <li>
          Reverter Valeiras, D., Clady, X., Ieng, S. H., & Benosman, R. B. (2018). “
          <Link to="https://ieeexplore.ieee.org/abstract/document/8463622" target="_blank">
            Event-Based Line Fitting and Segment Detection using a Neuromorphic Visual Sensor
          </Link>
          ”. IEEE Transactions on Neural Networks and Learning Systems.
        </li>

        <li>
          Reverter Valeiras, D., Kime, S., Ieng, S. H., & Benosman, R. B. (2016). “
          <Link to="https://www.frontiersin.org/articles/10.3389/fnins.2016.00208/full" target="_blank">
            An Event-Based Solution to the Perspective-n-Point Problem
          </Link>
          ”. Frontiers in Neuroscience.
        </li>

        <li>
          Reverter Valeiras, D., Orchard, G., Ieng, S. H., & Benosman, R. (2016). “
          <Link to="https://www.frontiersin.org/articles/10.3389/fnins.2015.00522/full" target="_blank">
            Neuromorphic Event-Based 3D Pose Estimation
          </Link>
          ”. Frontiers in Neuroscience.
        </li>

        <li>
          Akolkar H., Reverter Valeiras D., Benosman, R., & Bartolozzi, C. (2015). “
          <Link to="" target="_blank">
            Visual-Auditory saliency detection using event-driven visual sensors
          </Link>
          ”. IEEE 2015 International Conference on Event-based Control, Communication, and Signal Processing (EBCCSP).
        </li>

        <li>
          Reverter Valeiras, D., Lagorce, X., Clady, X., Bartolozzi, C., Ieng, S. H., & Benosman, R. (2015). “
          <Link to="https://ieeexplore.ieee.org/abstract/document/7063246" target="_blank">
            An Asynchronous Neuromorphic Event-Driven Visual Part-Based Shape Tracking
          </Link>
          ”. IEEE Transactions on Neural Networks and Learning Systems.
        </li>
      </ul>

      <img
        loading="lazy"
        src={poseEstimationImg}
        alt="3D Pose Estimation"
        className="img-half"
        onClick={() => {
          handleImageClick(poseEstimationImg);
        }}
      />

      <h2>Conferences, Workshops and Stays</h2>
      <br />
      <ul className="dashes">
        <li>04/27/2014 - 04/11/2014: The CapoCaccia Workshops toward Neuromorphic Intelligence. Alghero, Itally.</li>
        <li>06/08/2015 - 07/18/2015: Telluride Neuromorphic Cognition Engineering Workshop. Telluride, Colorado.</li>
        <li>
          02/20/2015 - 03/19/2015: research collaboration with the SINAPSE Institute, National University of Singapore.
        </li>
      </ul>
    </Wrapper>
  );
};

const Wrapper = styled.section``;

export default PhD;
