import Auth from './components/auth/Auth';
import { useState, useEffect } from 'react';
import Login from "./components/auth/login/Login";
import Register from "./components/auth/register/Register";
import Dashboard from './components/dashboard/Dashboard';
import { Routes, Route } from 'react-router-dom';

function App() {
  const [sessionToken, setSessionToken] = useState('');

  console.log("App.jsx:", sessionToken);

  const updateToken = (newToken) => {
    console.log("updateToken called with newToken:", newToken);
    localStorage.setItem("token", newToken);
    setSessionToken(newToken);
  };

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    console.log("useEffect storedToken:", storedToken);
    if (storedToken) {
      setSessionToken(storedToken);
    }
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Auth updateToken={updateToken} />} />

      <Route path="/login" element={<Login updateToken={updateToken} />} />
      <Route path="/register" element={<Register updateToken={updateToken} />} />
      <Route path="/dashboard" element={<Dashboard token={sessionToken} />} />
    </Routes>
  );
}

export default App;
