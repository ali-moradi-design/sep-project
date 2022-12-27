import React from 'react';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import joker from '../../assets/images/joker-4.png';

const s = {
  main: { mb: '6rem' },
  backImagePoster: {
    overflow: 'hidden',
    borderRadius: '1rem',
    backgroundImage: `url(${joker})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: { xs: '15rem -1rem ', sm: '40rem -1rem ', md: 'right' },
    backgroundSize: { xs: '24rem 23rem ', lg: 'auto' },
    backgroundColor: '#0a0f12',
    position: 'relative',
    minHeight: { xs: '21rem', lg: '30rem' },
    width: '100%',
    mt: '2rem',
    px: { xs: '2rem', lg: '3rem' },
    py: { xs: '2rem', lg: '3rem' }
  },
  category: {
    color: 'primary.main',
    fontSize: {
      xs: '1.4rem',
      lg: '2.2rem'
    },
    fontWeight: 'bold'
  },
  title: {
    color: '#fff',
    fontSize: {
      xs: '3.4rem',
      lg: '4.8rem'
    },
    fontWeight: 'bold',
    mb: { xs: '7.5rem', lg: '9rem' }
  },
  story: {
    color: '#c5c5c5',
    fontSize: {
      xs: '1.4rem',
      lg: '2.4rem'
    }
  }
};

const Shocase = () => {
  return (
    <Grid container justifyContent="center" sx={s.main}>
      <Box sx={s.backImagePoster}>
        <Typography sx={s.category}>Trending</Typography>
        <Typography sx={s.title}>JOKER</Typography>
        <Typography sx={s.story}>24 Stories</Typography>
      </Box>
    </Grid>
  );
};

export default Shocase;
