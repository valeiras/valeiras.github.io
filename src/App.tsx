import { createHashRouter, RouterProvider } from "react-router-dom";
import { Home, Curriculum, Portfolio, Layout } from "./pages/";
import {
  Mekanika,
  FullStack,
  PequenaBandaRobotica,
  HouseHoldMusic,
  PhD,
  Music,
  ChooseYourOwnSong,
} from "./pages/Portfolio";

const App: React.FC = () => {
  const router = createHashRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
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
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
