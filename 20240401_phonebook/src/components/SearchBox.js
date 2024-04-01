import React, { useState } from "react";
import { Row, Col, Form, Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";

const SearchBox = () => {
  let [keyword, setKeyword] = useState("");
  let dispatch = useDispatch();
  let { contact } = useSelector((state) => state);
  const searchByName = (e) => {
    e.preventDefault();
    dispatch({ type: "SEARCH_BY_USERNAME", payload: { keyword } });
  };
  return (
    <Form onSubmit={searchByName} className="search-form">
      <Row className="search-Row">
        <Col lg={9} className="search-Col">
          <Form.Control
            type="text"
            placeholder="친구를 검색해주세요"
            onChange={(e) => setKeyword(e.target.value)}
          />
        </Col>
        <Col lg={3} className="search-Col">
          <Button className="search-btn">찾기</Button>
        </Col>
      </Row>
    </Form>
  );
};

export default SearchBox;
