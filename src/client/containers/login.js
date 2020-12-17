import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./login.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const emailAn = "test@gmail.com";
  const passwordAn = "test";
  const emailSt = "student@gmail.com";
  const passwordSt = "student";

  function validateForm() {
    if (email.match(emailAn) && password.match(passwordAn)) {
      console.log("Great Success Admin");
      return true;
    } else if (email.match(emailSt) && password.match(passwordSt)) {
      console.log("Great Success Student");
      return true;
    } else {
      console.log("No Success");
      return false;
    }
  }

  function signUp() {
    if (validateForm()) {
      console.log("Sign Up Success");
      return false;
    } else {
      return true;
    }
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <div className="Login">
      <Form onSubmit={handleSubmit}>
        <Form.Group size="lg" controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            autoFocus
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Group size="lg" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Button
          type="submit"
          class="btn btn-primary"
          disabled={!validateForm()}
        >
          Login
        </Button>
        <Button type="submit" class="btn btn-primary" disabled={!signUp()}>
          Sign Up
        </Button>
      </Form>
    </div>
  );
}
