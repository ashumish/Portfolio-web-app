import React,{useState} from 'react';
import "./about.css";
import { Container, Row, Col } from "reactstrap";
import aboutImg from "../../assests/Images/hero__img.png";
import Education from './Education';
import Skills from './Skills';
const About = () => {
    const[aboutFilter, setAboutFilter]=useState("ABOUT");
  return (
    <section id="about">
      <Container>
        <Row>
          <Col lg="12" className="mb-5">
            <h2>About Me</h2>
          </Col>
          <Col lg="4" md="3">
            <div className="about__btns d-flex flex-column align-items-center">
              <button
                className={`about__btn ${
                  aboutFilter === "ABOUT" ? "about__btn-active" : ""
                }`}
                onClick={() => setAboutFilter("ABOUT")}
              >
                About Me
              </button>
              <button
                className={`about__btn ${
                  aboutFilter === "EDUCATION" ? "about__btn-active" : ""
                }`}
                onClick={() => setAboutFilter("EDUCATION")}
              >
                Education
              </button>
              <button
                className={`about__btn ${
                  aboutFilter === "SKILLS" ? "about__btn-active" : ""
                }`}
                onClick={() => setAboutFilter("SKILLS")}
              >
                Skills
              </button>
              <button
                className={`about__btn ${
                  aboutFilter === "Award" ? "about__btn-active" : ""
                }`}
                onClick={() => setAboutFilter("Award")}
              >
                Award
              </button>
            </div>
          </Col>
          <Col lg="8" md="9">
            {aboutFilter === "ABOUT" && (
              <div className="about__content__wrapper d-flex gap-5">
                <div className="about__img">
                  <img src={aboutImg} alt="" className="w-100"></img>
                </div>
                <div className="about__content w-75">
                  <h2>I'M Ashutosh Mishra</h2>
                  <p>
                    {" "}
                    * I have 1 year of experience in HTML, CSS, JavaScript,
                    React.js * basic hands-on knowledge in AWS (Amazon
                    Webservices). * I have basic hands-on knowledge in docker
                    and docker container. * Understanding of Aglie and Kanban
                    software development methodologies. * Completed hands-on
                    training in Networking and AWS. * Basic knowledge of Git
                    source code version control tool. * I am self motivated,
                    quick learner and i have good communication skills. * I can
                    do well in a team and collaborate well. * Getting things
                    done the right way with little guidance is always been my
                    goal. * I always like to learn new things and try to deliver
                    most out of my knowledge and skills.
                  </p>
                  <div className="social__links">
                    <h6 className="mb-3">Connect with me</h6>
                    <span className="social__icons">
                      <a href="https://github.com/ashumish">
                        <i class="ri-github-fill"></i>
                      </a>
                    </span>
                    <span className="social__icons">
                      <a href="https://m.facebook.com/100006063092508/">
                        <i class="ri-facebook-line"></i>
                      </a>
                    </span>
                    <span className="social__icons">
                      <a href="https://www.instagram.com/throw_exception_/">
                        <i class="ri-instagram-line"></i>
                      </a>
                    </span>
                    <span className="social__icons">
                      <a href="https://www.linkedin.com/in/ashutosh-mishra-190740192/">
                        <i class="ri-linkedin-box-line"></i>
                      </a>
                    </span>
                  </div>
                </div>
              </div>
            )}
            {aboutFilter === "EDUCATION" && <Education />}
            {aboutFilter === "SKILLS" && <Skills />}
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default About