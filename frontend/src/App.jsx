import React, { useState, useEffect } from 'react';
import Logout from "./components/auth/logout/Logout";
import Login from "./components/auth/login/Login";
import Register from "./components/auth/register/Register";
import Header from './layout/Header';  
import Footer from './layout/Footer';  
import HomePage from './components/pages/HomePage';  
import ServicesPage from './components/pages/ServicesPage';  

import Gallery from './components/pages/Gallery';
import Projects from './components/pages/Projects';  
import Contact from './components/pages/Contact';  
import About from './components/pages/About'; 
import Testimonials from './components/pages/Testimonials';

import { Routes, Route, useLocation } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';


function App() {
  const [sessionToken, setSessionToken] = useState('');
  const [isAdmin, setIsAdmin] = useState(false); // Initial value can be true if the user starts as admin

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
    const storedIsAdmin = localStorage.getItem('isAdmin') === 'true';
    console.log("Retrieved `isAdmin` from local storage:", storedIsAdmin);
    setIsAdmin(storedIsAdmin);

    const storedToken = localStorage.getItem("token");
    if (storedToken) {
       console.log("`sessionToken` retrieved from local storage:", storedToken);
       setSessionToken(storedToken);
    }
}, []);
 
const logout = () => {
  console.log("Starting logout process...");

  localStorage.removeItem("token");
  console.log("`token` removed from local storage.");

  localStorage.setItem('isAdmin', false);
  console.log("`isAdmin` set to false in local storage.");

  setSessionToken('');
  setIsAdmin(false);  // Set the state to false
  console.log("`sessionToken` and `isAdmin` states updated in React.");
};

const handleAdminUpdate = (status) => {
    console.log("Inside handleAdminUpdate function. New Status:", status);
    setIsAdmin(status);
    localStorage.setItem('isAdmin', status);
    console.log("`isAdmin` set in local storage:", status);
};

  

  return (
    <ThemeProvider theme={theme}>
    <div>
      <Header isAuthenticated={!!sessionToken} logout={logout} />
      <Routes>
        <Route path="/" element={<HomePage />} />   
        <Route path="/" element={<HomePage />} />
    {sessionToken && <Route path="/register" element={<Register updateToken={updateToken} />} />}
    <Route path="/login" element={<Login updateToken={updateToken} />} />
        <Route path="/login" element={<Login updateToken={updateToken} />} />
        <Route path="logout" element={<Logout onLogout={logout} onAdminUpdate={handleAdminUpdate} isAdmin={isAdmin} />} />


        <Route path="/services" element={<ServicesPage />} />
      
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
