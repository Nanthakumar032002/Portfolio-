import React from "react";
import resume from "../../assets/images/Nantha-resume.jpg";
import { meta } from "../../content_option";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col, Button } from "react-bootstrap";
import './resume.css'

const Resume = () => {
  return (
    <HelmetProvider>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Resume | {meta.title}</title>
        <meta name="description" content={meta.description} />
      </Helmet>

      <Container className="mt-5 resume-container">
      <Row >
          <Col>
            <a href={resume} download="Nantha-Resume.jpg">
              <Button variant="danger" className="download-resume">Download Resume</Button>
            </a>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col md={8} lg={6}>
            <div className="resume-container">
              <img src={resume} alt="Resume" className="img-fluid resume-img" />
            </div>
          </Col>
        </Row>
      </Container>
    </HelmetProvider>
  );
};
export default Resume;
