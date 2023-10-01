import React, { useState, useEffect } from 'react';
import Login from "./components/auth/login/Login";
import Register from "./components/auth/register/Register";
import Header from './layout/Header';  
import Footer from './layout/Footer';  
import HomePage from './components/pages/HomePage';  
import ServicesPage from './components/pages/ServicesPage';  
import Portfolio from './components/pages/Portfolio'
import Gallery from './components/pages/Gallery';
import Projects from './components/pages/Projects';  // <-- import the Projects component
import Contact from './components/pages/Contact';  // <-- import the Contact component
import About from './components/pages/About'; 
import Testimonials from './components/pages/Testimonials';

import { Routes, Route, useLocation } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';


function App() {
  const [sessionToken, setSessionToken] = useState('');
  const location = useLocation();
  const theme = createTheme({
    palette: {
      background: {
        default: '#8B4513'  // Example color
      }
    }
  });
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
    <ThemeProvider theme={theme}>
    <div>
      <Header isAuthenticated={!!sessionToken} logout={logout} />
      <Routes>
        <Route path="/" element={<HomePage />} />   
        <Route path="/register" element={<Register updateToken={updateToken} />} />
        <Route path="/login" element={<Login updateToken={updateToken} />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/projects" element={<Projects />} /> 
        <Route path="/contact" element={<Contact />} />  
        <Route path="/about" element={<About />} />
        <Route path="/testimonials" element={<Testimonials />} />
      </Routes>
      {location.pathname !== '/gallery' && <Footer />}
    </div>
  </ThemeProvider>
  );
}

export default App;
