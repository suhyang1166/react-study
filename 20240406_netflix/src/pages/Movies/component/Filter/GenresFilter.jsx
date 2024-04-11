import React from "react";
import { Form } from "react-bootstrap";
import { useMovieGenreQuery } from "../../../../hooks/useMovieGenre";
import Alert from "react-bootstrap/Alert";

const GenresFilter = ({ onGenreChange }) => {
  const { data: genres, isLoading, isError, error } = useMovieGenreQuery();

  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  if (isError) {
    return <Alert variant="danger">{error.message}</Alert>;
  }

  return (
    <Form.Select
      aria-label="genre"
      onChange={(e) => onGenreChange(e.target.value)}
    >
      <option selected>장르 선택</option>
      {genres.map((genre) => (
        <option key={genre.id} value={genre.id}>
          {genre.name}
        </option>
      ))}
    </Form.Select>
  );
};

export default GenresFilter;
