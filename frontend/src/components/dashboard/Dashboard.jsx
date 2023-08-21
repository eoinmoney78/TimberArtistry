import React from 'react';
import { Routes, Route } from 'react-router-dom'; // Import Routes and Route
import './dashboard.css';
import { Container, Row, Col, Card, CardBody } from 'reactstrap';
import Logout from '../auth/logout/Logout';
import Header from '../header/Header'; // Import your Header component
import Sidebar from '../sidebar/Sidebar'; // Import your Sidebar component
import Artworks from '../artworks/Artworks'; // Import your Artworks component
import Projects from '../projects/Projects'; // Import your Projects component
import Blog from '../blog/Blog';

function Dashboard({ token, isAdmin }) {
  return (
    <Container className="dashboard-container">
      <Row>
        <Col>
          <Card className="dashboard-card">
            <CardBody className="text-center">
              <Header /> {/* Include your Header component */}
              <Sidebar /> {/* Include your Sidebar component */}
              
              {/* Define routes using Routes and Route */}
              <Routes>
                <Route path="/dashboard/artworks" element={<Artworks />} />
                <Route path="/dashboard/projects" element={<Projects />} />
                <Route path="/dashboard/blog" element={<Blog />} />
                {/* Other routes if needed */}
              </Routes>
              
              <Logout />
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Dashboard;
