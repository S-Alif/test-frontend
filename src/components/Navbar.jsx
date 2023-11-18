import { useState } from "react";
import { HashLink } from "react-router-hash-link";

const Navbar = () => {

  const [linkOpen, setLinkOpen] = useState(false)

  let menuToggle = () => {
    linkOpen == false ? setLinkOpen(true) : setLinkOpen(false)
  }

  return (
    <>
      <nav className="navigation">
        <div className="container">
          <div className="logo">
            <HashLink to="/#home" className="text-decoration-none fs-4 fw-bolder text-dark">Tuhin&apos;s Fashion</HashLink>
          </div>
          <div className={`nav-links ${linkOpen ? "open" : ""}`}>
            <ul className="text-center ps-0">
              
              <li className="border-bottom border-2 border-secondary-subtle"> <HashLink to="/#home" className="d-inline-block text-decoration-none text-capitalize text-dark fs-4 fw-bold pb-5 pt-5" onClick={menuToggle}>হোম</HashLink> </li>
              
              <li className="border-bottom border-2 border-secondary-subtle"><HashLink to="/#about" className="d-inline-block text-decoration-none text-capitalize text-dark fs-4 fw-bold pb-5 pt-5" onClick={menuToggle}>আমাদের সম্পর্কে</HashLink></li>

              <li className="border-bottom border-2 border-secondary-subtle"><HashLink to="/#products" className="d-inline-block text-decoration-none text-capitalize text-dark fs-4 fw-bold pb-5 pt-5" onClick={menuToggle}>প্রোডাক্ট</HashLink></li>

              <li className=""><HashLink to="/#contact" className="d-inline-block text-decoration-none text-capitalize text-dark fs-4 fw-bold pb-5 pt-5" onClick={menuToggle}>যোগাযোগ</HashLink></li>

            </ul>
          </div>
          <div className="controls">
            <button className={`bg-transparent fs-5 border-0 ${linkOpen ? "d-none" : ""}`} onClick={menuToggle}><i className="fa-solid fa-bars-staggered"></i></button>
            <button className={`bg-transparent fs-5 border-0 ${linkOpen ? "" : "d-none"}`} onClick={menuToggle}><i className="fa-solid fa-xmark"></i></button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;