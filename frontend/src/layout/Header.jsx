import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import logo from '../assets/jer-logo-3.png'; 
import { AppBar, Toolbar, Button, IconButton, styled, CssBaseline } from '@mui/material';

const StyledRouterLink = styled(RouterLink)({
  color: 'inherit',
  textDecoration: 'none',
  marginRight: '16px',
});

function Header({ isAuthenticated, logout }) {
  return (
    <>
      <CssBaseline />
      <AppBar position="fixed" sx={{backgroundColor: '#cd7f32'}}>

        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="home" component={StyledRouterLink} to="/">
            {/* <HomeIcon /> */}
          </IconButton>

          <img src={logo} alt="Timber Artistry Logo" style={{ height: '50px', marginRight: 'auto', border: '2px solid black' }} />

          <Button color="inherit" component={StyledRouterLink} to="/">Home</Button>
          <Button color="inherit" component={StyledRouterLink} to="/services">Services</Button>
          <Button color="inherit" component={StyledRouterLink} to="/gallery">Gallery</Button>
          <Button color="inherit" component={StyledRouterLink} to="/contact">Contact</Button>
          {isAuthenticated ? (
            <Button color="inherit" onClick={logout}>Sign Out</Button>
          ) : (
            <>
              <Button color="inherit" component={StyledRouterLink} to="/login">Sign In</Button>
              <Button color="inherit" component={StyledRouterLink} to="/register">Register</Button>
            </>
          )}
        </Toolbar>
      </AppBar>
      <Toolbar /> {/* Placeholder to ensure content doesn't get hidden behind the fixed AppBar */}
    </>
  );
}

export default Header;
