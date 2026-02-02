import { Logs, Heart, Bookmark, Play } from "lucide-react";
import getTmdbImage from "@/utils/getTmdbImages";
import { format } from "date-fns";
import type { IMovieDetails, ITvDetails } from "../../type";

type DetailedOverviewProps =
  | {
      type: "movie";
      detailedData: IMovieDetails | undefined;
    }
  | {
      type: "tv";
      detailedData: ITvDetails | undefined;
    };

function DetailedOverview({ type, detailedData }: DetailedOverviewProps) {
  const averageVote = (vote: number | undefined) => {
    const value = Math.ceil((vote ?? 0) * 10);
    return value;
  };

  const title =
    type === "movie"
      ? detailedData?.original_title || detailedData?.title
      : detailedData?.original_name || detailedData?.name;

  const releaseDate =
    type === "movie"
      ? detailedData?.release_date
      : detailedData?.first_air_date;
  return (
    <div className="py-10 bg-center bg-no-repeat bg-red-500">
      <section className="width-stack flex">
        {/* Poster */}
        <div>
          <img
            src={getTmdbImage(detailedData?.poster_path || "")}
            alt={title}
            className="rounded-sm min-w-75 min-h-127.5"
          />
        </div>

        {/* Content */}
        <div className="pl-10 flex flex-col justify-center text-white">
          {/* Title */}
          <div>
            <h2 className="text-4xl font-semibold">
              {title}
              <span className="opacity-70 text-normal font-medium ml-2">
                ({format(new Date(releaseDate || ""), "yyyy")})
              </span>
            </h2>

            {/* Meta Info */}
            <div className="flex gap-2">
              <p className="border px-1 rounded-xs py-0 border-[rgba(255,255,255,0.6)] text-[rgba(255,255,255,0.6)] font-semibold">
                U/A 16+
              </p>
              <p>
                {detailedData?.genres?.map((genre) => genre.name).join(", ")}
              </p>
              {type === "movie" && <p>{detailedData?.runtime} min</p>}
            </div>
          </div>

          {/* Rating & Actions */}
          <div className="mt-6 flex items-center">
            <div className="circle primary-bg size-17 rounded-full text-xl font-semibold flex items-center justify-center">
              <div className="green-circle border-4 size-15 border-green-500 rounded-full flex items-center justify-center">
                <div>{averageVote(detailedData?.vote_average)}</div>
                <span className="font-semibold text-[10px] mb-2">%</span>
              </div>
            </div>
            <div className="font-bold ml-1">
              User
              <br />
              Score
            </div>
            <div className="primary-bg py-2 rounded-4xl text-[16px] font-semibold pl-3 pr-2">
              What's your
              <span className="border-b-2 border-blue-400 ml-1">Vibe</span>?
            </div>
          </div>

          {/* Icon Buttons */}
          <ul className="mb-5 space-x-5 flex mt-2">
            <li className="size-11.5 primary-bg rounded-full flex justify-center items-center">
              <Logs size={14} />
            </li>
            <li className="size-11.5 primary-bg rounded-full flex justify-center items-center">
              <Heart size={14} />
            </li>
            <li className="size-11.5 primary-bg rounded-full flex justify-center items-center">
              <Bookmark size={14} />
            </li>
            <li className="flex justify-center items-center ml-1">
              <Play size={16} />
              <span className="ml-2 font-semibold">Play Trailer</span>
            </li>
          </ul>

          {/* Description */}
          <div>
            <h3 className="text-xl italic font-normal mb-5 text-[rgba(255,255,255,0.7)]">
              {detailedData?.tagline}
            </h3>
            <h2 className="my-2 text-xl font-semibold">Overview</h2>
            <p className="text-[16px] font-normal">{detailedData?.overview}</p>

            {/* TV Show Creators */}
            {type === "tv" && detailedData?.created_by && (
              <ol className="mt-5 flex">
                {detailedData?.created_by.map((creator) => (
                  <li key={creator.id} className="flex flex-col min-w-80.75">
                    <span className="font-semibold border-b text-sm w-fit">
                      {creator.name}
                    </span>
                    <span className="text-xs mt-1">Creator</span>
                  </li>
                ))}
              </ol>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

export default DetailedOverview;
