import React from 'react';
import { Typography, Container, Box, Grid, Card, CardContent, CardActionArea, Button, CardMedia } from '@mui/material';

import {BiCabinet} from  'react-icons/bi';
import {GiPaintBrush} from 'react-icons/gi';
import {GiDeadWood} from 'react-icons/gi';

function ServicesPage() {
  return (
    <Container>
     <Box height="50vh" display="flex" flexDirection="column" justifyContent="center">
        <Typography variant="h2" align="center" gutterBottom>
          Our Services
        </Typography>
      </Box>

      <Grid container spacing={4}>
        
        <Grid item xs={12} md={4}>
          <Card variant="outlined" elevation={4} sx={{ "&:hover": { transform: "scale(1.05)", transition: "0.3s" } }}>
            <CardActionArea>
              <CardMedia component={BiCabinet} height="140" />
              <CardContent>
                <Typography variant="h5" align="center" gutterBottom>
                  Cabinet Re-facing
                </Typography>
                <Typography align="center" paragraph>
                  Give your cabinets a fresh, modern look without the hassle of a full remodel.
                </Typography>
                <Button variant="contained" color="primary" fullWidth>Learn More</Button>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>

        <Grid item xs={12} md={4}>
          <Card variant="outlined" elevation={4} sx={{ "&:hover": { transform: "scale(1.05)", transition: "0.3s" } }}>
            <CardActionArea>
              <CardMedia component={GiPaintBrush} height="140" />
              <CardContent>
                <Typography variant="h5" align="center" gutterBottom>
                  Wooden Art Pieces
                </Typography>
                <Typography align="center" paragraph>
                  Discover unique art pieces, handcrafted from wood, perfect for any space.
                </Typography>
                <Button variant="contained" color="primary" fullWidth>View Collection</Button>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>

        <Grid item xs={12} md={4}>
          <Card variant="outlined" elevation={4} sx={{ "&:hover": { transform: "scale(1.05)", transition: "0.3s" } }}>
            <CardActionArea>
              <CardMedia component={GiDeadWood} height="140" />
              <CardContent>
                <Typography variant="h5" align="center" gutterBottom>
                  Custom Woodwork
                </Typography>
                <Typography align="center" paragraph>
                  From furniture to decor, we can craft custom woodwork tailored to your needs.
                </Typography>
                <Button variant="contained" color="primary" fullWidth>Get a Quote</Button>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>

      </Grid>
    </Container>
  )
}

export default ServicesPage;
