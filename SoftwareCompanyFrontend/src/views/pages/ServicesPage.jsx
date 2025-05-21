import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { ArrowRight } from "lucide-react";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";

const ServicesPage = () => {
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
    <>
      <Header />
      <Container className="py-5">
        <Row className="mb-4">
          <Col className="text-center">
            <h3 className="fw-semibold text-muted">Our Services</h3>
          </Col>
        </Row>

        <Row className="g-4">
          {features.map((feature, index) => (
            <Col key={index} md={3}>
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
        </Row>
      </Container>
      <Footer />
    </>
  );
};

export default ServicesPage;
