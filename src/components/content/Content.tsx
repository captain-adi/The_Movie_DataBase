import Header from "./components/header/Header";
import Scroller from "./components/scroller/Scroller";
function Content() {
  return (
    <section className="py-7">
      <div className="width-stack">
        <Header title="Trending" selector={["Today", "This Week"]} />
        <Scroller />
      </div>
    </section>
  );
}

export default Content;
