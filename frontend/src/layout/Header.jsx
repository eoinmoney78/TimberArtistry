import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import logo from '../assets/jer-logo-3.png';
import { AppBar, Toolbar, Button, IconButton, styled, CssBaseline, Drawer, List, ListItem, ListItemText, Hidden } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const StyledRouterLink = styled(RouterLink)({
  color: 'inherit',
  textDecoration: 'none',
  marginRight: '16px',
});

function Header({ isAuthenticated, logout }) {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const DesktopMenu = (
    <>
      <Button color="inherit" component={StyledRouterLink} to="/">Home</Button>
      <Button color="inherit" component={StyledRouterLink} to="/services">Services</Button>
      <Button color="inherit" component={StyledRouterLink} to="/portfolio">Portfolio</Button>

      <Button color="inherit" component={StyledRouterLink} to="/gallery">Art Gallery</Button>
      <Button color="inherit" component={StyledRouterLink} to="/contact">Contact</Button>
      {isAuthenticated ? (
        <Button color="inherit" onClick={logout}>Sign Out</Button>
      ) : (
        <>
          <Button color="inherit" component={StyledRouterLink} to="/login">Sign In</Button>
          <Button color="inherit" component={StyledRouterLink} to="/register">Register</Button>
        </>
      )}
    </>
  );

  return (
    <>
      <CssBaseline />
      <AppBar position="fixed" sx={{ backgroundColor: '#835220' }}>
        <Toolbar>
          <Hidden mdUp>
            <IconButton edge="start" color="inherit" aria-label="menu" onClick={() => setDrawerOpen(true)}>
              <MenuIcon />
            </IconButton>
          </Hidden>
          
          <img src={logo} alt="Timber Artistry Logo" style={{ height: '50px', marginRight: 'auto', border: '2px solid black' }} />

          <Hidden smDown>
            {DesktopMenu}
          </Hidden>
        </Toolbar>

        <Drawer anchor="right" open={drawerOpen} onClose={() => setDrawerOpen(false)}>
          <List>
            <ListItem button component={StyledRouterLink} to="/" onClick={() => setDrawerOpen(false)}>
              <ListItemText primary="Home" />
            </ListItem>
            <ListItem button component={StyledRouterLink} to="/services" onClick={() => setDrawerOpen(false)}>
              <ListItemText primary="Services" />
            </ListItem>
            <ListItem button component={StyledRouterLink} to="/portfolio" onClick={() => setDrawerOpen(false)}>
            <ListItemText primary="Portfolio" />
            </ListItem>

            <ListItem button component={StyledRouterLink} to="/gallery" onClick={() => setDrawerOpen(false)}>
              <ListItemText primary="Gallery" />
            </ListItem>
            <ListItem button component={StyledRouterLink} to="/contact" onClick={() => setDrawerOpen(false)}>
              <ListItemText primary="Contact" />
            </ListItem>
            {isAuthenticated ? (
              <ListItem button onClick={logout}>
                <ListItemText primary="Sign Out" />
              </ListItem>
            ) : (
              <>
                <ListItem button component={StyledRouterLink} to="/login" onClick={() => setDrawerOpen(false)}>
                  <ListItemText primary="Sign In" />
                </ListItem>
                <ListItem button component={StyledRouterLink} to="/register" onClick={() => setDrawerOpen(false)}>
                  <ListItemText primary="Register" />
                </ListItem>
              </>
            )}
          </List>
        </Drawer>
      </AppBar>
      <Toolbar /> {/* This is a placeholder to ensure content doesn't get hidden behind the fixed AppBar */}
    </>
  );
}

export default Header;
