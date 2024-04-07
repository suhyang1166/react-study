import React from "react";
import { useUpcommingMoviesQuery } from "../../../../hooks/useMovies";
import Alert from "react-bootstrap/Alert";
import MovieSlider from "../../../../common/MovieSlider/MovieSlider";
import { responsive } from "../../../../constants/responsive";

const UpcommingMovie = () => {
  const { data, isLoading, isError, error } = useUpcommingMoviesQuery();

  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  if (isError) {
    return <Alert variant="danger">{error.message}</Alert>;
  }
  return (
    <div>
      <MovieSlider
        title="Upcomming Movie"
        movies={data.results}
        responsive={responsive}
      />
    </div>
  );
};

export default UpcommingMovie;
