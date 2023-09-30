import React from 'react';
import { Typography, Container, Button, Box, Grid, Card,  CardContent } from '@mui/material';
import './homepage.css';

import { Link } from 'react-router-dom'; 

function HomePage() {
  return (
    <Container className="homepage-container">
      <Box mt={8} mb={4}>
      <div style={{
  display: 'flex',
  height: '20vh',
  alignItems: 'center',
  justifyContent: 'center'
}}>
  <div style={{
    display: 'inline-block',  // makes the div wrap snugly around the text
    boxShadow: '5px 5px 15px rgba(20, 10, 10, 0.9)',
    borderRadius: '5px',
    backgroundColor: 'transparent', // a light gray background for visibility
    transform: "ease in 1s"
  }}>
   <Typography 
    variant="h2" 
    align="center" 
    style={{ 
      color: 'white', 
      textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)', // Shadow to the text
      padding: '10px',
      fontFamily: 'Cinzel, serif', 
    }} 
    gutterBottom
  >
    Wooden Reverie
</Typography>

  </div>
</div>

        <Typography variant="h6" align="center"  style={{ color: 'white', fontFamily: 'Cinzel, serif',}} paragraph>
          Transforming ordinary into extraordinary with cabinet re-facing and unique wooden art.
        </Typography>
      </Box>

      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Card elevation={3} style={{ backgroundColor: 'rgba(205, 133, 63, 0.46)' }}>
            {/* <CardMedia
              component="img"
              height="200"
              image="/path-to-your-cabinet-image.jpg"
              alt="Cabinet re-facing"
            /> */}
            <CardContent>
              <Typography variant="h5" align="center" style={{ color: 'white' }} gutterBottom>
                Cabinet Re-facing
              </Typography>
              <Typography align="center" style={{ color: 'white' }}>
                Give your cabinets a fresh, modern look without the hassle of a full remodel. 
              </Typography>
              <Box mt={2} display="flex" justifyContent="center">
                
              <Link to="/projects" style={{ textDecoration: 'none' }}> 
            <Button variant="contained" color="primary" fullWidth>
              Learn More
            </Button>
          </Link>
              </Box>
            </CardContent>
          </Card>
        </Grid>
        
        <Grid item xs={12} md={6}>
          <Card elevation={3} style={{ backgroundColor: 'rgba(205, 133, 63, 0.46)' }}>
            {/* <CardMedia
              component="img"
              height="200"
              image="/path-to-your-wood-art-image.jpg"
              alt="Wooden art"
            /> */}
            <CardContent>
              <Typography variant="h5" align="center" style={{ color: 'white' }} gutterBottom>
                Wooden Art Pieces
              </Typography>
              <Typography align="center" style={{ color: 'white' }}>
                Discover unique art pieces, handcrafted from wood, perfect for any space.
              </Typography>
              <Box mt={2} display="flex" justifyContent="center">
              <Link to="/gallery" style={{ textDecoration: 'none' }}> 
                <Button variant="contained" color="primary">
                  Shop Now
                </Button>
                </Link>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  )
}

export default HomePage;
