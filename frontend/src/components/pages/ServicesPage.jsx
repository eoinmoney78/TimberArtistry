import React from 'react';
import { Typography, Container, Box, Grid, Card, CardContent, CardActionArea, Button, CardMedia } from '@mui/material';

import {BiCabinet} from  'react-icons/bi';
import {GiPaintBrush} from 'react-icons/gi';
import {GiDeadWood} from 'react-icons/gi';
import './servicespage.css';
import { Link } from 'react-router-dom'; 

function ServicesPage() {
  return (
    <Container className="services-page">
      <Box height="40vh" display="flex" flexDirection="column" justifyContent="center" paddingTop="100px">
      <Typography variant="h2" align="center" gutterBottom>
      Our Services
       </Typography>
     </Box>


      <Grid container spacing={2}>
      <Grid item xs={12} md={4}>
      <Card variant="outlined" elevation={4} sx={{ "&:hover": { transform: "scale(1.05)", transition: "0.3s" } }}>
        <CardActionArea>
          <CardMedia component={BiCabinet} height="200" /> {/* Increased height */}
          <CardContent sx={{ padding: '24px' }}> {/* Increased padding */}
            <Typography variant="h4" align="center" gutterBottom> {/* Increased font size */}
              Cabinet Re-facing
            </Typography>
            <Typography align="center" paragraph style={{ fontSize: '18px' }}> {/* Increased font size */}
              Give your cabinets a fresh, modern look without the hassle of a full remodel.
            </Typography>
            <Link to="/projects" style={{ textDecoration: 'none' }}> {/* Wrap the button with the Link component */}
            <Button variant="contained" color="primary" fullWidth>
              Learn More
            </Button>
          </Link>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>

    <Grid item xs={12} md={4}>
  <Card variant="outlined" elevation={4} sx={{ "&:hover": { transform: "scale(1.05)", transition: "0.3s" } }}>
    <CardActionArea>
      <CardMedia component={GiPaintBrush} height="200" /> {/* Increased height */}
      <CardContent sx={{ padding: '24px' }}> {/* Increased padding */}
        <Typography variant="h4" align="center" gutterBottom> {/* Increased font size */}
          Wooden Art Pieces
        </Typography>
        <Typography align="center" paragraph style={{ fontSize: '18px' }}> {/* Increased font size */}
          Discover unique art pieces, handcrafted from wood, perfect for any space.
        </Typography>
        <Link to="/gallery" style={{ textDecoration: 'none' }}> {/* Adding Link here */}
                <Button variant="contained" color="primary" fullWidth>
                  View Collection
                </Button>
              </Link>
      </CardContent>
    </CardActionArea>
  </Card>
</Grid>


<Grid item xs={12} md={4}>
  <Card variant="outlined" elevation={4} sx={{ "&:hover": { transform: "scale(1.05)", transition: "0.3s" } }}>
    <CardActionArea>
      <CardMedia component={GiDeadWood} height="200" /> {/* Increased height */}
      <CardContent sx={{ padding: '24px' }}> {/* Increased padding */}
        <Typography variant="h4" align="center" gutterBottom> {/* Increased font size */}
          Custom Woodwork
        </Typography>
        <Typography align="center" paragraph style={{ fontSize: '18px' }}> {/* Increased font size */}
          From furniture to decor, we can craft custom woodwork tailored to your needs.
        </Typography>
        <Link to="/contact" style={{ textDecoration: 'none' }}> 
        <Button variant="contained" color="primary" fullWidth>Get a Quote</Button>
        </Link>
      </CardContent>
    </CardActionArea>
  </Card>
</Grid>


      </Grid>
    </Container>
  )
}

export default ServicesPage;
