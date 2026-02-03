import { useFetchDetails, useFetchExternalIDs } from "@/hooks/hooks";
import { useParams } from "react-router-dom";
import PersonalDetailsWrapper from "./components/pesonalDetailWrapper/PersonalDetailsWrapper";
import LoadingDialog from "@/components/loadingDialog/LoadingDialog";

function PersonDetails() {
  const { id } = useParams<{ id: string }>();
  const { data, isLoading } = useFetchDetails("person", id);
  const { data: externalIDs } = useFetchExternalIDs("person", id);
  if (isLoading) {
    return <LoadingDialog open={isLoading} />;
  }
  return (
    <div className="width-stack-xy">
      {" "}
      <div className=" py-12">
        <div className="flex gap-12">
          {/* LEFT: Profile Image */}
          <div className="max-w-75 shrink-0">
            <img
              src={
                data?.profile_path
                  ? `https://image.tmdb.org/t/p/w500${data.profile_path}`
                  : ""
              }
              alt={data?.name || "Person"}
              className="w-full rounded-lg object-cover aspect-2/3"
            />
          </div>

          {/* RIGHT: Content */}
          <div className="flex-1">
            {/* Name */}
            <h1 className="text-3xl font-bold mb-6">{data?.name}</h1>

            {/* Biography */}
            <section className="mb-10">
              <h2 className="text-xl font-semibold mb-2">Biography</h2>
              <p className="text-sm leading-relaxed text-gray-800 max-w-225">
                {data?.biography}
              </p>
            </section>
          </div>
        </div>
      </div>
      <PersonalDetailsWrapper id={id} data={data} externalIDs={externalIDs} />
    </div>
  );
}

export default PersonDetails;
