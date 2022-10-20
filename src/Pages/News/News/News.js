import React from "react";
import { Card } from "react-bootstrap";
import { FaEye, FaRegBookmark, FaShareAlt, FaStar } from "react-icons/fa";
import { useLoaderData } from "react-router-dom";

const News = () => {
   const newsDetails = useLoaderData();
   const { title, image_url, author, details, rating, total_view } = newsDetails;
   return (
      <Card className="mb-5">
         <Card.Img variant="top" src={image_url} />
         <Card.Body>
            <Card.Title className="fs-3 mb-3">{title}</Card.Title>
            <div className="d-flex align-items-center justify-content-between mb-4">
               <p className="mb-0">
                  <strong>Author:</strong> {author.name}
               </p>
               <p className="mb-0">
                  <strong>Published Date:</strong> {author.published_date}
               </p>
            </div>
            <div className="d-flex align-items-center justify-content-start gap-5 mb-4">
               <div className="d-flex align-items-center gap-2">
                  <FaStar className="text-warning" />
                  <span>{rating.number}</span>
               </div>
               <div className="d-flex align-items-center gap-2">
                  <FaEye />
                  <span>{total_view}</span>
               </div>
               <div>
                  <FaRegBookmark />
                  <FaShareAlt className="ms-3" />
               </div>
            </div>
            <Card.Text>
               <p>{details}</p>
            </Card.Text>
         </Card.Body>
      </Card>
   );
};

export default News;
