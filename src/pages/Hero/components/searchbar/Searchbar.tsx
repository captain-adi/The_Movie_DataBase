import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandList,
  CommandItem,
} from "@/components/ui/command";
import { useFetchSearchResults } from "@/hooks/hooks";
// import type { IScroller } from "@/types/types";
import useDebounce from "@/utils/useDebounce";
import { Tv, User, Film } from "lucide-react";
import { memo, useMemo, useState } from "react";
import { Link } from "react-router-dom";

function Searchbar() {
  const commandItemData = useMemo(
    () => [
      { name: "in Movies", icon: Film, value: "movie" },
      { name: "in TV Shows", icon: Tv, value: "tv" },
      { name: "in People", icon: User, value: "person" },
    ],
    []
  );
  const [searchInput, setSearchInput] = useState("");
  const searchValue = useDebounce(searchInput, 1000);
  const { data, isLoading } = useFetchSearchResults(searchValue);

  return (
    <section className="py-3">
      <Command className="width-stack relative">
        <CommandInput
          value={searchInput}
          onValueChange={setSearchInput}
          placeholder="Search for a movie, tv show, person ..."
        />

        <CommandList>
          {isLoading && <div className="p-3 text-sm">Loading...</div>}
          {!isLoading && data?.results?.length === 0 && (
            <CommandEmpty>No results found.</CommandEmpty>
          )}
          {searchInput && (
            <CommandGroup className="p-0">
              {commandItemData.map((item) => (
                <Link
                  to={{
                    pathname: `/search/${item.value}`,
                    search: `?query=${searchInput}`,
                  }}
                  key={item.name}
                >
                  <CommandItem key={item.name} className="border-t gap-2">
                    <item.icon className="h-4 w-4" />
                    <span className="font-semibold">{searchInput}</span>
                    {item.name}
                  </CommandItem>
                </Link>
              ))}
            </CommandGroup>
          )}

          {data?.results && data.results.length > 0 && (
            <CommandGroup className="p-0">
              {data.results.map((item) => (
                <CommandItem
                  key={item.id}
                  value={item.title || item.name || item.original_title}
                  className="border-t"
                >
                  {item.title || item.name}
                  {item.original_name && ` (${item.original_name})`}
                </CommandItem>
              ))}
            </CommandGroup>
          )}
        </CommandList>
      </Command>
    </section>
  );
}

export default memo(Searchbar);
