import React from "react";
import developmentImg from "../../../../assets/images/development.png";
import { Container, Row, Col } from "react-bootstrap";

const DevelopmentService = () => {
  return (
    <Container className="py-5">
      <Row className="justify-content-center text-center mb-4">
        <Col lg={8} md={10}>
          <h3 className="fw-bold">End-To-End Development Services</h3>
          <p className="mt-3 text-muted">
            Sometimes, we need to check the time, wondering when our work or
            meeting will finish, without getting caught by others.
          </p>
        </Col>
      </Row>

      <Row className="justify-content-center">
        <Col xs={12} md={10} lg={8} className="text-center">
          <img
            src={developmentImg}
            alt="Development Illustration"
            className="img-fluid"
            style={{ maxHeight: "500px", objectFit: "contain" }}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default DevelopmentService;


