import React from 'react';
import PosterImage from '../../assets/images/dv.jpg';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';

const MovieCard = ({ el }) => {
  return (
    <>
      <Box
        sx={{
          overflow: 'hidden',
          borderRadius: '1rem',
          backgroundImage: `url(${el.image})`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundSize: 'cover',

          backgroundColor: '#0a0f12',
          position: 'relative',
          minHeight: { xs: '5rem', sm: '10rem', md: '15rem', lg: '20rem' },
          width: { xs: '3.03rem', sm: '6.75rem', md: '10.125rem', lg: '13.5rem' },
          px: { xs: '2rem', lg: '3rem' },
          py: { xs: '2rem', lg: '3rem' },
          border: '3px solid #3a3d42',
          mb: '1rem'
        }}
      />
      <Typography
        sx={{
          color: '#c5c5c5',
          fontSize: {
            xs: '1.2rem',
            lg: '2.4rem'
          }
        }}>
        {el.title}{' '}
      </Typography>
    </>
  );
};

export default MovieCard;
