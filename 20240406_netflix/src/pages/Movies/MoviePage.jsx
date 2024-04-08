import React from "react";
import { useSearchMovieQuery } from "../../hooks/useSearchMovie";
import { useSearchParams } from "react-router-dom";
import Alert from "react-bootstrap/Alert";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import MovieCard from "../../common/MovieCard/MovieCard";

// 경로2가지
// nav바에서 클릭해서 온 경우 => popularMovie 보여주기
// keyword를 입력해서 온 경우 => keyword와 관련된 영화들을 보여줌

// 페이지네이션 설치
// page state 만들기
// 페이지네이션 클릭할때마다 page바꿔주기
// page 값이 바뀔때마다 useSearchMovie에 page 넣어서 fetch
const MoviePage = () => {
  const [query, setQuery] = useSearchParams();
  const keyword = query.get("q");

  const { data, isLoading, isError, error } = useSearchMovieQuery({ keyword });
  console.log("ddd", data);
  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  if (isError) {
    return <Alert variant="danger">{error.message}</Alert>;
  }
  return (
    <Container>
      <Row>
        <Col lg={3} xs={14}>
          필터
        </Col>
        <Col lg={9} xs={12}>
          <Row>
            {data?.results.map((movie, index) => (
              <Col key={index} lg={6} xs={12}>
                <MovieCard movie={movie}></MovieCard>
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default MoviePage;
