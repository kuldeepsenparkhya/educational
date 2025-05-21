import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import cl1 from "../../../../assets/images/Cl1.png";
import cl2 from "../../../../assets/images/cl2.jpg";
import cl3 from "../../../../assets/images/cl3.png";
import cl4 from "../../../../assets/images/cl4.png";
import { ArrowRight } from "lucide-react";
import { CustomSlider, NextArrow, PrevArrow } from "../../slider/SlickSlider";

const TrusteedCompanies = () => {
  
  const settings = { 
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
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
      icon: "🧱",
      title: "Web Development",
      desc: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.",
    },
    {
      icon: "📱",
      title: "App Development",
      desc: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.",
      highlight: true,
    },
    {
      icon: "🎮",
      title: "AR/VR Development",
      desc: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.",
    },
    {
      icon: "🔗",
      title: "Blockchain Development",
      desc: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.",
    },
  ];

  return (
    <Container className="my-5">
      <Row className="mb-4">
        <Col className="text-center">
          <h3 className="fw-semibold text-muted">
            Our Services
          </h3>
        </Col>
      </Row>

      {/* <Row className="justify-content-center text-center ">
        <Col xs={6} sm={3}>
          <img src={cl1} alt="Company 1" width="140px" height="auto" />
        </Col>
        <Col xs={6} sm={3}>
          <img src={cl2} alt="Company 2" width="100px" height="auto" />
        </Col>
        <Col xs={6} sm={3}>
          <img src={cl3} alt="Company 3" width="110px" height="auto" />
        </Col>
        <Col xs={6} sm={3}>
          <img src={cl4} alt="Company 4" width="140px" height="auto" />
        </Col>
      </Row> */}

      <Row className="g-4">
      <CustomSlider settings={settings} >
        {features.map((feature, index) => (
          <Col key={index} md={3} className="p-2">
            <Card
              className={`h-100 p-4 border-0 shadow-sm ${
                feature.highlight ? "bg-light-subtle rounded-4" : ""
              }`}
              style={{
                borderRadius: "16px",
              }}
            >
              <div
                className="mb-3"
                style={{
                  fontSize: "24px",
                  backgroundColor: "#E5F2FF",
                  width: "40px",
                  height: "40px",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  
                }}
              >
                {feature.icon}
              </div>
              <h6 className="fw-semibold">{feature.title}</h6>
              <p className="text-muted" style={{ fontSize: "14px" }}>
                {feature.desc}
              </p>
              {/* <div
                className="mt-auto d-flex align-items-center text-primary fw-medium"
                style={{ fontSize: "14px", cursor: "pointer" }}
              >
                Learn More <ArrowRight className="ms-2" />
              </div> */}
            </Card>
          </Col>
        ))}
        </CustomSlider>
      </Row>
    </Container>
  );
};

export default TrusteedCompanies;
