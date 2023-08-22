import React from 'react';
import { Typography, Container, Box, Grid, Card, CardContent } from '@mui/material';

function ServicesPage() {
  return (
    <Container>
      <Box mt={8} mb={4}>
        <Typography variant="h2" align="center" gutterBottom>
          Our Services
        </Typography>
      </Box>

      <Grid container spacing={4}>
        
        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h5" align="center" gutterBottom>
                Cabinet Re-facing
              </Typography>
              <Typography align="center">
                Give your cabinets a fresh, modern look without the hassle of a full remodel.
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h5" align="center" gutterBottom>
                Wooden Art Pieces
              </Typography>
              <Typography align="center">
                Discover unique art pieces, handcrafted from wood, perfect for any space.
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h5" align="center" gutterBottom>
                Custom Woodwork
              </Typography>
              <Typography align="center">
                From furniture to decor, we can craft custom woodwork tailored to your needs.
              </Typography>
            </CardContent>
          </Card>
        </Grid>

      </Grid>
    </Container>
  )
}

export default ServicesPage;
