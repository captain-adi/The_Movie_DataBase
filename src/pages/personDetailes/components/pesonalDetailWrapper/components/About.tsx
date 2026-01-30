import { Facebook, Instagram, Play } from "lucide-react";
import type { IExternalIDs, IPersonDetails } from "../../../type";
import { Link } from "react-router-dom";
import { format } from "date-fns";
function About({
  data,
  externalIDs,
}: {
  data: IPersonDetails | undefined;
  externalIDs: IExternalIDs | undefined;
}) {
  console.log(externalIDs);
  return (
    <div className="flex  flex-col">
      <div className="flex gap-4 mb-6">
        <Link to={`https://www.facebook.com/${externalIDs?.facebook_id}`}>
          <div className="size-8 rounded-full border flex items-center justify-center">
            <Facebook size={16} />
          </div>
        </Link>
        <Link to={`https://www.instagram.com/${externalIDs?.instagram_id}`}>
          <div className="size-8 rounded-full border flex items-center justify-center">
            <Instagram size={16} />
          </div>
        </Link>
        <Link to={`https://www.twitter.com/${externalIDs?.twitter_id}`}>
          <div className="size-8 rounded-full border flex items-center justify-center">
            <Play size={16} />
          </div>
        </Link>
      </div>
      {/* LEFT: Personal Info */}
      <aside className="w-[280px] shrink-0">
        <h2 className="text-lg font-semibold mb-4">Personal Info</h2>

        <div className="space-y-4 text-sm">
          <div>
            <p className="font-semibold">Known For</p>
            <p className="text-gray-700">{data?.known_for_department}</p>
          </div>

          <div>
            <p className="font-semibold">Known Credits</p>
            <p className="text-gray-700">{data?.popularity}</p>
          </div>

          <div>
            <p className="font-semibold">Gender</p>
            <p className="text-gray-700">
              {data?.gender === 1 ? "Female" : "Male"}
            </p>
          </div>

          <div>
            <p className="font-semibold">Birthday</p>
            <p className="text-gray-700">
              {data?.birthday
                ? format(new Date(data.birthday), "MMMM d, yyyy")
                : "N/A"}
              (
              {new Date().getFullYear() -
                new Date(data?.birthday || "").getFullYear()}{" "}
              years old)
            </p>
          </div>

          <div>
            <p className="font-semibold">Place of Birth</p>
            <p className="text-gray-700">{data?.place_of_birth}</p>
          </div>

          <div>
            <p className="font-semibold mb-1">Also Known As</p>
            <ul className="space-y-1 text-gray-700">
              {data?.also_known_as.map((name, index) => (
                <li key={index}>{name}</li>
              ))}
            </ul>
          </div>
        </div>
      </aside>
    </div>
  );
}

export default About;
