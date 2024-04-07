import React from "react";
import { usePopularMoviesQuery } from "../../../../hooks/useMovies";
import Alert from "react-bootstrap/Alert";
import MovieSlider from "../../../../common/MovieSlider/MovieSlider";
import { responsive } from "../../../../constants/responsive";

const PopularMovieSlide = () => {
  const { data, isLoading, isError, error } = usePopularMoviesQuery();

  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  if (isError) {
    return <Alert variant="danger">{error.message}</Alert>;
  }
  return (
    <div>
      <MovieSlider
        title="Popular Movies"
        movies={data.results}
        responsive={responsive}
        focusOnSelect={true}
        centerMode={true}
        partialVisible={true}
      />
    </div>
  );
};

export default PopularMovieSlide;
