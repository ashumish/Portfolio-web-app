import React, { useRef, useEffect } from "react";
import { Container } from "reactstrap";
import "./header.css";
const navLinks = [
  { dispaly: "Home", url: "#home" },
  { dispaly: "About", url: "/#about" },
  { dispaly: "Portfolio", url: "/#portfolio" },
  { dispaly: "Services", url: "/#services" },
  { dispaly: "Contact", url: "/#contact" },
];
const Header = () => {
  // const handleClick = (e)=>{
  //   e.preventDefault();
  //   const targetAttr =e.target.getAttribute('href')
  //   const location =document.querySelector(targetAttr).offsetTop
  //   window.scrollTo({
  //     left:0,
  //     top: location - 70,
  //   })
  // }
  // const headerRef = useRef(null);
  // useEffect(() => {
  //   window.addEventListener("scroll", () => {
  //     if (
  //       document.body.scrollTop > 80 ||
  //       document.documentElement.scrollTop > 80
  //     ) {
  //       headerRef.current.add("header__shrink");
  //     } else {
  //       headerRef.current.remove("header__shrink");
  //     }
  //   });
  //   return () => {
  //     window.removeEventListener("scroll");
  //   };
  // }, []);

  return (
    <header className="header">
      <Container>
        <div className="navigation d-flex align-items-center justify-content-between">
          <div className="logo">
            <h5>Marshal</h5>
          </div>
          <div className="nav__menu">
            <ul className="nav__list">
              {navLinks.map((item, index) => (
                <li className="nav__item" key={index}>
                  <a href={item.url}>{item.dispaly}</a>
                </li>
              ))}
            </ul>
          </div>
          <div className="nav__right d-flex align-items-center gap-4">
            <button className="btn">Let's Talk</button>
            <span className="mobile__menu">
              <i class="ri-menu-5-line"></i>
            </span>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
