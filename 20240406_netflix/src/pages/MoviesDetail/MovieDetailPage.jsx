import React from "react";
import "./MovieDetailPage.style.css";
import { useMovieDetailQuery } from "../../hooks/useMovieDetail";
import { imageURL } from "../../hooks/useMovies";
import Alert from "react-bootstrap/Alert";
import Badge from "react-bootstrap/Badge";
import { useParams } from "react-router-dom";
import MoreBox from "./components/MoreBox/MoreBox";

const MovieDetailPage = () => {
  const { id } = useParams();
  const { data: movie, isLoading, isError, error } = useMovieDetailQuery(id);
  // console.log("ddd", data);
  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  if (isError) {
    return <Alert variant="danger">{error.message}</Alert>;
  }

  const showGenre = () => {
    if (!movie || !movie.genres) return [];

    return movie.genres.map((genre) => genre.name);
  };

  return (
    <div>
      <article className="movie-detail">
        <div
          className="detail-img"
          style={{
            backgroundImage: `url("${imageURL(
              "original",
              movie.poster_path
            )}")`,
          }}
        ></div>
        <div className="detail-text">
          <h1>{movie.title}</h1>
          <div>{movie.tagline}</div>
          <div>{movie.release_date} 개봉</div>

          <div>
            {showGenre(movie.genre_ids).map((id) => (
              <Badge bg="danger">{id}</Badge>
            ))}
          </div>
          <div>⭐ {movie.vote_average.toFixed(1)}</div>
          <div>
            👨‍👩‍👧‍👦 {Math.round(movie.popularity).toLocaleString("ko-KR")}명이
            좋아하는 영화입니다.
          </div>
          <div>{movie.adult ? "over 18" : "ALL"}</div>
          <div>{movie.overview}</div>
        </div>
      </article>
      <MoreBox />
    </div>
  );
};

export default MovieDetailPage;
