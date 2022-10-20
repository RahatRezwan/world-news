import React from "react";
import { Card, Image } from "react-bootstrap";
import { FaEye, FaRegBookmark, FaShareAlt, FaStar } from "react-icons/fa";
import { useLoaderData } from "react-router-dom";

const News = () => {
   const newsDetails = useLoaderData();
   const { title, image_url, author, details, rating, total_view } = newsDetails;
   return (
      <Card className="mb-5">
         <Card.Header className="d-flex justify-content-between align-items-center">
            <div className="d-flex gap-2 align-items-center">
               <Image roundedCircle src={author.img} style={{ height: "60px" }} />
               <div>
                  <h6 className="mb-0">{author.name}</h6>
                  <p className="m-0">
                     <small>{author.published_date}</small>
                  </p>
               </div>
            </div>
            <div>
               <FaRegBookmark />
               <FaShareAlt className="ms-2" />
            </div>
         </Card.Header>
         <Card.Img variant="top" src={image_url} />
         <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>
               <p>{details}</p>
            </Card.Text>
         </Card.Body>
         <Card.Footer className="d-flex justify-content-between align-items-center">
            <div className="d-flex align-items-center gap-2">
               <FaStar className="text-warning" />
               <span>{rating.number}</span>
            </div>
            <div className="d-flex align-items-center gap-2">
               <FaEye />
               <span>{total_view}</span>
            </div>
         </Card.Footer>
      </Card>
   );
};

export default News;
