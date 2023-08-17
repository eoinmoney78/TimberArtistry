import React, { useState } from 'react';
import { Button, Col, Container, Row } from 'reactstrap';
import Logout from '../auth/logout/Logout';
import Register from './register/Register'; // Import the Signup component
import Login from './login/Login'; // Import the Login component
import './auth.css';

function Auth(props) {
  const [button, setButton] = useState('To Login'); // Change the initial state
  const [isAdmin, setIsAdmin] = useState(false);

  const toggleForm = () => {
    setButton(button === 'To Register' ? 'To Login' : 'To Register');
  };

  const handleLogin = (token, admin) => {
    setIsAdmin(admin);
    props.updateToken(token);
  };

  const handleLogout = () => {
    setIsAdmin(false);
    props.updateToken('');
  };

  const displayForm = () => {
    return button === 'To Login' ? <Register updateToken={props.updateToken} /> : <Login updateToken={handleLogin} />;
  };

  return (
    <Container className="auth-container">
      <Row>
        <Col>
          {isAdmin ? (
            <Logout onLogout={handleLogout} onAdminUpdate={setIsAdmin} />
          ) : (
            <div className="auth-content">
              <Button color="primary" onClick={toggleForm} className="toggle-button">
                {button}
              </Button>
              {displayForm()}
            </div>
          )}
        </Col>
      </Row>
    </Container>
  );
}

export default Auth;