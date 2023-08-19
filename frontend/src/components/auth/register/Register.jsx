import React, { useState } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { useNavigate } from 'react-router-dom';
import { baseURL } from '../../../environment';
import './register.css'; // Import your CSS file for styling

function Register({ updateToken }) {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();

    console.log('Submitting registration form...');

    const bodyObj = JSON.stringify({
      username,
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
      console.log('Sending registration request to:', url);
      const res = await fetch(url, requestOptions);
      const data = await res.json();
      console.log('Response data:', data);
      if (data.username && data.token) {
        console.log('User registered:', data.username);
        updateToken(data.token);
        navigate('/login');
      } else {
        console.log('Registration failed. Alerting user...');
        alert('Registration failed. Please try again.');
      }
    } catch (err) {
      console.error('An error occurred:', err);
    }
  }

  return (
    <div className="register-container">
      <h2 className="register-heading">Register</h2>
      <Form className="register-form" onSubmit={handleSubmit}>
        <FormGroup>
          <Label for="username">Username</Label>
          <Input
            type="text"
            id="username"
            className="register-input"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="email">Email</Label>
          <Input
            type="email"
            id="email"
            className="register-input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="password">Password</Label>
          <Input
            type="password"
            id="password"
            className="register-input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
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
