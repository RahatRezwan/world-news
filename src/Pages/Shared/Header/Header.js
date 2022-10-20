import React, { useContext } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../context/AuthProvider/AuthProvider";

const Header = () => {
   const { user, logOut } = useContext(AuthContext);

   const handleLogOut = () => {
      logOut()
         .then(() => {})
         .catch((error) => console.log(error));
   };

   return (
      <div>
         <Navbar collapseOnSelect expand="lg" bg="light" variant="light" className="mb-4">
            <Container>
               <Navbar.Brand>
                  <Link to="/" className="text-decoration-none fs-4 fw-bold">
                     World News
                  </Link>
               </Navbar.Brand>
               <Navbar.Toggle aria-controls="responsive-navbar-nav" />
               <Navbar.Collapse id="responsive-navbar-nav">
                  <Nav className="me-auto">
                     <Nav.Link>All News</Nav.Link>
                     <Nav.Link>Pricing</Nav.Link>
                     <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                     </NavDropdown>
                  </Nav>
                  <Nav>
                     <Nav.Link>
                        {user?.uid ? (
                           <>
                              <span>{user?.displayName}</span>
                              <button onClick={handleLogOut} className="btn btn-primary ms-2">
                                 Logout
                              </button>
                           </>
                        ) : (
                           <>
                              <Link to="/login" className="text-decoration-none">
                                 Login
                              </Link>
                              <Link to="/register" className="text-decoration-none ms-3">
                                 Register
                              </Link>
                           </>
                        )}
                     </Nav.Link>
                  </Nav>
               </Navbar.Collapse>
            </Container>
         </Navbar>
      </div>
   );
};

export default Header;
