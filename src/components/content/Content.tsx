import Header from "./components/header/Header";
import Scroller from "./components/scroller/Scroller";
import trendingBG from "../../../public/trending-bg.svg";
import type { IContentProps } from "./type";
import type { IScroller } from "@/types/types";
function Content<T extends IScroller>({
  value,
  onChange,
  title,
  selector,
  data,
}: IContentProps<T>) {
  const result = data?.results;
  return (
    <section className="py-7 ">
      <div
        className="width-stack bg-no-repeat  bg-position-[50%_80%] "
        style={
          title === "Trending"
            ? { backgroundImage: `url(${trendingBG})` }
            : undefined
        }
      >
        <Header
          title={title}
          value={value}
          onChange={onChange}
          selector={selector}
        />
        <Scroller data={result} />
      </div>
    </section>
  );
}

export default Content;
