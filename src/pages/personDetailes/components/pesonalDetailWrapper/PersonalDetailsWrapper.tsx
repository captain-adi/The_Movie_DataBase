import { useFetchPersonCombinedCredits } from "@/hooks/hooks";
import type { IExternalIDs, IPersonDetails } from "../../type";
import About from "./components/About";
import Works from "./components/Works";

function PersonalDetailsWrapper({
  data,
  externalIDs,
  id,
}: {
  data: IPersonDetails | undefined;
  externalIDs: IExternalIDs | undefined;
  id?: string;
}) {
  const { data: combinedCredits } = useFetchPersonCombinedCredits(id);

  return (
    <div className="width-stack-xy">
      <div className="flex gap-12 ">
        <About data={data} externalIDs={externalIDs} />
        <Works combinedCredits={combinedCredits} />
      </div>
    </div>
  );
}

export default PersonalDetailsWrapper;
