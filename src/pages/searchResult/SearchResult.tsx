import { useFetchSearchResults } from "@/hooks/hooks";
import { useSearchParams } from "react-router-dom";
import ResultCard from "./component/ResultCard";
import ResultPagination from "./component/pagination/ResultPagination";
import LoadingDialog from "@/components/loadingDialog/LoadingDialog";
import { useMemo } from "react";

function SearchResult() {
  const [searchParams] = useSearchParams();
  const query: string | null = searchParams.get("query") || "";
  const page: number = Number(searchParams.get("page"));

  const { data, isLoading } = useFetchSearchResults(query, page);
  const toatalPages = useMemo(() => {
    return data?.total_pages;
  }, [data?.total_pages]);
  if (isLoading) {
    return <LoadingDialog open={true} />;
  }
  console.log(data);
  return (
    <div className="bg-gray-100">
      {/* EXACT CANVAS SIZE */}
      <div className="width-stack-xy">
        {/* LEFT OFFSET CONTAINER */}
        <div className=" space-y-5">
          {data?.results.map((item) => (
            <ResultCard data={item} key={item.id} />
          ))}
        </div>
      </div>
      <ResultPagination
        query={query}
        totalpages={toatalPages}
        activePage={page}
      />
    </div>
  );
}

export default SearchResult;
