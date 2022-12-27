import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Box from '@mui/material/Box';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Avatar from '@mui/material/Avatar';
import imageAvatar from '../../assets/images/image-avatar.png';

const HeaderPrimary = () => {
  return (
    <Box
      component="header"
      sx={{
        height: { xs: '8rem', lg: '10rem' },
        position: 'relative',
        zIndex: 1000
      }}>
      <Container maxWidth="lg">
        <Grid
          container
          justifyContent="space-between"
          alignItems="center"
          sx={{
            height: { xs: '8rem', lg: '10rem' }
          }}>
          <Grid item>
            <Typography
              sx={{
                fontSize: { xs: '2.8rem', lg: '3rem' },
                fontWeight: 'bold',
                color: '#ededed'
              }}>
              Welcome
            </Typography>
          </Grid>
          <Grid item>
            <Avatar alt="Remy Sharp" src={imageAvatar} />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default HeaderPrimary;
