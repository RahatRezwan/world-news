import React, { useContext, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { AuthContext } from "../../../context/AuthProvider/AuthProvider";

const Register = () => {
   const [error, setError] = useState("");
   const { createAUser } = useContext(AuthContext);

   /* Sign Up handle */
   const handleSignUp = (event) => {
      event.preventDefault();
      const form = event.target;
      const name = form.name.value;
      const imageUrl = form.image_url.value;
      const email = form.email.value;
      const password = form.password.value;
      createAUser(email, password)
         .then((result) => {
            const user = result.user;
            console.log(user);
            form.reset();
         })
         .catch((error) => {
            console.log(error);
            setError(error.code);
         });
   };
   return (
      <div className="w-75 mx-auto mt-5">
         <h4 className="text-center">Sign Up</h4>
         <Form onSubmit={handleSignUp}>
            <Form.Group className="mb-3">
               <Form.Label>Name</Form.Label>
               <Form.Control type="text" name="name" placeholder="Enter Name" />
            </Form.Group>
            <Form.Group className="mb-3">
               <Form.Label>Image Url</Form.Label>
               <Form.Control type="text" name="image_url" placeholder="Enter your image url" />
            </Form.Group>
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

export default Register;
