import React from "react";
import { Button, ButtonGroup, Carousel, ListGroup } from "react-bootstrap";
import brand1 from "../../asset/images/4660417_2413480.jpg";
import brand2 from "../../asset/images/hand-arrange-white-letters-brand.jpg";
import {
  FaGoogle,
  FaGithub,
  FaFacebook,
  FaYoutube,
  FaTwitter,
  FaWhatsapp,
  FaDiscord,
  FaClipboardList,
  FaShieldAlt,
} from "react-icons/fa";

const RightSideNav = () => {
  return (
    <div>
      <ButtonGroup className="w-100" vertical>
        <Button className="mb-2 fs-5" variant="outline-primary">
          <FaGoogle /> Login via Google
        </Button>
        <Button className="fs-5" variant="outline-dark">
          <FaGithub /> Login via Github
        </Button>
      </ButtonGroup>
      <div className="mt-3">
        <h5>Find Us On</h5>
        <ListGroup>
          <ListGroup.Item className="mb-3 fs-5">
            <FaFacebook /> FaceBook
          </ListGroup.Item>
          <ListGroup.Item className="mb-2 fs-5 border-top">
            <FaYoutube /> YouTube
          </ListGroup.Item>
          <ListGroup.Item className="mb-2 fs-5 border-top">
            <FaTwitter /> Twitter
          </ListGroup.Item>
          <ListGroup.Item className="mb-2 fs-5 border-top">
            <FaWhatsapp /> WhatsApp
          </ListGroup.Item>
          <ListGroup.Item className="mb-2 fs-5 border-top">
            <FaDiscord /> Discord
          </ListGroup.Item>
          <ListGroup.Item className="mb-2 fs-5 border-top">
            <FaClipboardList /> Privacy Policy
          </ListGroup.Item>
          <ListGroup.Item className="mb-2 fs-5 border-top">
            <FaShieldAlt /> Terms & Condition
          </ListGroup.Item>
        </ListGroup>
      </div>
      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100" src={brand1} alt="First slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={brand2} alt="Second slide" />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default RightSideNav;
