import { createBrowserRouter } from "react-router-dom";

import App from "@/App";
import Detailedpage from "@/pages/detailedpage/Detailedpage";
import Hero from "@/pages/Hero/Hero";
import CastNCrew from "@/pages/castNcrew/CastNCrew";
import PersonDetails from "@/pages/personDetailes/PersonDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Hero />,
      },
      {
        path: "/details/:type/:id",
        element: <Detailedpage />,
      },
      {
        path: "/cast&crew/:type/:id/cast",
        element: <CastNCrew />,
      },
      {
        path: "/person/:id",
        element: <PersonDetails />,
      },
    ],
  },
]);

export default router;
