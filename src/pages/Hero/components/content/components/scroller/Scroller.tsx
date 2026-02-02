import type { IScroller } from "@/types/types";
import getTmdbImage from "@/utils/getTmdbImages";
import { Link } from "react-router-dom";
import { format } from "date-fns";
import ScrollerSkeleton from "./ScrollerSkeleton";
import { memo } from "react";

const computeValue = (vote: number | undefined) => {
  const v = Math.ceil((vote as number) * 10) || 0;
  return v;
};

const getColor = (vote: number | undefined) => {
  const value = computeValue(vote);
  if (value > 0 && value < 30) return "red";
  if (value >= 30 && value < 70) return "yellow";
  return "green";
};

function Scroller<T extends IScroller>({
  data,
  isLoading,
}: {
  data: T[] | undefined;
  isLoading: boolean | undefined;
}) {
  if (isLoading) {
    return <ScrollerSkeleton />;
  }

  return (
    <div className="flex flex-nowrap overflow-x-auto w-full gap-4 py-4  my-5">
      {data?.map((item) => {
        const value = computeValue(item.vote_average);
        const color = getColor(item.vote_average);
        const borderClass =
          color == "red"
            ? "border-red-500"
            : color == "yellow"
              ? "border-yellow-300"
              : "border-green-500";

        const formattedDate = format(
          new Date(item.release_date || item.first_air_date || new Date()),
          "PP",
        );

        return (
          <div key={item.id} className="">
            <Link to={`/details/${item.media_type}/${item.id}`}>
              <div className="min-w-37.5 h-56.25 rounded-md overflow-hidden">
                <img
                  src={getTmdbImage(item.poster_path, "w780")}
                  alt={item.title || item.name}
                  className="h-full w-full "
                />
              </div>
              <div className=" text-white primary-bg size-15 rounded-full   p-1  relative -mt-9 ml-3">
                <div
                  className={`border-4 h-full w-full rounded-full flex items-center justify-center
                  ${borderClass} `}
                >
                  <div className="text-sm">{value}</div>
                  <span className="font-semibold text-[10px] mb-2">%</span>
                </div>
              </div>
            </Link>
            <div className="my-2 mt-6">
              <Link to={`/details/${item.media_type}/${item.id}`}>
                <h3 className="text-[1rem] font-bold mt-2 hover:text-blue-400 hover:underline ">
                  {item.title || item.name}
                </h3>
              </Link>
              <p className="text-[1rem] text-muted-foreground">
                {formattedDate}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default memo(Scroller);
