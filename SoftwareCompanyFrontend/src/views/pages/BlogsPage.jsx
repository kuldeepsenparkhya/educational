import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container, Card, Col, Row } from "react-bootstrap";
import { getAllBlogs } from "../redux/Slice/blogSlice/blogSlice";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import './BlogsPage.css';

const BlogsPage = () => {
  const dispatch = useDispatch();
  const { blogs, loading, error } = useSelector((state) => state.blogs);
  
  useEffect(() => {
    dispatch(getAllBlogs());
  }, [dispatch]);

  if (loading) return <div>Loading...</div>;
  // if (error) return <div>Error: {error}</div>;

  return (
    <>
      <Header />
      <div className="hero-section py-5 text-center text-white">
        <Container>
          <h4 className="text-muted mb-1">Our Blogs</h4>
          <h1 className="fw-bold display-5">Resources and insights</h1>
          <p className="lead text-muted">
            The latest industry news, interviews, technologies, and resources.
          </p>
        </Container>

        <Container className="my-5">
          <Row className="g-4">
            {Array.isArray(blogs) && blogs?.map((blog) => (
              <Col key={blog._id} md={4}>
                <Card className="h-100 shadow-sm text-start p-3">
                  <Card.Img variant="top" src={blog.images[0]} />
                  <Card.Body>
                    <small className="text-primary">Category: {blog.skills.join(", ")}</small>
                    <Card.Title>{blog.title}</Card.Title>
                    <Card.Text>{blog.description}</Card.Text>
                    <div className="d-flex align-items-center mt-3">
                      <img
                        src={blog.personImage}
                        className="rounded-circle"
                        width="30px"
                        height="30px"
                        alt="Profile"
                      />
                      <div className="ms-2">
                        <div className="fw-semibold">{blog.personName}</div>
                        <small className="text-muted">{new Date(blog.createdAt).toLocaleDateString()}</small>
                      </div>
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

export default BlogsPage;
