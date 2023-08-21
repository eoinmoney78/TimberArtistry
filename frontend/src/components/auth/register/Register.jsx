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
    const bodyObj = { username, email, password };
    const url = `${baseURL}/auth/register`;

    try {
      const res = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(bodyObj),
      });
      const data = await res.json();

      if (res.status === 201 && data.username && data.token) {
        updateToken(data.token);
        navigate('/dashboard');
      } else {
        alert(data.message || 'Registration failed. Please try again.');
      }
    } catch (err) {
      console.error('Error:', err.message);
      alert('An error occurred. Please try again.');
    }
  }
  // async function handleSubmit(e) {
  //   e.preventDefault();

  //   console.log('Submitting registration form...');

  //   const bodyObj = JSON.stringify({
  //     username,
  //     email,
  //     password,
  //   });

  //   const url = `${baseURL}/auth/register`;

  //   const headers = new Headers();
  //   headers.append('Content-Type', 'application/json');

  //   const requestOptions = {
  //     headers,
  //     body: bodyObj,
  //     method: 'POST',
  //   };

  //   try {
  //     console.log('Sending registration request to:', url);
  //     const res = await fetch(url, requestOptions);
  //     const data = await res.json();
  //     console.log('Response data:', data);
  //     if (data.username && data.token) {
  //       console.log('User registered:', data.username);
  //       updateToken(data.token);
  //       navigate('/login');
  //     } else {
  //       console.log('Registration failed. Alerting user...');
  //       alert('Registration failed. Please try again.');
  //     }
  //   } catch (err) {
  //     console.error('An error occurred:', err);
  //   }
  // }
  return (
  <div className="register-container">
  <h2 className="register-heading">Register</h2>
  <Form className="register-form" onSubmit={handleSubmit}>
    <FormGroup>
      <Label for="username">Username</Label>
      <Input value={username} onChange={(e) => setUsername(e.target.value)} id="username" type="text" />
    </FormGroup>
    <FormGroup>
      <Label for="email">Email</Label>
      <Input value={email} onChange={(e) => setEmail(e.target.value)} id="email" type="email" />
    </FormGroup>
    <FormGroup>
      <Label for="password">Password</Label>
      <Input value={password} onChange={(e) => setPassword(e.target.value)} id="password" type="password" />
    </FormGroup>
    <Button color="primary" type="submit">Register</Button>
  </Form>
</div>
);
}

export default Register;