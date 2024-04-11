import "./MoviePage.style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useSearchMovieQuery } from "../../hooks/useSearchMovie";
import MovieCard from "../../common/MovieCard/MovieCard";
import Alert from "react-bootstrap/Alert";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ReactPaginate from "react-paginate";
import GenresFilter from "./component/Filter/GenresFilter";
import PopularFilter from "./component/Filter/PopularFilter";

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
  const pageTitle = keyword ? "Search" : "Movie";
  const [page, setPage] = useState(1);
  const [sortOrder, setSortOrder] = useState("");
  const [genresFilter, setGenresFilter] = useState("");

  const { data, isLoading, isError, error } = useSearchMovieQuery({
    keyword,
    page,
  });
  const handlePageClick = ({ selected }) => {
    setPage(selected + 1);
  };

  const handleSortChange = (order) => {
    setSortOrder(order);
  };

  const handleGenreChange = (genreId) => {
    setGenresFilter(genreId);
  };
  // 필터링된 영화 데이터
  let filteredMovies = genresFilter
    ? data?.results.filter((movie) =>
        movie.genre_ids.includes(parseInt(genresFilter))
      )
    : data?.results || [];

  // 정렬 적용
  if (sortOrder) {
    filteredMovies.sort((a, b) => {
      if (sortOrder === "asc") {
        return a.vote_average - b.vote_average;
      } else if (sortOrder === "desc") {
        return b.vote_average - a.vote_average;
      } else if (sortOrder === "new") {
        // 'new' 정렬 로직: 최신순으로 정렬
        return new Date(b.release_date) - new Date(a.release_date);
      }
    });
  }

  // 장르 필터 변경 시 페이지를 1로 리셋
  useEffect(() => {
    setPage(1);
  }, [genresFilter]);

  useEffect(() => {
    // URL의 쿼리 파라미터가 변경될 때 장르 필터를 초기화
    setGenresFilter("");
  }, [keyword]);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  if (isError) {
    return <Alert variant="danger">{error.message}</Alert>;
  }
  return (
    <Container>
      <Row>
        <Col lg={3} xs={12}>
          <div className="movie-page-title">
            {pageTitle}
            {keyword ? <p className="movie-search-keyword">({keyword})</p> : ""}
          </div>
          <div className="filter-wrap">
            <div className="filter-box">
              <PopularFilter onSortChange={handleSortChange} />
              <GenresFilter onGenreChange={handleGenreChange} />
            </div>
          </div>
        </Col>
        <Col lg={9} xs={10}>
          <Row className="card-grid">
            {filteredMovies.map((movie, index) => (
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
