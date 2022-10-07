import React from "react";
import { Container, Row, Col } from "reactstrap";
import "./portfolio.css";
import Img01 from "../../assests/Images/demoImg.jpg";
import Img02 from "../../assests/Images/demoImg.jpg";
import Img03 from "../../assests/Images/demoImg.jpg";
import Img04 from "../../assests/Images/demoImg.jpg";
const protfolioData = [
  {
    imgUrl: Img01,
    title: "React Loading Page",
    url: "Live Demo",
  },
  {
    imgUrl: Img02,
    title: "React Loading Page",
    url: "Live Demo",
  },
  {
    imgUrl: Img03,
    title: "React Loading Page",
    url: "Live Demo",
  },
  //   {
  //     imgUrl: Img04,
  //     title: "React Loading Page",
  //     url: "#",
  //   },
];
const Portfolio = () => {
  return (
    <section>
      <Container>
        <Row>
          <Col lg="12" className="portfolio__top mb-5">
            <h6>Explore my work and give a feedback</h6>
            <h2>Portfolio</h2>
          </Col>

          {protfolioData.map((item, index) => (
            <Col lg="4" md="6" sm="6" key={index}>
              <div className="portfolio__card">
                <div className="portfolio__img">
                  <img src={item.imgUrl} alt="" className="w-100"></img>
                </div>
                <div className="portfolio__content">
                  <h5>{item.title}</h5>
                  <a href="">{item.url}</a>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Portfolio;
