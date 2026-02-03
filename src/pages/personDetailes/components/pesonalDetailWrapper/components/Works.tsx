import type { IPersonCombinedCredit } from "@/pages/personDetailes/type";
import { format } from "date-fns";

function Works({
  combinedCredits,
}: {
  combinedCredits?: IPersonCombinedCredit;
}) {
  return (
    <section className="w-full">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold">Acting</h2>

        <div className="flex gap-4 text-sm">
          <button className="flex items-center gap-1">All ▾</button>
          <button className="flex items-center gap-1">Department ▾</button>
        </div>
      </div>

      {/* Credits Box */}
      <div className="border rounded-md shadow-xl mb-4">
        <ul className="divide-y">
          {combinedCredits?.cast.map((item, i) => (
            <li key={i} className="flex gap-4 px-6 py-4 text-sm">
              {/* Timeline */}
              <div className="flex gap-4 ">
                <span className="text-gray-500 w-6 text-right">
                  {format(new Date(item?.release_date || new Date()), "yyyy")}
                </span>
                <span className="w-2 h-2 border-2  rounded-full mt-1 border-gray-800" />
              </div>

              {/* Content */}
              <div>
                <p className="font-bold">{item?.title}</p>
                {item?.character && (
                  <p className="text-gray-600">as {item?.character}</p>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
      <h2 className="text-lg font-semibold">Crew</h2>
      <div className="border rounded-md shadow-xl">
        <ul className="divide-y ">
          {combinedCredits?.crew.map((item, i) => (
            <li key={i} className="flex gap-4 px-6 py-4 text-sm">
              {/* Timeline */}
              <div className="flex gap-4 ">
                <span className="text-gray-500 w-6 text-right">
                  {format(new Date(item?.release_date || new Date()), "yyyy")}
                </span>
                <span className="w-2 h-2 border-2  rounded-full mt-1 border-gray-800" />
              </div>

              {/* Content */}
              <div>
                <p className="font-bold">{item?.title}</p>
                {item?.character && (
                  <p className="text-gray-600">as {item?.character}</p>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Works;
