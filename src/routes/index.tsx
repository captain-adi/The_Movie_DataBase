import { createBrowserRouter } from "react-router-dom";
import { lazy, Suspense } from "react";

const SearchResult = lazy(() => import("@/pages/searchResult/SearchResult"));
const LoadingDialog = lazy(
  () => import("@/components/loadingDialog/LoadingDialog"),
);
const App = lazy(() => import("@/App"));
const Detailedpage = lazy(() => import("@/pages/detailedpage/Detailedpage"));
const Hero = lazy(() => import("@/pages/Hero/Hero"));
const CastNCrew = lazy(() => import("@/pages/castNcrew/CastNCrew"));
const PersonDetails = lazy(
  () => import("@/pages/personDetailes/PersonDetails"),
);

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={<LoadingDialog open={true} />}>
        <App />
      </Suspense>
    ),
    children: [
      {
        path: "/",
        element: (
          <Suspense fallback={<div>Loading ....</div>}>
            <Hero />
          </Suspense>
        ),
        // action: homeAction,
      },
      {
        path: "/details/:type/:id",
        element: (
          <Suspense fallback={<div>Loading ....</div>}>
            <Detailedpage />
          </Suspense>
        ),
      },
      {
        path: "/cast&crew/:type/:id/cast",
        element: (
          <Suspense fallback={<div>Loading ....</div>}>
            <CastNCrew />
          </Suspense>
        ),
      },
      {
        path: "/person/:id",
        element: (
          <Suspense fallback={<div>Loading ....</div>}>
            <PersonDetails />
          </Suspense>
        ),
      },
      {
        path: "/search",
        element: (
          <Suspense fallback={<LoadingDialog open={true} />}>
            <SearchResult />
          </Suspense>
        ),
      },
    ],
  },
]);

export default router;
