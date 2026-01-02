import type { IScroller } from "@/types/types";
import getTmdbImage from "@/utils/getTmdbImages";

function Scroller<T extends IScroller>({ data }: { data: T[] | undefined }) {
  return (
    <div className="flex flex-nowrap overflow-x-auto w-full gap-4 py-4  my-5">
      {data?.map((item, index) => (
        <div key={index} className="">
          <div className="min-w-37.5 h-56.25 rounded-md overflow-hidden">
            <img
              src={getTmdbImage(item.poster_path, "w780")}
              alt=""
              className="h-full w-full "
            />
          </div>
          <div className="my-2 mt-6">
            <h3 className="text-[1rem] font-bold mt-2 ">
              {item.title || item.name}
            </h3>
            <p className="text-[1rem] text-muted-foreground">
              {item.release_date || item.first_air_date}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Scroller;
