import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, IconButton, styled } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';

const StyledRouterLink = styled(RouterLink)({
  color: 'inherit',
  textDecoration: 'none',
  marginRight: '16px',  // theme.spacing(2) in v4 is 16px in v5 by default
});

function Header({ isAuthenticated, logout }) {

  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="home" component={StyledRouterLink} to="/">
          <HomeIcon />
        </IconButton>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          <StyledRouterLink to="/">Business Logo</StyledRouterLink>
        </Typography>
        <Button color="inherit" component={StyledRouterLink} to="/">Home</Button>
        <Button color="inherit" component={StyledRouterLink} to="/services">Services</Button>
        <Button color="inherit" component={StyledRouterLink} to="/gallery">Gallery</Button>
        <Button color="inherit" component={StyledRouterLink} to="/contact">Contact</Button>
        {isAuthenticated 
          ? <Button color="inherit" onClick={logout}>Sign Out</Button>
          : <Button color="inherit" component={StyledRouterLink} to="/login">Sign In</Button>}
      </Toolbar>
    </AppBar>
  );
}

export default Header;
