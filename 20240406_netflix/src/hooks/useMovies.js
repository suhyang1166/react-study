import { useQuery } from "@tanstack/react-query";
import api from "../utils/api";

const fetchPopularMovies = () => {
  return api.get(`/movie/popular`);
};

export const usePopularMoviesQuery = () => {
  return useQuery({
    queryKey: ["movie-popular"],
    queryFn: fetchPopularMovies,
    select: (result) => result.data,
  });
};

const fetchTopRatedMovies = () => {
  return api.get(`/movie/top_rated`);
};

export const useTopRatedMoviesQuery = () => {
  return useQuery({
    queryKey: ["movie-toprated"],
    queryFn: fetchTopRatedMovies,
    select: (result) => result.data,
  });
};

const fetchUpcommingMovies = () => {
  return api.get(`/movie/upcoming`);
};

export const useUpcommingMoviesQuery = () => {
  return useQuery({
    queryKey: ["movie-upcomming"],
    queryFn: fetchUpcommingMovies,
    select: (result) => result.data,
  });
};
