import React, { useContext } from "react";
import { Button, Container, Image, Nav, Navbar } from "react-bootstrap";
import { FaPlus, FaUserCircle } from "react-icons/fa";
import LeftSideNav from "../LeftSideNav/LeftSideNav";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);

  return (
    <Navbar className="shadow mb-4" collapseOnSelect expand="lg" bg="light" variant="light">
      <Container>
        <Navbar.Brand>
          <Link to={"/"}>
            <Button className="me-2 fs-5" variant="primary">
              News
            </Button>
          </Link>
          Portal
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto"></Nav>
          <Nav>
            {user?.uid ? (
              <>
                <Nav.Link className="fs-5 mt-1">{user?.displayName}</Nav.Link>
                <Nav.Link eventKey={2}>
                  {user?.photoURL ? (
                    <Image style={{ width: "40px" }} src={user?.photoURL} roundedCircle></Image>
                  ) : (
                    <FaUserCircle />
                  )}
                </Nav.Link>
                <Nav.Link>
                  <Button onClick={logOut} variant="dark">
                    Log Out
                  </Button>
                </Nav.Link>
              </>
            ) : (
              <>
                <Nav.Link as={Link} className="fs-5 fw-medium mt-1" to={"/login"}>
                  Login
                </Nav.Link>
                <Nav.Link as={Link} className="fs-5 fw-medium mt-1" to={"/register"}>
                  Register
                </Nav.Link>
              </>
            )}
            <Nav.Link>
              <Button variant="danger">
                <FaPlus /> Advertise
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
