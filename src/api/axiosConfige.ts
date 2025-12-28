import axios from "axios";

const axiosClient = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: import.meta.env.VITE_API_KEY,
  },
});

export default axiosClient;
