import React from "react";
import "./RecommendMovie.style.css";
import { useMovieRecommendationQuery } from "../../../../hooks/useMovieRecommendation";
import { useParams } from "react-router-dom";
import Alert from "react-bootstrap/Alert";
import RecommendMovieCard from "../RecommendMovieCard/RecommendMovieCard";

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
    <div className="RecommendMovie-wrap">
      {movies.map((movie) => (
        <RecommendMovieCard movie={movie} />
      ))}
    </div>
  );
};

export default RecommendMovie;
