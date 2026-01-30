import { useFetchCredits, useFetchDetails } from "@/hooks/hooks";
import CastColumn from "./components/castColumn/CastColumn";
import CrewColumn from "./components/crewColumn/CrewColumn";
import { useNavigate, useParams } from "react-router-dom";
import getTmdbImage from "@/utils/getTmdbImages";
import { format } from "date-fns";
import LoadingDialog from "@/components/loadingDialog/LoadingDialog";

function CastNCrew() {
  const { type, id } = useParams<{ type: "movie" | "tv"; id: string }>();
  const navigate = useNavigate();
  const typeSafe: "movie" | "tv" =
    type === "movie" || type === "tv" ? type : "movie";

  const { data, isLoading } = useFetchCredits(typeSafe, id);
  const { data: detailsData, isLoading: isDetailsLoading } = useFetchDetails(
    typeSafe,
    id,
  );

  const title = typeSafe === "movie" ? detailsData?.title : detailsData?.name;

  const year =
    typeSafe === "movie"
      ? format(new Date(detailsData?.release_date || ""), "yyyy")
      : format(new Date(detailsData?.first_air_date || ""), "yyyy");

  console.log(data);
  if (isLoading || isDetailsLoading)
    return <LoadingDialog open={isLoading || isDetailsLoading} />;
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className=" bg-linear-to-r from-black/80 to-black/40 text-white flex items-center">
        <div className="width-stack  mx-auto w-full  flex items-center gap-4">
          <img
            src={getTmdbImage(detailsData?.poster_path || "")}
            className="rounded w-14.5 h-21.75 object-cover my-4"
          />
          <div>
            <h1 className="text-xl font-semibold">
              The {title} <span className="opacity-70">({year})</span>
            </h1>
            <p
              className="text-sm opacity-70 font-bold cursor-pointer hover:underline"
              onClick={() => navigate(-1)}
            >
              &larr; Back to main
            </p>
          </div>
        </div>
      </div>

      {/* Content */}
      <section className="width-stack-xy mx-auto px-6 py-10 flex gap-12">
        <CastColumn data={data?.cast ?? []} />
        <CrewColumn data={data?.crew ?? []} />
      </section>
    </div>
  );
}

export default CastNCrew;
