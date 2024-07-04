import { createHashRouter, RouterProvider } from "react-router-dom";
import { lazy } from "react";

const Home = lazy(() => import("./pages/Home"));
const Curriculum = lazy(() => import("./pages/Curriculum"));
const Portfolio = lazy(() => import("./pages/Portfolio/Portfolio"));
const Mekanika = lazy(() => import("./pages/Portfolio/Mekanika"));
const FullStack = lazy(() => import("./pages/Portfolio/FullStack"));
const PequenaBandaRobotica = lazy(() => import("./pages/Portfolio/PequenaBandaRobotica"));
const HouseHoldMusic = lazy(() => import("./pages/Portfolio/HouseHoldMusic"));
const PhD = lazy(() => import("./pages/Portfolio/PhD"));
const Music = lazy(() => import("./pages/Portfolio/Music"));
const ChooseYourOwnSong = lazy(() => import("./pages/Portfolio/ChooseYourOwnSong"));

const App: React.FC = () => {
  const router = createHashRouter([
    {
      path: "/",
      element: <Home />,
      children: [],
    },
    {
      path: "/curriculum",
      element: <Curriculum />,
    },
    {
      path: "/portfolio",
      element: <Portfolio />,
      children: [
        { path: "mekanika", element: <Mekanika /> },
        { path: "full-stack", element: <FullStack /> },
        { path: "pequena-banda-robotica", element: <PequenaBandaRobotica /> },
        { path: "household-music", element: <HouseHoldMusic /> },
        { path: "phd-neuromorphic-vision", element: <PhD /> },
        { path: "music", element: <Music /> },
        { path: "choose-your-own-song", element: <ChooseYourOwnSong /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
