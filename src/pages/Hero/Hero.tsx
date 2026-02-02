import { useState } from "react";

import { useFetchFreeToWatch, useFetchTrending } from "@/hooks/hooks";
import Searchbar from "./components/searchbar/Searchbar";
import Welcome from "@/components/welcome/Welcome";
import Content from "./components/content/Content";
import JoinToday from "./components/join/JoinToday";

const trendingSelector = [
  { label: "Today", value: "day" },
  { label: "This Week", value: "week" },
];
const freeToWatchSelector = [
  { label: "Movie", value: "movie" },
  { label: "Tv", value: "tv" },
];

function Hero() {
  const [time, setTime] = useState("day");
  const [freeToWatchType, setFreeToWatchType] = useState("movie");
  const { data: trendingData, isLoading: trendingLoading } =
    useFetchTrending(time);
  const { data: panelData, isLoading: freeToWatchLoading } =
    useFetchFreeToWatch(freeToWatchType);

  return (
    <section>
      <div>
        <Searchbar />
        <Welcome />
      </div>
      <Content
        isLoading={trendingLoading}
        value={time}
        onChange={setTime}
        title="Trending"
        selector={trendingSelector}
        data={trendingData}
      />
      <Content
        isLoading={freeToWatchLoading}
        value={freeToWatchType}
        onChange={setFreeToWatchType}
        title="Free To Watch"
        selector={freeToWatchSelector}
        data={panelData}
      />

      <JoinToday />
    </section>
  );
}

export default Hero;
