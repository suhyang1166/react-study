import React from "react";
import { Form } from "react-bootstrap";

const PopularFilter = ({ onSortChange }) => {
  return (
    <Form.Select
      aria-label="Popular"
      onChange={(e) => onSortChange(e.target.value)}
    >
      <option selected>정렬</option>
      <option value="desc">인기순</option>
      <option value="asc">인기 낮은순</option>
      <option value="new">최신순</option>
    </Form.Select>
  );
};

export default PopularFilter;
