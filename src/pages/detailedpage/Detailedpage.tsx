import "./index.css";
import { Suspense, lazy, memo } from "react";
import { useParams } from "react-router-dom";

const ContentWrapper = lazy(
  () => import("./components/contentWrapper/ContentWrapper"),
);
import DetailedOverviewSkeleton from "./components/skeletons/detailedOverviewSkeleton";

import { useFetchCredits, useFetchDetails } from "@/hooks/hooks";
import DetailedOverview from "./components/detailedOverview/DetailedOverview";
import type { IMovieDetails, ITvDetails } from "./type";

type RouteParams = {
  type: "tv" | "movie";
  id: string;
};

function Detailedpage() {
  const { type, id } = useParams<RouteParams>();
  const safeType = type === "movie" || type === "tv" ? type : "movie";
  const { data: detailedData, isLoading } = useFetchDetails(safeType, id);
  const { data: creditsData, isLoading: creditsLoading } = useFetchCredits(
    safeType,
    id,
  );

  if (isLoading) {
    return <DetailedOverviewSkeleton />;
  }

  return (
    <div>
      {safeType == "movie" ? (
        <DetailedOverview
          detailedData={detailedData as IMovieDetails}
          type="movie"
        />
      ) : (
        <DetailedOverview detailedData={detailedData as ITvDetails} type="tv" />
      )}

      {detailedData && (
        <Suspense
          fallback={<div className="h-40 animate-pulse bg-gray-800 mt-6" />}
        >
          <ContentWrapper
            detailedData={detailedData}
            credits={creditsData}
            creditsLoading={creditsLoading}
          />
        </Suspense>
      )}
    </div>
  );
}

export default memo(Detailedpage);
