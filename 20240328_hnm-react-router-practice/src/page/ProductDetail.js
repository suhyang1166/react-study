import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
  let { id } = useParams();

  const [product, setProduct] = useState();

  const getProductDetail = async () => {
    let url = `https://my-json-server.typicode.com/suhyang1166/react-study/products/${id}`;

    let response = await fetch(url);
    let data = await response.json();
    setProduct(data);
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
