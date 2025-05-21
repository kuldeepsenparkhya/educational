import React from "react";
import "./BannerSection.css";
import Bannner1 from "../../../../assets/images/Banner1.png";
import banner2 from "../../../../assets/images/Banner2.png";
import banner3 from "../../../../assets/images/Banner3.png";
import banner4 from "../../../../assets/images/Banner4.png";
import banner5 from "../../../../assets/images/Banner5.png";

import { Button, Col, Container, Row } from "react-bootstrap";
import { FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const BannerSection = () => {
  const naviagte = useNavigate();

  return (
    <>
      <Container fluid className="py-1 bg-white container">
        <Row className="align-items-center">
          <Col md={6} className="text-center text-md-start px-4">
            <p className="text-info fw-bold letter-spacing">A TRUSTED COMPANY</p>
            <h4 className="display-5 f-6">
              Nex<span className="text-primary">t-Gen Software</span> <br />
              Services to Businesses.
            </h4>
            <p className="text-muted mt-3">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim{" "}
              <span className="text-info">velit mollit</span>.
            </p>
            <Button variant="info" className="mt-3 px-4 py-2 rounded-pill text-white" onClick={() => naviagte("/contactUs")}>
              Contact →
            </Button>
          </Col>

          <Col xs={12} md={6} className="text-center mt-4 mt-md-0">
            <div className="banner-container position-relative">
              <img src={banner2} alt="3D Character" className="banner-img character" />
              <img src={Bannner1} alt="Monitor" className="banner-img monitor" />
              <img src={banner3} alt="Drone" className="banner-img drone" />
              <img src={banner4} alt="VR Headset" className="banner-img vrr" />
              <img src={banner5} alt="Phone" className="banner-img phone" />
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default BannerSection;
