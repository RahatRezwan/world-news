import React from "react";
import { Carousel } from "react-bootstrap";
import { Brand1, Brand2 } from "../../../assets/brands";
const BrandCarousel = () => {
   return (
      <Carousel>
         <Carousel.Item>
            <img className="d-block w-100" src={Brand1} alt="First slide" />
         </Carousel.Item>
         <Carousel.Item>
            <img className="d-block w-100" src={Brand2} alt="Second slide" />
         </Carousel.Item>
      </Carousel>
   );
};

export default BrandCarousel;
