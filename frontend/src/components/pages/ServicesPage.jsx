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
      <Box height="50vh" display="flex" flexDirection="column" justifyContent="center" paddingTop="100px">
      <Typography variant="h2" align="center" color="white"gutterBottom>
      Our Services
       </Typography>
     </Box>

      <Grid container spacing={2}>
        {/* Card 1 */}
        <Grid item xs={12} md={4}>
        <Card elevation={4} sx={{ "&:hover": { transform: "scale(1.05)", transition: "0.3s" ,    backgroundColor: '#CD853F' } }}>
            <Link to="/somepath" style={{ textDecoration: 'none' }}>
              <CardActionArea>
                <CardMedia component={BiCabinet} height="200" />
                <CardContent sx={{ padding: '24px' }}>
                  <Typography variant="h4" align="center" gutterBottom>
                    Cabinet Re-facing
                  </Typography>
                  <Typography align="center" paragraph style={{ fontSize: '18px' }}>
                    Give your cabinets a fresh, modern look without the hassle of a full remodel.
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Link>
            <CardContent>
              <Link to="/projects" style={{ textDecoration: 'none' }}>
                <Button variant="contained" color="primary" fullWidth>
                  Learn More
                </Button>
              </Link>
            </CardContent>
          </Card>
        </Grid>

        {/* Card 2 */}
        <Grid item xs={12} md={4}>
        <Card elevation={4} sx={{ "&:hover": { transform: "scale(1.05)", transition: "0.3s" ,    backgroundColor: '#CD853F' } }}>
            <Link to="/gallery" style={{ textDecoration: 'none' }}>
              <CardActionArea>
                <CardMedia component={GiPaintBrush} height="200" />
                <CardContent sx={{ padding: '24px' }}>
                  <Typography variant="h4" align="center" gutterBottom>
                    Wooden Art Pieces
                  </Typography>
                  <Typography align="center" paragraph style={{ fontSize: '18px' }}>
                    Discover unique art pieces, handcrafted from wood, perfect for any space.
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Link>
            <CardContent>
              <Link to="/gallery" style={{ textDecoration: 'none' }}>
                <Button variant="contained" color="primary" fullWidth>
                  View Collection
                </Button>
              </Link>
            </CardContent>
          </Card>
        </Grid>

        {/* Card 3 */}
        <Grid item xs={12} md={4}>
        <Card elevation={4} sx={{ "&:hover": { transform: "scale(1.05)", transition: "0.3s",     backgroundColor: '#CD853F'  } }}>
            <Link to="/woodworks" style={{ textDecoration: 'none' }}>
              <CardActionArea>
                <CardMedia component={GiDeadWood} height="200" />
                <CardContent sx={{ padding: '24px' }}>
                  <Typography variant="h4" align="center" gutterBottom>
                    Custom Woodwork
                  </Typography>
                  <Typography align="center" paragraph style={{ fontSize: '18px' }}>
                    From furniture to decor, we can craft custom woodwork tailored to your needs.
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Link>
            <CardContent>
              <Link to="/contact" style={{ textDecoration: 'none' }}>
                <Button variant="contained" color="primary" fullWidth>Get a Quote</Button>
              </Link>
            </CardContent>
          </Card>
        </Grid>

      </Grid>
    </Container>
  )
}

export default ServicesPage;
