import type { IScroller } from "@/types/types";
import getTmdbImage from "@/utils/getTmdbImages";
import { Link } from "react-router-dom";
import { format } from "date-fns";
import ScrollerSkeleton from "./ScrollerSkeleton";

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
      {data?.map((item, index) => (
        <div key={index} className="">
          <Link to={`/details/${item.media_type}/${item.id}`}>
            <div className="min-w-37.5 h-56.25 rounded-md overflow-hidden">
              <img
                src={getTmdbImage(item.poster_path, "w780")}
                alt=""
                className="h-full w-full "
              />
            </div>
          </Link>
          <div className="my-2 mt-6">
            <Link to={`/details/${item.media_type}/${item.id}`}>
              <h3 className="text-[1rem] font-bold mt-2 hover:text-blue-400 hover:underline ">
                {item.title || item.name}
              </h3>
            </Link>
            <p className="text-[1rem] text-muted-foreground">
              {format(new Date(item.release_date || item.first_air_date || new Date()), "PP")}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Scroller;
