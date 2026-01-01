import { useState } from "react";
import Content from "../content/Content";
import Welcome from "../welcome/Welcome";
import { useFetchFreeToWatch, useFetchTrending } from "@/hooks/hooks";

function Hero() {
  const [time, setTime] = useState("day");
  const [freeToWatchType, setFreeToWatchType] = useState("movie");
  const { data } = useFetchTrending(time);
  const { data: panelData } = useFetchFreeToWatch(freeToWatchType);
  return (
    <section>
      <Welcome />
      <Content
        value={time}
        onChange={setTime}
        title="Trending"
        selector={[
          { label: "Today", value: "day" },
          { label: "This Week", value: "week" },
        ]}
        data={data}
      />
      <Content
        value={freeToWatchType}
        onChange={setFreeToWatchType}
        title="Free To Watch"
        selector={[
          { label: "Movie", value: "movie" },
          { label: "Tv", value: "tv" },
        ]}
        data={panelData}
      />
    </section>
  );
}

export default Hero;
