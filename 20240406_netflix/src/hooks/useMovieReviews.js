import { useQuery } from "@tanstack/react-query";
import api from "../utils/api";

const fetchMovieReviews = (movie_id) => {
  return api.get(`/movie/${movie_id}/reviews`);
};

export const useMovieReviewsQuery = (id) => {
  return useQuery({
    queryKey: ["movie-reviews"],
    queryFn: () => fetchMovieReviews(id),
    select: (result) => result.data.results,
  });
};
