import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProjects } from "../redux/Slice/ProjectSlice/ProjectSlice.js";
import { Container, Card, Col, Row } from "react-bootstrap";
import './BlogsPage.css';
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";

const ProjectsPage = () => {
  const dispatch = useDispatch();
  const { projectsAll, loading, error } = useSelector((state) => state.projects);

  useEffect(() => {
    dispatch(getAllProjects());
  }, [dispatch]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;


  console.log("projects",projectsAll)

  return (
    <>
      <Header />
      <div className="hero-section py-5 text-center text-white">
        <Container>
          <h4 className="text-muted mb-1">Projects</h4>
          <h1 className="fw-bold display-5">All Showcasing Projects</h1>
          <p className="lead text-muted">
            The latest industry news, interviews, technologies, and resources.
          </p>
        </Container>

        <Container className="my-5">
          <Row className="g-4">
            {Array.isArray(projectsAll) && projectsAll?.map((project) => (
              <Col key={project._id} md={4}>
                <Card className="h-100 shadow-sm text-start p-3">
                  <Card.Img variant="top" src={project.images[0]} alt={project.title} />
                  <Card.Body>
                    <Card.Title>{project.title}</Card.Title>
                    <Card.Text>{project.description}</Card.Text>
                    <div className="d-flex flex-wrap">
                      {project.skills.map((skill, index) => (
                        <span key={index} className="badge bg-primary me-1 mb-1">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
      <Footer />
    </>
  );
};

export default ProjectsPage;
