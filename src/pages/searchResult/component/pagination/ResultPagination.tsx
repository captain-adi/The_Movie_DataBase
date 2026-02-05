import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

function ResultPagination({
  query,
  totalpages,
  activePage: page,
}: {
  query: string;
  totalpages: number | undefined;
  activePage?: number | undefined;
}) {
  console.log(page);
  return (
    <div>
      <Pagination className="width-stack-xy">
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious
              to={`/search?query=${query}&page=${page !== undefined && page > 1 ? page - 1 : 1}`}
            />
          </PaginationItem>
          <PaginationItem>
            {Array.from(
              { length: Math.min(totalpages ?? 0, 10) },
              (_, index) => (
                <PaginationLink
                  key={index + 1}
                  to={`/search?query=${query}&page=${index + 1}`}
                  isActive={page === index + 1}
                >
                  {index + 1}
                </PaginationLink>
              ),
            )}
          </PaginationItem>

          {(totalpages ?? 0) > 10 && (
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
          )}
          <PaginationItem>
            <PaginationNext
              to={`/search?query=${query}&page=${page !== undefined && page < (totalpages ?? 1) ? page + 1 : (totalpages ?? 1)}`}
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
}

export default ResultPagination;
