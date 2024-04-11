import React from "react";
import Badge from "react-bootstrap/Badge";
import "./MovieCard.style.css";
import { useMovieGenreQuery } from "../../hooks/useMovieGenre";
import { useNavigate } from "react-router-dom";

const MovieCard = ({ movie }) => {
  const { data: genreData } = useMovieGenreQuery();
  const navigate = useNavigate();

  const showGenre = (genreIdList) => {
    if (!genreData) return [];
    const genreNameList = genreIdList.map((id) => {
      const genreObj = genreData.find((genre) => genre.id === id);
      return genreObj.name;
    });

    return genreNameList;
  };

  const imagePath = movie.backdrop_path
    ? `https://media.themoviedb.org/t/p/w600_and_h900_bestv2${movie.backdrop_path}`
    : movie.poster_path
    ? `https://media.themoviedb.org/t/p/w600_and_h900_bestv2${movie.poster_path}`
    : "기본 이미지 경로"; // 기본 이미지가 없는 경우에 대한 처리

  const goToMovieDetail = () => {
    navigate(`/movies/${movie.id}`);
  };

  return (
    <div
      onClick={goToMovieDetail}
      style={{
        backgroundImage: `url(${imagePath})`,
      }}
      className="movie-card"
    >
      <div className="overlay">
        <div
          style={{
            backgroundImage:
              "url(" +
              `https://media.themoviedb.org/t/p/w600_and_h900_bestv2${movie.poster_path}` +
              ")",
          }}
          className="movie-poster"
        ></div>
        <div className="movie-text">
          <h1>{movie.title}</h1>
          <p>{movie.release_date}</p>
          <div className="card-genre">
            {showGenre(movie.genre_ids).map((id) => (
              <Badge bg="danger">{id}</Badge>
            ))}
          </div>
          <div>⭐ {movie.vote_average.toFixed(1)}</div>
          <div>👨‍👩‍👧‍👦 {Math.round(movie.popularity).toLocaleString("ko-KR")}</div>
          <div>{movie.adult ? "over 18" : "ALL"}</div>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
