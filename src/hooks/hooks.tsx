import { useQuery } from "@tanstack/react-query";
import { fetchFromTMDB } from "../api/confige";
import type { IMovie, IScroller, ITmdbResponse } from "@/types/types";
import type { IMovieDetails, ITvDetails } from "@/pages/detailedpage/type";

export const useFetchMovie = () => {
  return useQuery<ITmdbResponse<IMovie>>({
    queryKey: ["movies"],
    queryFn: () =>
      fetchFromTMDB("/movie/popular", { language: "en-US", page: 1 }),
  });
};

export const useFetchTrending = (time: string) => {
  return useQuery<ITmdbResponse<IScroller>>({
    queryKey: ["trending", time],
    queryFn: (): Promise<ITmdbResponse<IScroller>> =>
      fetchFromTMDB(`/trending/all/${time}`, { language: "en-US" }),
  });
};

export const useFetchFreeToWatch = (type: string) => {
  return useQuery<ITmdbResponse<IScroller>>({
    queryKey: ["freeToWatch", type],
    queryFn: (): Promise<ITmdbResponse<IScroller>> =>
      fetchFromTMDB(`/${type}/popular`, { language: "en-US", page: 1 }),
  });
};

export const useFetchSearchResults = (query: string) => {
  return useQuery<ITmdbResponse<IScroller>>({
    queryKey: ["searchResults", query],
    queryFn: (): Promise<ITmdbResponse<IScroller>> =>
      fetchFromTMDB("/search/multi", { language: "en-US", query, page: 1 }),
  });
};

type TMDBType = "movie" | "tv" | "person";

type DetailedData = {
  movie: IMovieDetails;
  tv: ITvDetails;
  person: IPersonDetails;
};
export function useFetchDetails<T extends TMDBType>(type: T, id?: string) {
  return useQuery<DetailedData[T]>({
    queryKey: ["details", type, id],
    queryFn: () => fetchFromTMDB(`/${type}/${id}`, { language: "en-US" }),
    enabled: !!id,
    staleTime: 1000 * 60 * 5,
  });
}

// hook to fetch credits
import type { ICreditsResponse } from "@/pages/detailedpage/components/contentWrapper/components/seriesCast/type";
import type {
  IExternalIDs,
  IPersonCombinedCredit,
  IPersonDetails,
} from "@/pages/personDetailes/type";

type TMDBMediaType = "movie" | "tv";

export function useFetchCredits(type: TMDBMediaType, id?: string) {
  return useQuery<ICreditsResponse>({
    queryKey: ["credits", type, id],
    queryFn: () =>
      fetchFromTMDB(`/${type}/${id}/credits`, {
        language: "en-US",
      }),
    enabled: !!id,
    staleTime: 1000 * 60 * 10, // 10 min cache
  });
}

export function useFetchExternalIDs(type: TMDBType, id?: string) {
  return useQuery({
    queryKey: ["externalIDs", type, id],
    queryFn: () => fetchFromTMDB<IExternalIDs>(`/${type}/${id}/external_ids`),
    enabled: !!id,
    staleTime: 1000 * 60 * 60, // 1 hour cache
  });
}

export function useFetchPersonCombinedCredits(id?: string) {
  return useQuery<IPersonCombinedCredit>({
    queryKey: ["personCombinedCredits", id],
    queryFn: () =>
      fetchFromTMDB(`/person/${id}/combined_credits`, {
        language: "en-US",
      }),
    enabled: !!id,
    staleTime: 1000 * 60 * 30, // 30 min cache
  });
}
