import type { useFetchCredits } from "@/hooks/hooks";
import { Link, useParams } from "react-router-dom";

function SeriesCast({
  credits,
}: {
  credits: ReturnType<typeof useFetchCredits>;
}) {
  const loading = credits.isLoading;
  const { type } = useParams();
  return (
    <div className="flex-1">
      <h2 className="text-xl font-semibold mb-4">Top Billed Cast</h2>
      <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
        {credits.data?.cast.slice(0, 9).map((castMember, index) => (
          <Link to={`/person/${castMember.id}`}>
            <div key={index} className="min-w-35 bg-white rounded-lg shadow">
              {/* Image */}
              <img
                src={
                  loading
                    ? "https://placehold.net/400x400.png"
                    : `https://image.tmdb.org/t/p/w400${castMember.profile_path}`
                }
                alt="individual cast"
                className="w-full h-43.75 object-cover rounded-t-lg"
              />

              {/* Text */}
              <div className="p-3">
                <p className="font-semibold text-sm leading-tight">
                  {castMember.name}
                </p>
                <p className="text-xs text-gray-600 mt-1">
                  {castMember.character}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>

      <Link to={`/cast&crew/${type}/${credits.data?.id}/cast`}>
        <button className="mt-3 text-sm font-semibold text-blue-600 hover:underline">
          Full Cast & Crew
        </button>
      </Link>
    </div>
  );
}

export default SeriesCast;
