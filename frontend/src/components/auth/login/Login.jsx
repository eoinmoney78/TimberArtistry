import React, { useState } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { useNavigate } from 'react-router-dom';
import { baseURL } from '../../../environment';
import './login.css';

function Login({ updateToken }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log('Submitting login form...');

    const bodyObj = JSON.stringify({
      email,
      password,
    });

    const url = `${baseURL}/auth/login`;

    try {
      console.log('Sending login request to:', url);

      const res = await fetch(url, {
        method: 'POST',
        headers: new Headers({
          'Content-Type': 'application/json',
        }),
        body: bodyObj,
      });

      console.log(res);

      const data = await res.json();
      console.log('Response data:', data);console.log('Full Response:', res, 'Response data:', data);

      if (res.status === 200) {
        if (data._id && data.token) {
          console.log('User logged in:', data.username); // or just log the whole data object for the user
          updateToken(data.token);
          navigate('/dashboard');
      } else {
          console.log('Login failed. Alerting user...');
          alert('Invalid email or password. Please try again.');
      }
      
      } else {
        console.log('Login request failed with status:', res.status);
        alert('Login request failed. Please try again later.');
      }
    } catch (error) {
      console.error('An error occurred:', error);
      console.log('Login failed due to an error. Please check the console for details.');
      alert('An error occurred during login. Please try again later.');
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
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="password">Password</Label>
          <Input
            type="password"
            id="password"
            className="login-input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
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
