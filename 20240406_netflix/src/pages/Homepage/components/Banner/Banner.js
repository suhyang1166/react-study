import React from "react";
import "./Banner.style.css";
import Alert from "react-bootstrap/Alert";
import { usePopularMoviesQuery, imageURL } from "../../../../hooks/useMovies";
import { useNavigate } from "react-router-dom";

const Banner = () => {
  const navigate = useNavigate();

  const { data, isLoading, isError, error } = usePopularMoviesQuery();
  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  if (isError) {
    return <Alert variant="danger">{error.message}</Alert>;
  }

  const goToMovieDetail = (e) => {
    e.preventDefault();
    // console.log(data.results[0].id);
    navigate(`/movies/${data.results[0].id}`);
  };
  return (
    <div
      style={{
        backgroundImage: `url("${imageURL(
          "original",
          data?.results[0].backdrop_path
        )}")`,
      }}
      className="banner"
    >
      <div className="text-white banner-text-area">
        <div>
          <h1>{data?.results[0].title}</h1>
          <p>{data?.results[0].overview}</p>
          <button className="banner-btn" onClick={goToMovieDetail}>
            MORE
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
