import "bootstrap/dist/css/bootstrap.min.css";
import "./AppLayout.style.css";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, Outlet, useNavigate } from "react-router-dom";

const AppLayout = () => {
  const [keyword, setKeyword] = useState("");
  const navigate = useNavigate();

  const searchByKeyword = (e) => {
    e.preventDefault();
    // url을 바꿔주기
    navigate(`/movies?q=${keyword}`);
    setKeyword("");
  };

  return (
    <div className="appLayout">
      <Navbar expand="lg" className="bg-body-tertiary navbar">
        <Container fluid className="container">
          <Link to="/" className="link">
            <Navbar.Brand href="#" className="logoImg link">
              <p></p>
            </Navbar.Brand>
          </Link>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Link to="/">
                <Nav.Link href="#action1" className="link">
                  HOME
                </Nav.Link>
              </Link>
              <Link to="/movies">
                <Nav.Link href="#action2" className="link">
                  MOVIES
                </Nav.Link>
              </Link>
            </Nav>
            <Form className="d-flex" onSubmit={searchByKeyword}>
              <Button variant="outline-success" type="submit">
                <FontAwesomeIcon icon={faMagnifyingGlass} />
              </Button>
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
                value={keyword}
                onChange={(e) => {
                  setKeyword(e.target.value);
                }}
              />
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Outlet />
      <footer className="footer">
        <div></div>
        <p>Welcome to my page</p>
      </footer>
    </div>
  );
};

export default AppLayout;
