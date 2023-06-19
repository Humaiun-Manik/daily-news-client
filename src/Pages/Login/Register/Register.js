import React, { useContext } from "react";
import { Button, Form } from "react-bootstrap";
import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";

const Register = () => {
  const { createUser } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photoURL = form.photoURL.value;
    const email = form.email.value;
    const password = form.password.value;

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        form.reset();
      })
      .catch((error) => console.error(error));
  };

  return (
    <Form onSubmit={handleSubmit} className="fs-5">
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Your Name</Form.Label>
        <Form.Control type="text" name="name" placeholder="Your name" required />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Photo URL</Form.Label>
        <Form.Control type="text" name="photoURL" placeholder="Photo url" required />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" name="email" placeholder="Enter email" required />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" name="password" placeholder="Password" required />
      </Form.Group>
      <Form.Text className="text-danger d-block mb-2">
        We'll never share your email with anyone else.
      </Form.Text>
      <Button className="fs-5" variant="primary" type="submit">
        Register
      </Button>
    </Form>
  );
};

export default Register;
