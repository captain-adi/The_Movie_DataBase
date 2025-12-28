import { useQuery } from "@tanstack/react-query";
import { fetchFromTMDB } from "../api/confige";
import type { IMovie, ITmdbResponse, ITrending } from "@/types/types";

export const useFetchMovie = () => {
  return useQuery<ITmdbResponse<IMovie>>({
    queryKey: ["movies"],
    queryFn: () =>
      fetchFromTMDB("/movie/popular", { language: "en-US", page: 1 }),
  });
};

export const useFetchTrending = (time: string) => {
  return useQuery<ITmdbResponse<ITrending>>({
    queryKey: ["trending", time],
    queryFn: (): Promise<ITmdbResponse<ITrending>> =>
      fetchFromTMDB(`/trending/all/${time}`, { language: "en-US" }),
  });
};
