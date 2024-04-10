import React, { useState } from "react";
import "./MoviePage.style.css";
import { useSearchMovieQuery } from "../../hooks/useSearchMovie";
import { useSearchParams } from "react-router-dom";
import Alert from "react-bootstrap/Alert";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import MovieCard from "../../common/MovieCard/MovieCard";
import ReactPaginate from "react-paginate";

// 경로2가지
// nav바에서 클릭해서 온 경우 => popularMovie 보여주기
// keyword를 입력해서 온 경우 => keyword와 관련된 영화들을 보여줌

// 페이지네이션 설치
// page state 만들기
// 페이지네이션 클릭할때마다 page바꿔주기
// page 값이 바뀔때마다 useSearchMovie에 page 넣어서 fetch
const MoviePage = () => {
  const [query, setQuery] = useSearchParams();
  const [page, setPage] = useState(1);
  const keyword = query.get("q");

  const { data, isLoading, isError, error } = useSearchMovieQuery({
    keyword,
    page,
  });
  console.log("ddd", data);
  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  if (isError) {
    return <Alert variant="danger">{error.message}</Alert>;
  }

  const handlePageClick = ({ selected }) => {
    setPage(selected + 1);
  };

  return (
    <Container>
      <Row>
        <Col lg={3} xs={12}>
          필터
        </Col>
        <Col lg={9} xs={10}>
          <Row className="card-grid">
            {data?.results.map((movie, index) => (
              <Col key={index}>
                <MovieCard movie={movie}></MovieCard>
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
      <ReactPaginate
        nextLabel=">"
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        marginPagesDisplayed={2}
        pageCount={data?.total_pages} // 전체페이지가 몇개인지
        previousLabel="<"
        pageClassName="page-item"
        pageLinkClassName="page-link"
        previousClassName="page-item"
        previousLinkClassName="page-link"
        nextClassName="page-item"
        nextLinkClassName="page-link"
        breakLabel="..."
        breakClassName="page-item"
        breakLinkClassName="page-link"
        containerClassName="pagination"
        activeClassName="active"
        renderOnZeroPageCount={null}
        forcePage={page - 1}
      />
    </Container>
  );
};

export default MoviePage;
