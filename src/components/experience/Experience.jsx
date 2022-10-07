import React from 'react'
import { Container, Row, Col } from "reactstrap";
import "./experience.css";
const Experience = () => {
  return (
    <section>
      <Container>
        <Row>
          <Col lg="12" className="mb-5">
            <h2>Experience</h2>
          </Col>
          <Col lg="6">
            <div className="single__experience__container">
              <div className="single__experience">
                <span className="experience__icon">
                  <i class="ri-briefcase-line"></i>
                  <h6>2021-2022</h6>
                  <h5>Frontend Developer</h5>
                  <p>
                    Frontend Developer and DevOps Engineer at NextQuorter ·
                    Full-time Sep 2021 - Present · 1 yr 2 mos Hyderabad,
                    Telangana, India
                  </p>
                </span>
              </div>
              <div className="single__experience">
                <span className="experience__icon">
                  <i class="ri-briefcase-line"></i>
                  <h6>2021-2022</h6>
                  <h5>Frontend Developer</h5>
                  <p>
                    Frontend Developer and DevOps Engineer at NextQuorter ·
                    Full-time Sep 2021 - Present · 1 yr 2 mos Hyderabad,
                    Telangana, India
                  </p>
                </span>
              </div>
              <div className="single__experience">
                <span className="experience__icon">
                  <i class="ri-briefcase-line"></i>
                  <h6>2021-2022</h6>
                  <h5>Frontend Developer</h5>
                  <p>
                    Frontend Developer and DevOps Engineer at NextQuorter ·
                    Full-time Sep 2021 - Present · 1 yr 2 mos Hyderabad,
                    Telangana, India
                  </p>
                </span>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Experience