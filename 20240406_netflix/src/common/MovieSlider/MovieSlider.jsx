import React from "react";
import "./MovieSlider.style.css";
import "react-multi-carousel/lib/styles.css";
import Carousel from "react-multi-carousel";
import MovieCard from "../MovieCard/MovieCard";

const MovieSlider = ({ title, movies, responsive }) => {
  const getDevice = () => {
    if (/Android|iPhone/i.test(navigator.userAgent)) {
      return false;
    } else {
      return true;
    }
  };
  return (
    <div className="popular-slide">
      <h3 className="popular-text">{title}</h3>
      <Carousel
        infinite={true}
        centerMode={true}
        itemClass="movie-slider p-1"
        containerClass="carousel-container"
        responsive={responsive}
        autoPlay={getDevice()}
        autoPlaySpeed={2500}
        // removeArrowOnDeviceType={["tablet", "mobile"]}
      >
        {movies.map((movie, index) => (
          <MovieCard movie={movie} key={index} />
        ))}
      </Carousel>
    </div>
  );
};

export default MovieSlider;
