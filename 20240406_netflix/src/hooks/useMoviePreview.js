import { useQuery } from "@tanstack/react-query";
import api from "../utils/api";

const fetchMoviePreview = (movie_id) => {
  return api.get(`/movie/${movie_id}/videos`);
};

export const useMoviePreview = (id) => {
  return useQuery({
    queryKey: ["movie-preview"],
    queryFn: () => fetchMoviePreview(id),
    select: (result) => result.data.results,
  });
};
