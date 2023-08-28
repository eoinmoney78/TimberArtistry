import React, { useState, useEffect } from 'react';
import Login from "./components/auth/login/Login";
import Register from "./components/auth/register/Register";
import Header from './layout/Header';  
import Footer from './layout/Footer';  
import HomePage from './components/pages/HomePage';  
import ServicesPage from './components/pages/ServicesPage';  
import Gallery from './components/pages/Gallery';
import Projects from './components/pages/Projects';  // <-- import the Projects component
import Contact from './components/pages/Contact';  // <-- import the Contact component

import { Routes, Route, useLocation } from 'react-router-dom';

function App() {
  const [sessionToken, setSessionToken] = useState('');
  const location = useLocation();

  const updateToken = (newToken) => {
    localStorage.setItem("token", newToken);
    setSessionToken(newToken);
  };

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    if (storedToken) {
      setSessionToken(storedToken);
    }
  }, []);

  const logout = () => {
    localStorage.removeItem("token");
    setSessionToken('');
  };

  return (
    <div>
      <Header isAuthenticated={!!sessionToken} logout={logout} />

      <Routes>
        <Route path="/" element={<HomePage />} />   
        <Route path="/register" element={<Register updateToken={updateToken} />} />
        <Route path="/login" element={<Login updateToken={updateToken} />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/projects" element={<Projects />} /> 
        <Route path="/contact" element={<Contact />} />  {/* <-- add the Projects route here */}
      </Routes>

      {location.pathname !== '/gallery' && <Footer />}
    </div>
  );
}

export default App;
