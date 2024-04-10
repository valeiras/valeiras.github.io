import React, { useState } from "react";
import styled from "styled-components";

const LazyEmail = React.lazy(() => import("./Email"));

const HiddenEmail: React.FC = () => {
  const [showEmail, setShowEmail] = useState(false);
  const email = showEmail ? (
    <LazyEmail />
  ) : (
    <button
      onClick={() => {
        setShowEmail(true);
      }}
    >
      Show email
    </button>
  );
  return (
    <React.Suspense fallback={<div>loading...</div>}>
      <Wrapper>{email}</Wrapper>
    </React.Suspense>
  );
};

const Wrapper = styled.div`
  button {
    font-family: inherit;
    font-size: inherit;
    color: inherit;
    border: none;
    background: none;
    cursor: pointer;
    text-align: left;
  }
`;

export default HiddenEmail;
