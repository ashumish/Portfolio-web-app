import React from "react";
import { Container, Row, Col } from "reactstrap";
import "./services.css";
const Services = () => {
  const servicesData = [
    {
      icon: "ri-code-line",
      title: "Web Design",
      desc: "Web design refers to the visual design and experiential aspects of a particular website. Were going to dive into more detail about web design throughout the rest of this article.",
    },
    {
      icon: "ri-code-s-slash-line",
      title: "Web Development",
      desc: "Web design refers to the visual design and experiential aspects of a particular website. Were going to dive into more detail about web design throughout the rest of this article.",
    },
    {
      icon: "ri-qr-code-line",
      title: "App Developement",
      desc: "Web design refers to the visual design and experiential aspects of a particular website. Were going to dive into more detail about web design throughout the rest of this article.",
    },
    {
      icon: "ri-code-line",
      title: "UX / UI",
      desc: "Web design refers to the visual design and experiential aspects of a particular website. Were going to dive into more detail about web design throughout the rest of this article.",
    },
    {
      icon: "ri-cloud-line",
      title: "AWS Cloud",
      desc: "Web design refers to the visual design and experiential aspects of a particular website. Were going to dive into more detail about web design throughout the rest of this article.",
    },
    {
      icon: "ri-ship-2-line",
      title: "Docker & Container",
      desc: "Web design refers to the visual design and experiential aspects of a particular website. Were going to dive into more detail about web design throughout the rest of this article.",
    },
  ];
  return (
    <section id="services">
      <Container>
        <Row>
          <Col lg="12" className="services__top mb-5">
            <h6>Features</h6>
            <h2>What services I provide</h2>
          </Col>
          {servicesData.map((item,index) => (
            <Col lg="4" md="6" sm="6" key={index} className="mb-4">
              <div className="single__service">
                <span className="service__icon">
                  <i class={item.icon}></i>
                </span>
                <h2>{item.title}</h2>
                <p>{item.desc}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Services;
