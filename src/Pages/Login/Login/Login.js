import React, { useContext, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../context/AuthProvider/AuthProvider";

const Login = () => {
   const [error, setError] = useState("");
   const { loginAUser } = useContext(AuthContext);
   const location = useLocation();

   const from = location.state?.from?.pathname || "/";
   /* navigate home after login */
   const navigate = useNavigate();

   /* Login Data */
   const handleLogin = (event) => {
      event.preventDefault();
      const form = event.target;
      const email = form.email.value;
      const password = form.password.value;
      loginAUser(email, password)
         .then((result) => {
            const user = result.user;
            console.log("logged in: ", user);
            setError("");
            form.reset();
            navigate(from, { replace: true });
         })
         .catch((error) => {
            console.log(error);
            setError(error.code);
         });
   };
   return (
      <div className="w-75 mx-auto mt-5">
         <h4 className="text-center">Login</h4>
         <Form onSubmit={handleLogin}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
               <Form.Label>Email address</Form.Label>
               <Form.Control type="email" name="email" placeholder="Enter email" required />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
               <Form.Label>Password</Form.Label>
               <Form.Control type="password" name="password" placeholder="Password" required />
            </Form.Group>
            <Button variant="primary" type="submit">
               Submit
            </Button>

            <Form.Text className="text-danger d-block">{error}</Form.Text>
         </Form>
      </div>
   );
};

export default Login;
