import React from "react";
import { Container, Row, Col } from "reactstrap";
import "./contact.css";
import Form from "../form/Form";
const Contact = () => {
  return (
    <section>
      <Container>
        <Row>
          <Col lg="12" className="mb-5">
            <h2>Get In Touch</h2>
          </Col>
          <Col lg="6" md="6">
            <div className="contact__info__container d-flex align-items-center gap-5">
              <div className="single__info__box w-50">
                <h6>Address</h6>
                <p>India</p>
              </div>
              <div className="single__info__box w-50">
                <h6>Phone</h6>
                <p>+918381858530</p>
              </div>
            </div>
            <div className="contact__info__container d-flex align-items-center gap-5">
              <div className="single__info__box w-50">
                <h6>Email</h6>
                <p>ashutosh.csmishra@gmail.com</p>
              </div>
              <div className="single__info__box w-50">
                <h6>Loction</h6>
                <p>Deoria, Uttar Pradesh</p>
              </div>
            </div>
          </Col>
          <Col lg="6" md="6">
            <Form/>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
