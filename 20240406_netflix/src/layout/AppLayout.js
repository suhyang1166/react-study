import "bootstrap/dist/css/bootstrap.min.css";
import "./AppLayout.style.css";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, Outlet } from "react-router-dom";

const AppLayout = () => {
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
                  Home
                </Nav.Link>
              </Link>
              <Link to="/movies">
                <Nav.Link href="#action2" className="link">
                  Movies
                </Nav.Link>
              </Link>
            </Nav>
            <Form className="d-flex">
              <Button variant="outline-success">
                <FontAwesomeIcon icon={faMagnifyingGlass} />
              </Button>
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Outlet />
    </div>
  );
};

export default AppLayout;
