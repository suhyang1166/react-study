import { useQuery } from "@tanstack/react-query";
import api from "../utils/api";

const fetchUpcommingMovies = () => {
  return api.get(`/movie/upcoming?language=ko-KR`);
};

export const useUpcommingMoviesQuery = () => {
  return useQuery({
    queryKey: ["movie-upcomming"],
    queryFn: fetchUpcommingMovies,
    select: (result) => result.data,
  });
};
