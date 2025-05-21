import React from 'react';
import './ContactUsPage.css';
import { Col, Container, Row, Button, Form } from 'react-bootstrap';
import FormikForm from '../components/formikFroms/FromikForm'; 
import * as Yup from 'yup';
import contactUsImage from "../../assets/images/download.png"
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import { useDispatch, useSelector } from 'react-redux'; 
import { createContact } from '../redux/Slice/ContactUsSlice/ContactUsSlice'; 
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const validationSchema = Yup.object({
  name: Yup.string().required('Name is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  phone: Yup.string().required('Phone number is required'),
  message: Yup.string().required('Message is required'),
});

const initialValues = {
  name: '',
  email: '',
  phone: '',
  message: '',
};

const ContactUsPage = () => {
  const dispatch = useDispatch();
  const { loading, success, error } = useSelector((state) => state.contact);

  const handleSubmit = async (values,{resetForm}) => {
    const contactData = {
      name: values.name,
      email: values.email,
      phoneNumber: values.phone,
      helpMessage: values.message,
    };
  
    try {
      const response = await dispatch(createContact(contactData)).unwrap();
      toast.success('Your message was sent successfully!');
      resetForm();
    } catch (error) {
      console.error('Error while sending contact message:', error);
      const errorMessage = error?.message || 'Failed to send message.';
      toast.error(errorMessage);
    }
  };
  

  return (
    <>
      <Header />
      <Container>
        <Row className="justify-content-center my-5 contact-us-main-container">
          <Col xs={12} md={6}>
          <div>
            <img src={contactUsImage} alt="contactUsImage" height="600px" width="auto"  className="img-fluid contact-image"
            // style={{mixBlendMode:"darken"}}
            
            />
          </div>
          </Col>
          <Col md={6} className="col-auto shadow-sm p-4 contact-us-container">
            <h2 className="form-heading text-center mb-4">Tell Us About Yourself</h2>
            
            <FormikForm
              initialValues={initialValues}
              onSubmit={handleSubmit}
              validationSchema={validationSchema}
            >
              {({ handleChange, handleBlur, values, errors, touched }) => (
                <>
                  <Form.Group controlId="name" className="mb-3">
                    <Form.Label>Your Name</Form.Label>
                    <Form.Control
                      type="text"
                      className="form-input-fields"
                      name="name"
                      value={values.name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      isInvalid={touched.name && !!errors.name}
                    />
                    <Form.Control.Feedback type="invalid">{errors.name}</Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group controlId="email" className="mb-3">
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control
                      type="email"
                      name="email"
                      className="form-input-fields"
                      value={values.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      isInvalid={touched.email && !!errors.email}
                    />
                    <Form.Control.Feedback type="invalid">{errors.email}</Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group controlId="phone" className="mb-3">
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control
                      type="text"
                      className="form-input-fields"
                      name="phone"
                      value={values.phone}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      isInvalid={touched.phone && !!errors.phone}
                    />
                    <Form.Control.Feedback type="invalid">{errors.phone}</Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group controlId="message" className="mb-3">
                    <Form.Label>How Can We Help You?</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={4}
                      placeholder="Hi there, I would like to ..."
                      name="message"
                      value={values.message}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      isInvalid={touched.message && !!errors.message}
                    />
                    <Form.Control.Feedback type="invalid">{errors.message}</Form.Control.Feedback>
                  </Form.Group>

                  <Button type="submit" variant="primary" className="form-btn text-center" disabled={loading}>
                    {loading ? 'Submitting...' : 'Send Message'}
                  </Button>
                </>
              )}
            </FormikForm>
          </Col>
        </Row>
      </Container>

      <Footer />

      <ToastContainer />
    </>
  );
};

export default ContactUsPage;
