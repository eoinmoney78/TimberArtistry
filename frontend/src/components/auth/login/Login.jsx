
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

    const bodyObj = JSON.stringify({
      email,
      password,
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

      if (res.status === 200) {
        if (data._id && data.token) {
            updateToken(data.token);
            if (data.isAdmin !== undefined) {
                localStorage.setItem('isAdmin', JSON.stringify(data.isAdmin));
            }
            navigate('/');
        } else {
            alert('Invalid email or password. Please try again.');
        }
      } else {
        alert('Login request failed. Please try again later.');
      }
    } catch (error) {
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
