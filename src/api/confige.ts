import axiosClient from "./axiosConfige";

const baseURL = "https://api.themoviedb.org/3";
const API_KEY = import.meta.env.VITE_API_KEY;

const fetchFromTMDB = async <T>(
  endpoint: string,
  params: Record<string, any> = {}
): Promise<T> => {
  const response = await axiosClient.get<T>(endpoint, { params });
  if (response.status !== 200) {
    throw new Error("Failed to fetch data from TMDB");
  }
  return response.data;
};

export { baseURL, API_KEY, fetchFromTMDB };
