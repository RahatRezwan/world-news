import React from "react";
import { ListGroup } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { FaGoogle, FaGithub, FaFacebook, FaTwitter, FaWhatsapp, FaReddit } from "react-icons/fa";
import BrandCarousel from "../BrandCarousel/BrandCarousel";
const RightSideNav = () => {
   return (
      <div>
         <div className="w-100">
            <Button className="mb-2 w-100" variant="outline-primary">
               <FaGoogle /> Login with Google
            </Button>
            <Button className="w-100" variant="outline-dark">
               <FaGithub /> Login with Github
            </Button>
         </div>

         <div className="mt-5">
            <h5 className="text-center">Find Us On</h5>
            <ListGroup as="ul">
               <ListGroup.Item className="mb-2" as="li">
                  <FaFacebook /> Facebook
               </ListGroup.Item>
               <ListGroup.Item className="mb-2" as="li">
                  <FaTwitter /> Twitter
               </ListGroup.Item>
               <ListGroup.Item className="mb-2" as="li">
                  <FaWhatsapp /> Whatsapp
               </ListGroup.Item>
               <ListGroup.Item className="mb-2" as="li">
                  <FaReddit /> Reddit
               </ListGroup.Item>
            </ListGroup>
         </div>
         <div>
            <BrandCarousel />
         </div>
      </div>
   );
};

export default RightSideNav;
