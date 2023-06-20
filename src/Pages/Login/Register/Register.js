import React, { useContext, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";
import { Link } from "react-router-dom";

const Register = () => {
  const { createUser, updateUserProfile } = useContext(AuthContext);
  const [error, setError] = useState("");
  const [accepted, setAccepted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photoURL = form.photoURL.value;
    const email = form.email.value;
    const password = form.password.value;

    createUser(email, password)
      .then((result) => {
        form.reset();
        setError("");
        handleUpdateProfile(name, photoURL);
      })
      .catch((error) => setError(error.message));
  };

  const handleAccepted = (e) => {
    setAccepted(e.target.checked);
  };

  const handleUpdateProfile = (name, photoURL) => {
    const profile = { displayName: name, photoURL: photoURL };
    updateUserProfile(profile)
      .then(() => {})
      .catch((error) => setError(error.message));
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
      <Form.Group className="mb-3">
        <Form.Check
          required
          onClick={handleAccepted}
          label={
            <>
              Accept <Link to={"/terms"}>Terms and conditions</Link>
            </>
          }
          feedback="You must agree before submitting."
          feedbackType="invalid"
        />
      </Form.Group>
      <Form.Text className="text-danger d-block mb-2">{error}</Form.Text>
      <Button className="fs-5" variant="primary" type="submit" disabled={!accepted}>
        Register
      </Button>
    </Form>
  );
};

export default Register;
