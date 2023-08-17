import React, { useRef } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { useNavigate } from 'react-router-dom';
import { baseURL } from '../../../environment';
import './login.css'; // Import your CSS file for styling

function Login({ updateToken }) {
  const emailRef = useRef();
  const passwordRef = useRef();
  const navigate = useNavigate(); // Get the navigate function from react-router-dom

  const handleSubmit = async e => {
    e.preventDefault();

    const bodyObj = JSON.stringify({
      email: emailRef.current.value,
      password: passwordRef.current.value,
    });

    const url = `${baseURL}/auth/login`;

    try {
      const res = await fetch(url, {
        method: 'POST',
        headers: new Headers({
          'Content-Type': 'application/json',
        }),
        body: bodyObj,
      });

      const data = await res.json();
      console.log('data:', data);
      emailRef.current.value = '';
      passwordRef.current.value = '';

      if (data.user && data.token) {
        updateToken(data.token, data.user.admin); // send admin status along with the token
        console.log('DataToken:', data.user);

        if (data.user.admin) {
          navigate('/dashboard'); // Navigate to the admin dashboard if user is an admin
        } else {
          navigate('/home'); // Navigate to the regular user dashboard route on successful login
        }
      } else {
        alert('Try a different email or password');
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="login-container">
      <h2 className="login-heading">Login</h2>
      <Form className="login-form" onSubmit={handleSubmit}>
        <FormGroup>
          <Label for="email">Email</Label>
          <Input
            type="email"
            id="email"
            className="login-input"
            ref={emailRef} // Use ref here
          />
        </FormGroup>
        <FormGroup>
          <Label for="password">Password</Label>
          <Input
            type="password"
            id="password"
            className="login-input"
            ref={passwordRef} // Use ref here
          />
        </FormGroup>
        <Button color="primary" type="submit" className="login-button">
          Login
        </Button>
      </Form>
    </div>
  );
}

export default Login;
