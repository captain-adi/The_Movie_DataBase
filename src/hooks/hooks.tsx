import { useQuery } from "@tanstack/react-query";
import { fetchFromTMDB } from "../api/confige";
import type { IMovie, IScroller, ITmdbResponse } from "@/types/types";
import type { IMoveieDetails, ITvDetails } from "@/pages/detailedpage/type";

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

type MediaType = "movie" | "tv";

type MediaResponseMap = {
  movie: IMoveieDetails;
  tv: ITvDetails;
};

export const useFetchDetails = <T extends MediaType>(type: T, id: string) => {
  return useQuery<MediaResponseMap[T]>({
    queryKey: ["details", type, id],
    queryFn: () => fetchFromTMDB(`/${type}/${id}`, { language: "en-US" }),
    enabled: !!id,
  });
};
