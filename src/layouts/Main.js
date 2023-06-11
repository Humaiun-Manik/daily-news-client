import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Shared/Header/Header";
import { Col, Container, Row } from "react-bootstrap";
import LeftSideNav from "../Shared/LeftSideNav/LeftSideNav";
import RightSideNav from "../Shared/RightSideNav/RightSideNav";
import Footer from "../Shared/Footer/Footer";

const Main = () => {
  return (
    <div>
      <Header></Header>
      <Container>
        <Row>
          <Col lg={2}>
            <LeftSideNav></LeftSideNav>
          </Col>
          <Col lg={7}>
            <Outlet></Outlet>
          </Col>
          <Col lg={3}>
            <RightSideNav></RightSideNav>
          </Col>
        </Row>
      </Container>
      <Footer></Footer>
    </div>
  );
};

export default Main;
