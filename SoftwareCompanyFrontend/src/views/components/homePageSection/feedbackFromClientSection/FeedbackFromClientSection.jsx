import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import profilePic from "../../../../assets/images/feedback1.png";
import "./FeedbackFromClientSection.css";
import { CustomSlider, NextArrows, PrevArrows } from "../../slider/SlickSlider";

const FeedbackFromClientSection = () => {
  const settings = { 
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    prevArrow: <PrevArrows />,
    nextArrow: <NextArrows />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const features = [
    {
      icon: profilePic,
      title: "Web Development",
      desc: "Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et...",
    },
    {
      icon: profilePic,
      title: "App Development",
      desc: "Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et...",
      highlight: true,
    },
    {
      icon: profilePic,
      title: "UI/UX Design",
      desc: "Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et...",
    },
    {
      icon: profilePic,
      title: "Product Strategy",
      desc: "Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et...",
    },
  ];

  return (
    <Container>
      <Row>
        <Col className="text-center mt-5">
          <h3>Feedback from our clients</h3>
          <p className="mt-2">
            Our WORK speaks louder than our WORD. Find out how we helped clients
            overcome challenges and succeed.
          </p>
        </Col>
      </Row>

      <Row className="g-4 mt-2 mb-5">
        <CustomSlider settings={settings} >
          {features.map((feature, index) => (
            <div key={index} className="testimonial-cards px-2">
              <Card
                className={`h-100 p-4 border-0 shadow-sm ${
                  feature.highlight ? "bg-light-subtle rounded-4" : ""
                }`}
                style={{ borderRadius: "16px" }}
              >
                <div className="d-flex align-items-center mb-3">
                  <div
                    style={{
                      backgroundColor: "#E5F2FF",
                      width: "60px",
                      height: "60px",
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      overflow: "hidden",
                      flexShrink: 0,
                    }}
                  >
                    <img
                      src={feature.icon}
                      alt="Client Icon"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />
                  </div>
                  <div className="ms-3">
                    <h5 className="mb-0">Jhony D</h5>
                    <p className="text-muted mb-0">@jhony_d</p>
                  </div>
                </div>
                <h6 className="fw-semibold">{feature.title}</h6>
                <p className="text-muted" style={{ fontSize: "14px" }}>
                  {feature.desc}
                </p>
              </Card>
            </div>
          ))}
        </CustomSlider>
      </Row>
    </Container>
  );
};

export default FeedbackFromClientSection;
