import React from "react";
import { Button, ButtonGroup, ListGroup } from "react-bootstrap";
import { FaGoogle, FaGithub, FaFacebook, FaYoutube, FaTwitter, FaWhatsapp, FaDiscord } from "react-icons/fa";

const RightSideNav = () => {
  return (
    <div>
      <ButtonGroup vertical>
        <Button className="mb-2" variant="outline-primary">
          <FaGoogle /> Login via Google
        </Button>
        <Button variant="outline-dark">
          <FaGithub /> Login via Github
        </Button>
      </ButtonGroup>
      <div className="mt-3">
        <h5>Find Us On</h5>
        <ListGroup>
          <ListGroup.Item>
            <FaFacebook /> FaceBook
          </ListGroup.Item>
          <ListGroup.Item>
            <FaYoutube /> YouTube
          </ListGroup.Item>
          <ListGroup.Item>
            <FaTwitter /> Twitter
          </ListGroup.Item>
          <ListGroup.Item>
            <FaWhatsapp /> WhatsApp
          </ListGroup.Item>
          <ListGroup.Item>
            <FaDiscord /> Discord
          </ListGroup.Item>
          <ListGroup.Item>Privacy Policy</ListGroup.Item>
          <ListGroup.Item>Terms & Condition</ListGroup.Item>
        </ListGroup>
      </div>
    </div>
  );
};

export default RightSideNav;
