// import React from "react";
// import chooseUs1 from "../../../../assets/images/choose1.png";
// import { Container, Row, Col, Card, ListGroup } from "react-bootstrap";
// import { FaCheckCircle } from "react-icons/fa"; 
// import "./ChooseUsSection.css";

// const ChooseUsSection = () => {
//   return (
//     <Container>
//       <Row>
//         <Col className="text-center mt-5">
//           <h3>Why Choose Us</h3>
//           <p className="mt-2">
//             Sometimes, we need to check the time, wondering when our work or
//             meeting will finish, without getting caught by others.
//           </p>
//         </Col>
//       </Row>
//       <Row>
//         <Col xs={6} className="text-center">
//           <img
//             src={chooseUs1}
//             alt="Choose US"
//             style={{ height: "491px", width: "auto" }}
//           />
//         </Col>
//         <Col xs={6}>
//           <div className="timeline">
//             <Card className="border-0">
//               <Card.Body className="border-top-0">
//                 <ListGroup variant="flush">
//                   <ListGroup.Item className="border-0">
//                     <FaCheckCircle className="list-icon" /> Attention to Details
//                   </ListGroup.Item >
//                   <ListGroup.Item  className="border-0">
//                     <FaCheckCircle className="list-icon" /> A Plan for Success
//                   </ListGroup.Item>
//                   <ListGroup.Item  className="border-0">
//                     <FaCheckCircle className="list-icon" />
//                     You want results. We have found that the best way to get
//                     them is with up-front research – of your company,
//                     competitors, target market and customer psychographics. Only
//                     after we fully understand you and your customers do we
//                     recommend a plan of attack.
//                   </ListGroup.Item>
//                   <ListGroup.Item  className="border-0">
//                     <FaCheckCircle className="list-icon" /> Experts Only
//                   </ListGroup.Item >
//                   <ListGroup.Item  className="border-0">
//                     <FaCheckCircle className="list-icon" /> Meeting Deadlines
//                   </ListGroup.Item>
//                   <ListGroup.Item  className="border-0">
//                     <FaCheckCircle className="list-icon" /> Award-Winning
//                   </ListGroup.Item>
//                 </ListGroup>
//               </Card.Body>
//             </Card>
//           </div>
//         </Col>
//       </Row>
//     </Container>
//   );
// };

// export default ChooseUsSection;


import React from "react";
import chooseUs1 from "../../../../assets/images/choose1.png";
import { Container, Row, Col, Card, ListGroup } from "react-bootstrap";
import { FaCheckCircle } from "react-icons/fa";
import "./ChooseUsSection.css";

const ChooseUsSection = () => {
  return (
    <Container className="py-5">
      <Row className="justify-content-center text-center mb-4">
        <Col lg={8} md={10}>
          <h3 className="fw-bold">Why Choose Us</h3>
          <p className="mt-3 text-muted">
            Sometimes, we need to check the time, wondering when our work or
            meeting will finish, without getting caught by others.
          </p>
        </Col>
      </Row>

      <Row className="align-items-center">
        <Col xs={12} md={6} className="mb-4 mb-md-0 text-center">
          <img
            src={chooseUs1}
            alt="Choose Us"
            className="img-fluid"
            style={{ maxHeight: "491px", objectFit: "contain" }}
          />
        </Col>

        <Col xs={12} md={6}>
          <Card className="border-0 bg-transparent">
            <Card.Body className="p-0">
              <ListGroup variant="flush">
                <ListGroup.Item className="border-0 d-flex align-items-start gap-2 mb-2">
                  <FaCheckCircle className="text-success mt-1" />
                  <span>Attention to Details</span>
                </ListGroup.Item>
                <ListGroup.Item className="border-0 d-flex align-items-start gap-2 mb-2">
                  <FaCheckCircle className="text-success mt-1" />
                  <span>A Plan for Success</span>
                </ListGroup.Item>
                <ListGroup.Item className="border-0 d-flex align-items-start gap-2 mb-2">
                  <FaCheckCircle className="text-success mt-1" />
                  <span>
                    You want results. We have found that the best way to get
                    them is with up-front research – of your company,
                    competitors, target market and customer psychographics. Only
                    after we fully understand you and your customers do we
                    recommend a plan of attack.
                  </span>
                </ListGroup.Item>
                <ListGroup.Item className="border-0 d-flex align-items-start gap-2 mb-2">
                  <FaCheckCircle className="text-success mt-1" />
                  <span>Experts Only</span>
                </ListGroup.Item>
                <ListGroup.Item className="border-0 d-flex align-items-start gap-2 mb-2">
                  <FaCheckCircle className="text-success mt-1" />
                  <span>Meeting Deadlines</span>
                </ListGroup.Item>
                <ListGroup.Item className="border-0 d-flex align-items-start gap-2">
                  <FaCheckCircle className="text-success mt-1" />
                  <span>Award-Winning</span>
                </ListGroup.Item>
              </ListGroup>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default ChooseUsSection;

