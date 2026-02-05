import type { IScroller } from "@/types/types";
import getTmdbImage from "@/utils/getTmdbImages";
import { format } from "date-fns";

function ResultCard({ data }: { data: IScroller | undefined }) {
  const getFormatDate = (dateString: string) => {
    return format(new Date(dateString), "MMMM dd, yyyy");
  };
  return (
    <div className="flex gap-5 bg-white rounded-[10px] px-6 py-5 shadow-sm">
      <img
        className="w-22.5 h-30 rounded-md bg-gray-300 shrink-0 "
        alt={data?.title}
        src={
          data?.poster_path
            ? getTmdbImage(data.poster_path)
            : "/images/placeholder.png"
        }
      />

      <div className="flex flex-col gap-1.5">
        <h2 className="text-[22px] font-semibold text-[#111]">{data?.title}</h2>
        {data?.release_date && (
          <p className="text-[13px] text-gray-500">
            {getFormatDate(data.release_date)}{" "}
          </p>
        )}
        <p className="text-[15px] leading-relaxed text-gray-800 max-w-287.5">
          {data?.overview}
        </p>
      </div>
    </div>
  );
}

export default ResultCard;
