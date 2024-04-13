import React from "react";
import { useTopRatedMoviesQuery } from "../../../../hooks/useTopRatedMovies";
import Alert from "react-bootstrap/Alert";
import MovieSlider from "../../../../common/MovieSlider/MovieSlider";
import { responsive } from "../../../../constants/responsive";

const TopRatedMovie = () => {
  const { data, isLoading, isError, error } = useTopRatedMoviesQuery();

  // 로딩 상태를 처리합니다.
  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  // 에러 상태를 처리합니다.
  if (isError) {
    return (
      <Alert variant="danger">{error?.message || "An error occurred"}</Alert>
    );
  }

  // 데이터가 존재하고 유효한지 확인합니다.
  if (data && data.results) {
    return (
      <div>
        <MovieSlider
          title="Top Rated Movies"
          movies={data.results}
          responsive={responsive}
          focusOnSelect={true}
          centerMode={true}
          partialVisible={true}
        />
      </div>
    );
  }

  // 데이터가 없을 경우 오류 메시지를 표시합니다.
  return <Alert variant="danger">No top-rated movies found.</Alert>;
};

export default TopRatedMovie;
