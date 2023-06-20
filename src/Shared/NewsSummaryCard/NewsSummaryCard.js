import React from "react";
import { Card, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaBookmark, FaShareAlt, FaStar, FaEye } from "react-icons/fa";

const NewsSummaryCard = ({ news }) => {
  const { _id, author, title, image_url, details, rating, total_view } = news;

  return (
    <Card className="mb-2">
      <Card.Header className="d-flex justify-content-between align-items-center">
        <div className="d-flex mt-3">
          <Image className="me-3" style={{ height: "60px" }} src={author?.img} roundedCircle />
          <div>
            <h5>{author?.name}</h5>
            <p>{author?.published_date}</p>
          </div>
        </div>
        <div className="fs-5">
          <FaBookmark className="me-2" />
          <FaShareAlt />
        </div>
      </Card.Header>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Img variant="top" src={image_url} />
        <Card.Text>
          {details.length > 250 ? (
            <>
              {details.slice(0, 250) + "..."} <Link to={`/news/${_id}`}>Read more</Link>
            </>
          ) : (
            <>{details}</>
          )}
        </Card.Text>
      </Card.Body>
      <Card.Footer className="d-flex justify-content-between">
        <div>
          <FaStar className="text-warning me-2 fs-5" />
          <span>{rating.number}</span>
        </div>
        <div>
          <FaEye className="me-2 fs-5" />
          <span>{total_view}</span>
        </div>
      </Card.Footer>
    </Card>
  );
};

export default NewsSummaryCard;
