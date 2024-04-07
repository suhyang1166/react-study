import React from "react";
import "./Banner.style.css";
import Alert from "react-bootstrap/Alert";
import { usePopularMoviesQuery } from "../../../../hooks/useMovies";

const Banner = () => {
  const { data, isLoading, isError, error } = usePopularMoviesQuery();
  console.log("ddd", data);
  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  if (isError) {
    return <Alert variant="danger">{error.message}</Alert>;
  }
  return (
    <div
      style={{
        backgroundImage:
          "url(" +
          `https://media.themoviedb.org/t/p/w1066_and_h600_bestv2/${data?.results[0].backdrop_path}` +
          ")",
      }}
      className="banner"
    >
      <div className="text-white banner-text-area">
        <div>
          <h1>{data?.results[0].title}</h1>
          <p>{data?.results[0].overview}</p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
