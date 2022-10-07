import React, { useRef, useEffect } from "react";
import Typical from "react-typical";
import "./hero-section.css";
import { Container, Row, Col } from "reactstrap";
import heroImg from "../../assests/Images/hero__img.png";
const HeroSection = () => {
  // const textRef = useRef();
  // useEffect(() => {
  //   init(textRef.current, {
  //     backDelay: 1500,
  //     showCursor: true,
  //     strings: [
  //       "Ashutosh Mishra",
  //       "Frontend Developer",
  //       "UX-UI Designer",
  //       "AWS Cloud Computing",
  //       "Docker & Containers",
  //     ]
  //   })
  // }, []);

  return (
    <section className="hero__section" id="home">
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className="here__content">
              <p className="md-3">Welcome to my Word!</p>
              {/* <h5 className="md-4">Hii</h5> */}
              <h2 className="hero__title md-4">
                I'M{" "}
                <span>
                  <Typical
                    className="the__string"
                    loop={Infinity}
                    steps={[
                      "Frontend Developer",
                      1000,
                      "UX-UI Designer",
                      1000,
                      "AWS Colud Computing",
                      1000,
                      "Docker & Containers",
                      1000,
                    ]}
                  />
                </span>
              </h2>
              <p>
                {" "}
                * I have 1 year of experience in HTML, CSS, JavaScript, React.js
                * basic hands-on knowledge in AWS (Amazon Webservices). * I have
                basic hands-on knowledge in docker and docker container. *
                Understanding of Aglie and Kanban software development
                methodologies. * Completed hands-on training in Networking and
                AWS. * Basic knowledge of Git source code version control tool.
                * I am self motivated, quick learner and i have good
                communication skills. * I can do well in a team and collaborate
                well. * Getting things done the right way with little guidance
                is always been my goal. * I always like to learn new things and
                try to deliver most out of my knowledge and skills.
              </p>
              <div className="mt-5 hero__btns d-flex align-items-center gap-4">
                <button className="btn hire__btn">
                  <a href="#">Hire Me</a>
                </button>
                <button className="btn">Contact</button>
              </div>
            </div>
          </Col>
          <Col lg="6" md="6">
              <div className="hero__img">
                <img src={heroImg} alt="" className="w-100" />
              </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default HeroSection;
