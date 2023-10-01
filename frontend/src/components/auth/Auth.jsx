import React, { useState } from 'react';
import { Button, Col, Container, Row } from 'reactstrap';
import Logout from '../auth/logout/Logout';
import Register from './register/Register';
import Login from './login/Login';
import './auth.css';

function Auth(props) {
  console.log('Auth component rendered!');
  const [showLogin, setShowLogin] = useState(true); 
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  const toggleForm = () => {
    console.log('Toggling form...');
    setShowLogin(!showLogin);
  };

  const handleLogin = (token, admin) => {
    console.log('admin value on login:', admin); 
    console.log('User logged in with token:', token);
    setIsLoggedIn(true);
    setIsAdmin(admin);
    props.updateToken(token);
    console.log('Setting isAdmin to false in local storage');
    localStorage.setItem('isAdmin', JSON.stringify(false));
};


const handleLogout = () => {
  console.log('Logging out user...');
  setIsLoggedIn(false);
  setIsAdmin(false);
  props.updateToken('');
  localStorage.setItem('isAdmin', JSON.stringify(false));

};


  if (isLoggedIn) {
    return (
      <Container className="auth-container">
                <Row>
                    <Col>
                        <Logout onLogout={handleLogout} onAdminUpdate={setIsAdmin} isAdmin={isAdmin} />
                    </Col>
                </Row>
            </Container>
    );
  }

  return (
    <Container className="auth-container">
      <Row>
        <Col>
          <Button color="primary" onClick={toggleForm} className="toggle-button">
            {showLogin ? 'To Register' : 'To Login'}
          </Button>
          {showLogin ? <Login onLogin={handleLogin} /> : <Register updateToken={props.updateToken} />}
        </Col>
      </Row>
    </Container>
  );
}

export default Auth;
