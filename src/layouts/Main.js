import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import Header from "../Pages/Shared/Header/Header";
import LeftSideNav from "../Pages/Shared/LeftSideNav/LeftSideNav";
import RightSideNav from "../Pages/Shared/RightSideNav/RightSideNav";

const Main = () => {
   return (
      <div>
         <Header />
         <Container>
            <Row>
               <Col lg="2">
                  <LeftSideNav />
               </Col>
               <Col lg="7">
                  <Outlet />
               </Col>
               <Col lg="3">
                  <RightSideNav />
               </Col>
            </Row>
         </Container>
      </div>
   );
};

export default Main;
