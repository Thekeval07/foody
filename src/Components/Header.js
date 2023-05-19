import React from "react";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
// import { FaUserCircle } from "@react-icons/all-files/fa";
import { FaUserCircle } from "react-icons/fa";
import { CgShoppingCart } from "react-icons/cg";

import { Link } from "react-router-dom";
import logo from "../image/logo.png";

const Header = () => {
  return (
    <div>
      <Navbar
        className="navbar  navbar-light"
        style={{ backgroundColor: "white" }}
        expand="lg"
      >
        <Container>
          <Navbar.Brand as={Link} to={"/"}>
            <img
              className="logo"
              src={logo}
              style={{
                width: "130px",
                position: "absolute",
                borderRadius: "100px",
                top: "20%",
                boxShadow: "0.5px 0.1px 2px rgb(151,147,147)",
              }}
            ></img>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse
            id="basic-navbar-nav "
            className="basic-navbar"
            style={{ justifyContent: "end" }}
          >
            <Nav className=" items">
              <Nav.Link as={Link} to={"/"}>
                HOME
              </Nav.Link>
              <Nav.Link as={Link} to={"about"}>
                CATERING ORDER
              </Nav.Link>
              <Nav.Link as={Link} to={"contact"}>
                ORDER ONLINE
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
          <Navbar.Collapse
            id="basic-navbar-nav "
            className="basic-navbar"
            style={{ justifyContent: "end" }}
          >
            
            <div className="icons">
              <div className="user-icon">
                <FaUserCircle></FaUserCircle>
              </div>
              <div className="user-icon">
                <CgShoppingCart></CgShoppingCart>
              </div>
            </div>
            </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* <Navbar className="navbar fixed-top navbar-light" style={{ backgroundColor: "#e3f2fd" }}>
     
     
        <Container>
          <Navbar.Brand className="logo" as={Link} to={'/'}>FOODY</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to={"/"}>Home</Nav.Link>
            <Nav.Link as={Link} to={"about"}>About</Nav.Link>
            <Nav.Link as={Link} to={"contact"}>Contact</Nav.Link>
          </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar> */}
      <br />

      {/* <header>
        <nav className="navbar  fixed-top navbar-expand-lg navbar-light ">
          <Link className="navbar-brand" to='/'>
            Foody
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item active">
                <Link className="nav-link" to="/">
                  Home 
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="contact">
                  Contact
                </Link>
              </li>
              
            </ul>
          </div>
        </nav>
      </header> */}
    </div>
  );
};

export default Header;
