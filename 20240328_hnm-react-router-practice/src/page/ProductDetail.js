import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchProductDetail } from "../redux/reducers/productSlice";

const ProductDetail = () => {
  let { id } = useParams();
  const dispatch = useDispatch();

  const product = useSelector((state) => state.product.selectedItem);

  const getProductDetail = () => {
    dispatch(fetchProductDetail(id));
  };

  useEffect(() => {
    getProductDetail();
  }, []);

  return (
    <Container>
      <Row className="product">
        <Col className="product-img">
          <img src={product?.img} alt="`product${id}`"></img>
        </Col>
        <Col className="product-detail">
          <div>{product?.title}</div>
          <div>₩{product?.price}</div>
          <div>{product?.new == true ? "Conscious choice" : ""}</div>
          <select>
            <option selected>사이즈 선택</option>
            {product?.size.map((sizeOption, index) => (
              <option key={index}>{sizeOption}</option>
            ))}
          </select>
          <button>추가</button>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductDetail;
