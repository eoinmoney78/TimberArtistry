import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Grid, Typography, IconButton } from '@mui/material';
import { BsFacebook, BsInstagram, BsTwitter } from 'react-icons/bs';

function Footer() {
  return (
    <footer   style={{ backgroundColor: '#cd7f32', color: 'white', padding: '8px 0' }}>
      <Container maxWidth="1200px"  >

        <Grid container spacing={2} justifyContent="space-between">
          
          <Grid item xs={12} sm={4}>
            <Typography variant="subtitle1">Quick Links</Typography>
            <ul style={{ listStyle: 'none', padding: 0, margin: '8px 0' }}>
              <li><Link to="/about" style={{ textDecoration: 'none', color: 'white', fontSize: '0.9rem' }}>About Us</Link></li>
              <li><Link to="/testimonials" style={{ textDecoration: 'none', color: 'white', fontSize: '0.9rem' }}>Testimonials</Link></li>
         
            </ul>
          </Grid>
          
          <Grid item xs={12} sm={4}>
            <Typography variant="subtitle1">Contact</Typography>
            <p style={{ fontSize: '0.9rem', margin: '4px 0' }}>Email: woodenreverie@yahoo.com</p>
            <p style={{ fontSize: '0.9rem', margin: '4px 0' }}>Phone: (802) 417-1230</p>
          </Grid>
          
          <Grid item xs={12} sm={4}>
            <Typography variant="subtitle1">Follow Us</Typography>
            <IconButton color="inherit" component="a" href="https://facebook.com" aria-label="Facebook">
              <BsFacebook />
            </IconButton>
            <IconButton color="inherit" component="a" href="https://instagram.com" aria-label="Instagram">
              <BsInstagram />
            </IconButton>
            <IconButton color="inherit" component="a" href="https://x.com" aria-label="Twitter">
              <BsTwitter />
            </IconButton>
          </Grid>
        </Grid>
      </Container>
    </footer>
  );
}

export default Footer;
