import { createContext, useState, useContext, useRef } from "react";

type PortfolioContext = {
  showLinks: boolean;
  setShowLinks: React.Dispatch<React.SetStateAction<boolean>>;
  isGalleryActive: boolean;
  setIsGalleryActive: React.Dispatch<React.SetStateAction<boolean>>;
  galleryRef: React.RefObject<HTMLDivElement>;
  handleImageClick: (src: string) => void;
} | null;

const PortfolioContext = createContext<PortfolioContext>(null);

// eslint-disable-next-line react-refresh/only-export-components
export const usePortofolioContext = () => {
  return useContext(PortfolioContext);
};

export const PortfolioContextProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [showLinks, setShowLinks] = useState(false);
  const galleryRef = useRef<HTMLDivElement>(null);

  const [isGalleryActive, setIsGalleryActive] = useState<boolean>(false);

  const handleImageClick = (src: string) => {
    if (galleryRef.current) {
      setIsGalleryActive(true);
      galleryRef.current.style.backgroundImage = "url(" + src + ")";
      galleryRef.current.style.top = window.scrollY + "px";
      galleryRef.current.style.height = window.outerHeight + "px";
      document.body.style.overflowY = "hidden";
    }
  };

  return (
    <PortfolioContext.Provider
      value={{
        showLinks,
        setShowLinks,
        isGalleryActive,
        setIsGalleryActive,
        galleryRef,
        handleImageClick,
      }}
    >
      {children}
    </PortfolioContext.Provider>
  );
};
