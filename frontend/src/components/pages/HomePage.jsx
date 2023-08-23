import React from 'react';
import { Typography, Container, Button, Box, Grid, Card,  CardContent } from '@mui/material';
import './homepage.css';

function HomePage() {
  return (
    <Container className="homepage-container">
      <Box mt={8} mb={4}>
        <Typography variant="h2" align="center" style={{ color: 'white' }} gutterBottom>
          Wooden Reverie
        </Typography>
        <Typography variant="h6" align="center" style={{ color: 'white' }} paragraph>
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
                <Button variant="contained" color="primary">
                  Learn More
                </Button>
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
                <Button variant="contained" color="primary">
                  Shop Now
                </Button>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  )
}

export default HomePage;
