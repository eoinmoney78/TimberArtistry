import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Grid, Typography, IconButton } from '@mui/material';
import { BsFacebook, BsInstagram, BsTwitter } from 'react-icons/bs';

function Footer() {
  return (
    <footer style={{ backgroundColor: '#3f51b5', color: 'white', padding: '16px 0' }}>
      <Container>
        <Grid container spacing={3} justifyContent="space-between">
          
          <Grid item xs={12} sm={4}>
            <Typography variant="h6">Quick Links</Typography>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li><Link to="/about" style={{ textDecoration: 'none', color: 'white' }}>About Us</Link></li>
              <li><Link to="/privacy-policy" style={{ textDecoration: 'none', color: 'white' }}>Testimonials</Link></li>
              <li><Link to="/terms" style={{ textDecoration: 'none', color: 'white' }}>Handjobs or B.j's</Link></li>
            </ul>
          </Grid>
          
          <Grid item xs={12} sm={4}>
            <Typography variant="h6">Contact</Typography>
            <p>Email: Yugecocknballs@business.com</p>
            <p>Phone: (123) 456-7890</p>
          </Grid>
          
          <Grid item xs={12} sm={4}>
            <Typography variant="h6">Follow Us</Typography>
            <IconButton color="inherit" component="a" href="https://facebook.com" aria-label="Facebook">
              <BsFacebook />
            </IconButton>
            <IconButton color="inherit" component="a" href="https://instagram.com" aria-label="Instagram">
              <BsInstagram />
            </IconButton>
            <IconButton color="inherit" component="a" href="https://twitter.com" aria-label="Twitter">
              <BsTwitter />
            </IconButton>
          </Grid>
        </Grid>
      </Container>
    </footer>
  );
}

export default Footer;
