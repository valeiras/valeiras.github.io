import React from "react";

import { CVContextProvider } from "../components/Curriculum/context";
import { CVLayout } from "../components/Curriculum";

const Curriculum: React.FC = () => {
  return (
    <CVContextProvider>
      <CVLayout />
    </CVContextProvider>
  );
};

export default Curriculum;
