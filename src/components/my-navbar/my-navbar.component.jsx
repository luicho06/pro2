import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import "./my-navbar.styles.css";

const MyNavbar = () => {
  return (
    <div className=" ">
      <Navbar
        fixed="top"
        expand="md"
        className="animate-navbar nav-theme justify-content-between"
      >
        
        <div>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto ">
              <Nav.Link href="./" className="navItems">Home</Nav.Link>
              <Nav.Link href="./expertise" className="navItems">Expertise</Nav.Link>
              <Nav.Link href="./skills" className="navItems">Skills</Nav.Link>
              <Nav.Link href="./contact" className="navItems">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>
    </div>
  );
};

export default MyNavbar;
