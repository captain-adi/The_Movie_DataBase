import type { ICreditsResponse } from "@/pages/detailedpage/components/contentWrapper/components/seriesCast/type";

function CrewGroup({
  title,
  data,
}: {
  title: string;
  data: ICreditsResponse["crew"];
}) {
  return (
    <div>
      <h3 className="font-semibold text-sm mb-3">{title}</h3>

      <div className="space-y-4">
        {data.slice(0, 5).map((person, i) => (
          <div key={i} className="flex gap-4 items-start">
            <img
              src={
                person.profile_path
                  ? `https://image.tmdb.org/t/p/w66_and_h66_face${person.profile_path}`
                  : "https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-4-user-grey-d8fe957375e70239d6abdd549fd7568c89281b2179b5f4470e2e12895792dfa5.svg"
              }
              className="size-16.5 rounded-md object-cover bg-gray-200"
            />

            <div>
              <p className="font-semibold text-sm leading-tight">
                {person.name}
              </p>
              <p className="text-sm text-gray-600">{person.job}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default CrewGroup;
