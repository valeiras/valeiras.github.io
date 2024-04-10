import { createContext, useState, useContext } from "react";

type PortfolioContext = {
  showLinks: boolean;
  setShowLinks: React.Dispatch<React.SetStateAction<boolean>>;
};

const PortfolioContext = createContext<PortfolioContext>({ showLinks: false, setShowLinks: () => {} });

// eslint-disable-next-line react-refresh/only-export-components
export const usePortofolioContext = () => {
  return useContext(PortfolioContext);
};

export const PortfolioContextProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [showLinks, setShowLinks] = useState(false);

  return (
    <PortfolioContext.Provider
      value={{
        showLinks,
        setShowLinks,
      }}
    >
      {children}
    </PortfolioContext.Provider>
  );
};
