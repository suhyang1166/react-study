import { useQuery } from "@tanstack/react-query";
import api from "../utils/api";

export const imageURL = (size, movie) => {
  return `https://media.themoviedb.org/t/p/${size}/${movie}?language=ko-KR`;
};

const fetchPopularMovies = () => {
  return api.get(`/movie/popular?language=ko-KR`);
};

export const usePopularMoviesQuery = () => {
  return useQuery({
    queryKey: ["movie-popular"],
    queryFn: fetchPopularMovies,
    select: (result) => result.data,
  });
};

const fetchTopRatedMovies = () => {
  return api.get(`/movie/top_rated?language=ko-KR`);
};

export const useTopRatedMoviesQuery = () => {
  return useQuery({
    queryKey: ["movie-toprated"],
    queryFn: fetchTopRatedMovies,
    select: (result) => result.data,
  });
};

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
