import React from 'react'
import { Container, Row, Col } from "reactstrap";
import "./footer.css";
const Footer = () => {
  return (
    <footer className='pb-4'>
      <Container className="text-center footer">
        <p>
          {/* <i class="ri-copyright-line"></i> */}
          Copyright 2022, Developed by Ashutosh. All Right Reserved{" "}
        </p>
      </Container>
    </footer>
  );
}

export default Footer;