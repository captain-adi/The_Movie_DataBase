import {
  Command,
  CommandGroup,
  CommandInput,
  CommandList,
  CommandItem,
} from "@/components/ui/command";
import { useFetchSearchResults } from "@/hooks/hooks";
import useDebounce from "@/utils/useDebounce";
// import { Tv, User, Film } from "lucide-react";
import { memo, useState } from "react";
import { Link } from "react-router-dom";

function Searchbar() {
  // const commandItemData = useMemo(
  //   () => [
  //     { name: "in Movies", icon: Film, value: "movie" },
  //     { name: "in TV Shows", icon: Tv, value: "tv" },
  //     { name: "in People", icon: User, value: "person" },
  //   ],
  //   [],
  // );
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
          {isLoading && searchValue && (
            <div className="p-3 text-sm">Searching...</div>
          )}

          {!isLoading && searchValue && data?.results?.length === 0 && (
            <div className="p-3 text-sm">No results found...</div>
          )}

          {/* Search shortcut links */}
          {/* {searchInput && (
            <CommandGroup className="p-0">
              {commandItemData.map((item) => (
                <CommandItem key={item.value} asChild>
                  <Link
                    to={{
                      pathname: `/search/${item.value}`,
                      search: `?query=${encodeURIComponent(searchInput)}`,
                    }}
                    className="flex gap-2"
                  >
                    <item.icon className="h-4 w-4" />
                    <span className="font-semibold">{searchInput}</span>
                    {item.name}
                  </Link>
                </CommandItem>
              ))}
            </CommandGroup>
          )} */}

          {/* Search results */}
          {data?.results && data.results.length > 0 && (
            <CommandGroup className="p-0">
              {data.results.map((item) => (
                <CommandItem
                  key={item.id}
                  asChild
                  value={item.title || item.name || item.original_title}
                  className="border-t"
                >
                  <Link
                    to={
                      item.media_type === "person"
                        ? `/person/${item.id}`
                        : `/details/${item.media_type || "movie"}/${item.id}`
                    }
                    className="block w-full"
                  >
                    {item.title || item.name}
                    {item.original_name && ` (${item.original_name})`}
                    {item.release_date &&
                      ` - ${new Date(item.release_date).getFullYear()}`}
                  </Link>
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
