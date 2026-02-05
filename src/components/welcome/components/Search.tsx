import { Button } from "@/components/ui/button";
import { useState } from "react"; // Added missing import for useState
import { useNavigate } from "react-router-dom";

function Search() {
  const [searchInput, setSearchInput] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const query = searchInput.trim();
    if (query) {
      navigate(`/search?query=${encodeURIComponent(query)}&page=1`);
    }
  };

  return (
    <div className="bg-white flex justify-between rounded-4xl mt-10">
      <form
        className="flex flex-1 items-center italic"
        onSubmit={handleSubmit} // Added onSubmit handler
      >
        <input
          onChange={(e) => setSearchInput(e.target.value)}
          type="text"
          className="placeholder:text-muted-foreground w-full ml-4 ring-0 focus:outline-none focus:ring-0 text-muted-foreground caret-black"
          placeholder="Search for a movie, tv show, person....."
        />
        <Button
          className="rounded-4xl bg-linear-to-r to-blue-400 from-green-400 py-6 px-8 cursor-pointer hover:text-black transition-all duration-300 ring-0 focus:ring-0"
          type="submit"
        >
          Search
        </Button>
      </form>
    </div>
  );
}

export default Search;
