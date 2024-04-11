import { useQuery } from "@tanstack/react-query";
import api from "../utils/api";

const fetchMovieRecommendation = (movie_id) => {
  return api.get(`/movie/${movie_id}/recommendations?language=ko-KR`);
};

export const useMovieRecommendationQuery = (id) => {
  return useQuery({
    queryKey: ["movie-recommendation"],
    queryFn: () => fetchMovieRecommendation(id),
    select: (result) => result.data.results,
  });
};
