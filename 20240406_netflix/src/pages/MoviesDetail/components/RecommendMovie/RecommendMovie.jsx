import React from "react";
import { useMovieRecommendationQuery } from "../../../../hooks/useMovieRecommendation";
import { useParams } from "react-router-dom";
import Alert from "react-bootstrap/Alert";
import { imageURL } from "../../../../hooks/useMovies";
import MovieCard from "../../../../common/MovieCard/MovieCard";

const RecommendMovie = () => {
  const { id } = useParams();
  const {
    data: movies,
    isLoading,
    isError,
    error,
  } = useMovieRecommendationQuery(id);

  console.log("ccc", movies);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  if (isError) {
    return <Alert variant="danger">{error.message}</Alert>;
  }
  return (
    <div>
      {movies.map((movie) => (
        <MovieCard movie={movie} />
      ))}
    </div>
  );
};

export default RecommendMovie;
