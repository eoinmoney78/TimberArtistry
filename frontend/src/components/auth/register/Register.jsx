import React, { useRef } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { useNavigate } from 'react-router-dom';
import { baseURL } from '../../../environment';
import './register.css'; // Import your CSS file for styling

function Register({ updateToken }) {
  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
  
    let bodyObj = JSON.stringify({
      username: email, // Use email as the initial username, you can change this as needed
      email,
      password,
    });
  
    const url = `${baseURL}/auth/register`;
  
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
  
    const requestOptions = {
      headers,
      body: bodyObj,
      method: 'POST',
    };
  
    try {
      const res = await fetch(url, requestOptions);
      const data = await res.json();
  
      if (data.user) {
        updateToken(data.token);
        navigate('/dashboard');
      } else {
        alert('Registration failed. Please try again.');
      }
    } catch (err) {
      console.error(err);
    }
  }
  
  
  return (
    <div className="register-container">
      <h2 className="register-heading">Register</h2>
      <Form className="register-form" onSubmit={handleSubmit}>
        <FormGroup>
          <Label for="firstName">First Name</Label>
          <Input
            type="text"
            id="firstName"
            className="register-input"
            ref={firstNameRef} // Use ref here
          />
        </FormGroup>
        <FormGroup>
          <Label for="lastName">Last Name</Label>
          <Input
            type="text"
            id="lastName"
            className="register-input"
            ref={lastNameRef} // Use ref here
          />
        </FormGroup>
        <FormGroup>
          <Label for="email">Email</Label>
          <Input
            type="email"
            id="email"
            className="register-input"
            ref={emailRef} // Use ref here
          />
        </FormGroup>
        <FormGroup>
          <Label for="password">Password</Label>
          <Input
            type="password"
            id="password"
            className="register-input"
            ref={passwordRef} // Use ref here
          />
        </FormGroup>
        <Button color="primary" type="submit" className="register-button">
          Register
        </Button>
      </Form>
    </div>
  );
}

export default Register;
