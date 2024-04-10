import React from "react";
import styled from "styled-components";

const ChooseYourOwnSong: React.FC = () => {
  return (
    <Wrapper id="choose-your-own-song">
      <h1 className="section-title">Choose your own song</h1>
      <div className="text-block">
        <p>
          Dado a la duda (pun intended, but extremely hard to translate) is a very ambitious project: a "choose your own
          adventure" in song form. With eleven different endings, its lyrics take as many as thirty nine pages.
        </p>
      </div>

      <iframe
        loading="lazy"
        src="https://www.youtube.com/embed/bP9x0btYrzM"
        className="video-iframe"
        title="Dado a la duda"
      ></iframe>

      <br />
      <br />
      <button className="read-more-less" id="btn-dald-more">
        Read more...
      </button>

      <div id="dald-2">
        <div className="text-block">
          <p>
            This interactive project uses Youtube as a vehicle, giving the audience the ability to choose between
            different options at the end of each clip. The diagram below outlines the complexity of the task.
          </p>
        </div>

        <img loading="lazy" src="/assets/images/flux-diagram.png" alt="3D Pose Estimation" className="img-full-width" />

        <div className="text-block">
          <p>
            Every time the viewer chooses a video, a new branch is accessed. This invites the audience to replay the
            project to try and find the many possible endings.
          </p>
          <p>
            Dado a la Duda explores my interest in finding new ways of using technology; Youtube was not created for
            interactive experiences such as this, but the system allows for more than we might immediately expect - it's
            just about looking at it in a different way.
          </p>
          <p>
            The audience are using a platform they know for one thing, and experience an unexpected joy when finding it
            used for another.
          </p>
        </div>
        <br />
        <button className="read-more-less" id="btn-dald-less">
          <a href="#choose-your-own-song">Read less...</a>
        </button>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section``;

export default ChooseYourOwnSong;
