import { Button } from "@/components/ui/button";

type ISeach = {
  setSearchInput: (input: string) => void;
};

function Search({ setSearchInput }: ISeach) {
  return (
    <div className="bg-white flex justify-between rounded-4xl mt-10">
      <input
        onChange={(e) => setSearchInput(e.target.value)}
        type="text"
        className="placeholder:text-muted-foreground w-full ml-4 ring-0  focus:outline-none focus:ring-0 text-muted-foreground caret-black"
        placeholder="Search for a movie, tv show, person....."
      />
      <Button className="rounded-4xl bg-linear-to-r to-blue-400 from-green-400 py-6 px-8  cursor-pointer hover:text-black transition-all duration-300 ring-0 focus:ring-0">
        Search
      </Button>
    </div>
  );
}

export default Search;
