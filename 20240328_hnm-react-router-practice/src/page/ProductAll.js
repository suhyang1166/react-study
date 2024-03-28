import React, { useEffect, useState } from "react";
import ProductCard from "../component/ProductCard";
import { Container, Row, Col } from "react-bootstrap";

const ProductAll = () => {
  const [productList, setProductList] = useState([]);

  const getProducts = async () => {
    let url = `https://my-json-server.typicode.com/suhyang1166/react-study/master/20240328_hnm-react-router-practice/products`;
    let response = await fetch(url);
    let data = await response.json();
    setProductList(data);
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div>
      <Container>
        <Row>
          {productList.map((menu) => (
            <Col lg={3}>
              <ProductCard item={menu}></ProductCard>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default ProductAll;
