import { createContext, useState, useContext } from "react";

type CVContext = {
  isPrint: boolean;
  setIsPrint: React.Dispatch<React.SetStateAction<boolean>>;
} | null;

const CVContext = createContext<CVContext>(null);

// eslint-disable-next-line react-refresh/only-export-components
export const useCVContext = () => {
  return useContext(CVContext);
};

export const CVContextProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isPrint, setIsPrint] = useState(false);

  return (
    <CVContext.Provider
      value={{
        isPrint,
        setIsPrint,
      }}
    >
      {children}
    </CVContext.Provider>
  );
};
