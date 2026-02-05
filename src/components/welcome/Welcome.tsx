import { memo } from "react";
import Search from "./components/Search";
import welcomeImage from "/public/images/home.webp";
function Welcome() {
  return (
    <section
      className="h-96 bg-gray-500"
      style={{
        backgroundImage: `url(${welcomeImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="width-stack py-8 text-white flex flex-col  justify-center h-full">
        <h1 className="text-[3em] font-bold leading-8">Welcome</h1>
        <h1 className="text-[2em] font-semibold">
          Million of movies,Tv shows and people to discover , Explore now
        </h1>
        <Search />
      </div>
    </section>
  );
}

export default memo(Welcome);
