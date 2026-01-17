import { createBrowserRouter } from "react-router-dom";

import App from "@/App";
import Detailedpage from "@/pages/detailedpage/Detailedpage";
import Hero from "@/pages/Hero/Hero";

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
    ],
  },
]);

export default router;
