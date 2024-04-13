import React from "react";
import "./RecommendMovieCard.style.css";
import Badge from "react-bootstrap/Badge";
import "./RecommendMovieCard.style.css";
import { Link, useNavigate } from "react-router-dom";
import { useMovieGenreQuery } from "../../../../hooks/useMovieGenre";

const RecommendMovieCard = ({ movie }) => {
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
      className="RecommendMovieCard"
      onClick={goToMovieDetail}
      style={{
        backgroundImage: `url(${imagePath})`,
      }}
    >
      <div className="RecommendMovieCard-text">
        <div className="movie-text text-hover">
          <h1>{movie.title}</h1>
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

export default RecommendMovieCard;
