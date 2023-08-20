import React from 'react';
import { Outlet } from 'react-router-dom';
import './dashboard.css';
import { Container, Row, Col, Card, CardBody } from 'reactstrap';
import Logout from '../auth/logout/Logout'; // Import the Logout component

function Dashboard({ token, isAdmin }) {
  return (
    <Container className="dashboard-container">
      <Row>
        <Col>
          <Card className="dashboard-card">
            <CardBody className="text-center">
              <h2 className="dashboard-heading">Welcome to the Dashboard!</h2>
              {isAdmin && <p className="admin-message">You have admin privileges.</p>}
              <Outlet />
              {/* Include the Logout component */}
            </CardBody>
          </Card>
        </Col>
      </Row>
      <Logout /> 
    </Container>
    
  );
}

export default Dashboard;
