import React, { useContext, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";

const Login = () => {
  const { signIn } = useContext(AuthContext);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    signIn(email, password)
      .then((result) => {
        form.reset();
        setError("");
        navigate(from, { replace: true });
      })
      .catch((error) => setError(error.message));
  };

  return (
    <Form onSubmit={handleSubmit} className="fs-5">
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" name="email" placeholder="Enter email" required />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" name="password" placeholder="Password" required />
      </Form.Group>
      <Form.Text className="text-danger d-block mb-2">{error}</Form.Text>
      <Button className="fs-5" variant="primary" type="submit">
        LOGIN
      </Button>
    </Form>
  );
};

export default Login;
