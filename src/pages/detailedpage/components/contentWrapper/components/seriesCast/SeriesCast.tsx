import React, { memo, useMemo } from "react";
import type { ICreditsResponse } from "./type";
import { Link, useParams } from "react-router-dom";

function SeriesCast({
  credits,
  loading,
}: {
  credits?: ICreditsResponse | undefined;
  loading?: boolean;
}) {
  const { type } = useParams();

  const topCast = useMemo(() => credits?.cast?.slice(0, 9) ?? [], [credits]);

  return (
    <div className="flex-1">
      <h2 className="text-xl font-semibold mb-4">Top Billed Cast</h2>
      <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
        {topCast.map((castMember) => (
          <Link key={castMember.id} to={`/person/${castMember.id}`}>
            <div className="min-w-35 bg-white rounded-lg shadow">
              {/* Image */}
              <img
                src={
                  loading || !castMember.profile_path
                    ? "https://placehold.net/400x400.png"
                    : `https://image.tmdb.org/t/p/w400${castMember.profile_path}`
                }
                alt={castMember.name}
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

      <Link to={`/cast&crew/${type}/${credits?.id}/cast`}>
        <button className="mt-3 text-sm font-semibold text-blue-600 hover:underline">
          Full Cast & Crew
        </button>
      </Link>
    </div>
  );
}

export default memo(SeriesCast);
