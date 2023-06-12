import React from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { FaPlus, FaUserCircle } from "react-icons/fa";
import LeftSideNav from "../LeftSideNav/LeftSideNav";

const Header = () => {
  return (
    <Navbar className="shadow mb-4" collapseOnSelect expand="lg" bg="light" variant="light">
      <Container>
        <Navbar.Brand href="#home">
          <Button variant="primary">News</Button> Portal
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto"></Nav>
          <Nav>
            <Nav.Link href="#deets">
              <Button variant="danger">
                <FaPlus /> Advertise
              </Button>
            </Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              <Button variant="outline-dark">
                <FaUserCircle />
              </Button>
            </Nav.Link>
          </Nav>
          <div className="d-lg-none">
            <LeftSideNav />
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
