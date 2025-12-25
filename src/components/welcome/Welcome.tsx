import { useState } from "react";
import Search from "./components/Search";

function Welcome() {
  const [searchInput, setSearchInput] = useState("");
  console.log(searchInput);
  return (
    <section
      className="h-96"
      style={{
        backgroundImage:
          'url("https://media.themoviedb.org/t/p/w1920_and_h600_multi_faces_filter(duotone,00192f,00baff)/7CJyBEcU7qzhbj1WTlxGPda2Lpb.jpg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="width-stack py-8 text-white flex flex-col  justify-center h-full">
        <h1 className="text-[3em] font-bold leading-8">Welcome</h1>
        <h1 className="text-[2em] font-semibold">
          Million of movies,Tv shows and people to discover , Explore now
        </h1>
        <Search setSearchInput={setSearchInput} />
      </div>
    </section>
  );
}

export default Welcome;
