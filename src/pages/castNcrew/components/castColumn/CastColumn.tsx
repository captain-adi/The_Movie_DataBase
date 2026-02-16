import type { ICreditsResponse } from "@/pages/detailedpage/components/contentWrapper/components/seriesCast/type";
import { Link } from "react-router-dom";

function CastColumn({ data }: { data: ICreditsResponse["cast"] }) {
  return (
    <div className="w-165">
      <h2 className="font-semibold text-lg mb-4">
        Cast <span className="opacity-60">{data.length}</span>
      </h2>

      <div className="max-h-225 pr-4 space-y-4">
        {data.map((castMember, i) => (
          <div key={i} className="flex gap-4 items-start">
            <img
              src={
                castMember.profile_path
                  ? `https://image.tmdb.org/t/p/w66_and_h66_face${castMember.profile_path}`
                  : "https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-4-user-grey-d8fe957375e70239d6abdd549fd7568c89281b2179b5f4470e2e12895792dfa5.svg"
              }
              className="size-16.5 rounded-md object-cover bg-gray-200"
            />

            <div>
              <Link to={`/person/${castMember.id}`}>
                <p className="font-semibold text-sm leading-tight">
                  {castMember.name}
                </p>
              </Link>
              <p className="text-sm text-gray-600">{castMember.character}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default CastColumn;
