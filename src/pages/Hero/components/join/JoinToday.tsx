import { Button } from "@/components/ui/button";
import { memo } from "react";

const benefits = [
  "Enjoy TMDB ad free",
  "Maintain a personal watchlist",
  "Filter by your subscribed streaming services and find something to watch",
  "Log the movies and TV shows you've seen",
  "Build custom lists",
  "Contribute to and improve our database",
];

const JoinToday = () => {
  const bgimage =
    "https://media.themoviedb.org/t/p/w1920_and_h800_multi_faces_filter(duotone,190235,ad47dd)/lMnoYqPIAVL0YaLP5YjRy7iwaYv.jpg";
  return (
    <section
      className={`bg-[url('${bgimage}')]  bg-cover bg-center bg-no-repeat   `}
    >
      <div className="width-stack-xy ">
        <div className="">
          <h2 className="text-2xl font-bold md:text-3xl text-white">
            Join Today
          </h2>
          <div className="grid  gap-10 md:grid-cols-2 py-5">
            <div className="space-y-4">
              <p className="text-sm leading-relaxed md:text-base text-white">
                Get access to maintain your own{" "}
                <em className="italic text-gray-400">custom personal lists</em>,{" "}
                <em className="italic text-gray-400">track what you've seen</em>{" "}
                and find{" "}
                <em className="italic text-gray-400">what to watch next</em>
                —across theatres, TV, and popular streaming services. popular
                streaming services like Netflix, Amazon Prime Video, Apple TV,
                Crunchyroll, and JioHotstar.
              </p>

              <Button
                size="lg"
                className="mt-8 font-semibold shadow-lg bg-[rgb(128,91,231)]  "
              >
                Sign Up
              </Button>
            </div>

            <ul className="list-disc marker:text-white space-y-2 text-sm text-white">
              {benefits.map((benefit) => (
                <li key={benefit}>{benefit}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default memo(JoinToday);
