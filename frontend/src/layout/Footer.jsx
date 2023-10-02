import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import Link from '@mui/material/Link';
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
            <li>
      <Link 
        component={RouterLink}
        to="/about"
        underline="none"
        sx={{
          color: 'black',
          fontSize: '0.9rem',
          borderRadius: '10px',
          padding: '5px',
          transition: 'box-shadow 0.3s ease',
          '&:hover': {
            boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.7)'
          }
        }}
      >
        About Us
      </Link>
    </li>
    <li>
      <Link 
        component={RouterLink}
        to="/testimonials"
        underline="none"
        sx={{
          color: 'black',
          fontSize: '0.9rem',
          borderRadius: '10px',
          padding: '5px',
          transition: 'box-shadow 0.3s ease',
          '&:hover': {
            boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.7)'
          }
        }}
      >
        Testimonials
      </Link>
    </li>
         
            </ul>
          </Grid>
          
          <Grid item xs={12} sm={4}>
            <Typography variant="subtitle1">Contact</Typography>
            <p style={{ color: 'black', fontSize: '0.9rem', margin: '4px 0' }}>Email: woodenreverie@yahoo.com</p>
            <p style={{ color: 'black', fontSize: '0.9rem', margin: '4px 0' }}>Phone: (802) 417-1230</p>
          </Grid>
          
          <Grid item xs={12} sm={4}>
            <Typography variant="subtitle1">Follow Us</Typography>
          <IconButton
              color="blue"
              component="a"
              href="https://facebook.com"
              aria-label="Facebook"
              sx={{ '&:hover': { backgroundColor: 'grey.700' } }}
            >
              <BsFacebook />
            </IconButton>
            <IconButton
              color="black"
              component="a"
              href="https://instagram.com"
              aria-label="Instagram"
              sx={{ '&:hover': { backgroundColor: 'grey.700' } }}
            >
              <BsInstagram />
            </IconButton>
            <IconButton
              color="white"
              componeritnt="a"
              href="https://x.com"
              aria-label="Twitter"
              sx={{ '&:hover': { backgroundColor: 'grey.700' } }}
            >
              <BsTwitter />
            </IconButton>
          </Grid>
        </Grid>
      </Container>
    </footer>
  );
}

export default Footer;
