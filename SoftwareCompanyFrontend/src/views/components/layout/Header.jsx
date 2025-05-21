import React from "react";
import Logo from "../../../assets/icons/logo.svg";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="sticky-top bg-white py-3" style={{ zIndex: 1030 }}>
      <Container>
        <div className="border-bottom p-2">
          <Navbar expand="md">
            <Navbar.Brand as={Link} to="/">
              <img src={Logo} alt="Unada-logo" height="40" />
            </Navbar.Brand>

            <Navbar.Toggle aria-controls="basic-navbar-nav" />

            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto gap-3 align-items-center w-100 justify-content-end">
                <Nav.Link as={Link} to="/">
                  Home
                </Nav.Link>
                <Nav.Link as={Link} to="/services">
                  Service
                </Nav.Link>
                <Nav.Link as={Link} to="/projects">
                  Portfolio
                </Nav.Link>
                <Nav.Link as={Link} to="/blogs">
                  Blogs
                </Nav.Link>

                <Nav.Link
                  as={Link}
                  to="/contactUs"
                  className="fw-semibold text-decoration-none"
                  style={{ color: "#33D3D4" }}
                >
                  Contact Us →
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </div>
      </Container>
    </header>
  );
};

export default Header;
