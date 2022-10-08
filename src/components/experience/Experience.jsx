import React from "react";
import { Container, Row, Col } from "reactstrap";
import "./experience.css";
const Experience = () => {
  const developmentExperience = [
    {
      year: "2021 - 2022",
      title: "Frontend Developer & Devops Engineer",
      desc: " Frontend Developer and DevOps Engineer at NextQuorter · Full-time Sep 2021 - Present · 1 yr 2 mos Hyderabad,Telangana,India",
    },
    {
      year: "2021 - 2022",
      title: "Frontend Developer & Devops Engineer",
      desc: " Frontend Developer and DevOps Engineer at NextQuorter · Full-time Sep 2021 - Present · 1 yr 2 mos Hyderabad,Telangana,India",
    },
    {
      year: "2021 - 2022",
      title: "Frontend Developer & Devops Engineer",
      desc: " Frontend Developer and DevOps Engineer at NextQuorter · Full-time Sep 2021 - Present · 1 yr 2 mos Hyderabad,Telangana,India",
    },
  ];
  return (
    <section id="experience">
      <Container>
        <Row>
          <Col lg="12" className="mb-5">
            <h2>Experience</h2>
          </Col>
          <Col lg="6" md="6">
            <div className="single__experience__container">
              {developmentExperience.map((item, index) => (
                <div className="single__experience" key={index}>
                  <span className="experience__icon">
                    <i class="ri-briefcase-line"></i>
                    <h6>{item.year}</h6>
                    <h5>{item.title}</h5>
                    <p>{item.desc}</p>
                  </span>
                </div>
              ))}
            </div>
          </Col>
          <Col lg="6" md="6">
            <div className="single__experience__container">
              {developmentExperience.map((item, index) => (
                <div className="single__experience" key={index}>
                  <span className="experience__icon">
                    <i class="ri-briefcase-line"></i>
                    <h6>{item.year}</h6>
                    <h5>{item.title}</h5>
                    <p>{item.desc}</p>
                  </span>
                </div>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Experience;
