import type { DetailedData } from "../../type";
import type { ICreditsResponse } from "./components/seriesCast/type";
import MovieInfo from "./components/movieInfo/MovieInfo";
import SeriesCast from "./components/seriesCast/SeriesCast";

interface ContentWrapperProps {
  detailedData: DetailedData;
  credits?: ICreditsResponse | undefined;
  creditsLoading?: boolean;
}

function ContentWrapper({
  detailedData,
  credits,
  creditsLoading,
}: ContentWrapperProps) {
  return (
    <section className="width-stack-xy flex justify-between">
      <div className="overflow-hidden mr-7">
        <SeriesCast credits={credits} loading={creditsLoading} />
      </div>
      <div className="min-w-65">
        <MovieInfo detailedData={detailedData} />
      </div>
    </section>
  );
}

export default ContentWrapper;
