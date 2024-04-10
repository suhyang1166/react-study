import { useQuery } from "@tanstack/react-query";
import api from "../utils/api";

const fetchMovieDetail = (movie_id) => {
  return api.get(`/movie/${movie_id}?language=ko-KR`);
};

export const useMovieDetailQuery = (id) => {
  return useQuery({
    queryKey: ["movie-details"],
    queryFn: () => fetchMovieDetail(id),
    select: (result) => result.data,
  });
};
