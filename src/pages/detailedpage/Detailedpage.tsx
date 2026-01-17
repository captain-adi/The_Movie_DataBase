import "./index.css";
import { useParams } from "react-router-dom";

import DetailedOverview from "./components/detailedOverview/DetailedOverview";
import ContentWrapper from "./components/contentWrapper/ContentWrapper";
import { useFetchDetails } from "@/hooks/hooks";

type RouteParams = {
  type: "tv" | "movie";
  id: string;
};

function Detailedpage() {
  const params = useParams<RouteParams>();

  const { type, id } = params;

  const {
    data: detailedData,
    isLoading,
    isError,
  } = useFetchDetails(type == "movie" ? "movie" : "tv", id!);
  if (isLoading) return <div>Loading...</div>;
  if (isError || !detailedData) return <div>Error loading data.</div>;

  return (
    <div>
      <DetailedOverview detailedData={detailedData} />
      <ContentWrapper />
    </div>
  );
}

export default Detailedpage;
