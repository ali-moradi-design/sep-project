import React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import MovieCard from '../MovieCard/MovieCard';
import useMediaQuery from '@mui/material/useMediaQuery';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-coverflow';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, EffectCoverflow } from 'swiper';

const s = {
  title: {
    color: '#b5b5b6',
    fontSize: {
      xs: '2.8rem',
      lg: '3rem'
    },
    fontWeight: 'bold',
    mb: { xs: '2rem', lg: '3rem' }
  },
  sliderContainer: {
    width: '100%',
    mt: '3rem',
    pb: '20rem',

    '&  > div ': {
      '& .swiper-pagination-bullet-active ': {
        backgroundColor: 'secondary.main'
      },
      '& .swiper-button-next, & .swiper-button-prev ': {
        color: '#a7a5a5',
        p: '1.5rem',
        borderRadius: '0.4rem',
        ':hover': {
          color: 'primary.main',
          boxShadow: 4
        }
      },
      '& .swiper-button-next::after, & .swiper-button-prev:after ': {
        fontSize: '2.5rem'
      },
      '& .swiper-slide': {
        justifyContent: 'center'
      },
      '& .swiper-slide-active': {
        position: 'relative',
        zIndex: 100
      }
    }
  }
};

const SilderSection = ({ movies }) => {
  const matchesLG = useMediaQuery((theme) => theme.breakpoints.down('lg'));
  const matchesMD = useMediaQuery((theme) => theme.breakpoints.down('md'));
  const matchesSM = useMediaQuery((theme) => theme.breakpoints.down('sm'));

  return (
    <>
      <Typography sx={s.title}>Recent Movies</Typography>{' '}
      <Grid item container justifyContent="center" alignItems="center" sx={s.sliderContainer}>
        <Swiper
          spaceBetween={matchesSM ? 75 : matchesMD ? 130 : matchesLG ? 140 : 30}
          slidesPerView={matchesSM ? 5 : matchesMD ? 6 : matchesLG ? 6 : 5}
          modules={[Navigation]}
          navigation={matchesSM ? false : true}
          grabCursor={true}>
          {movies.slice(0, 20).map((el, i) => (
            <SwiperSlide key={el.rank}>
              <MovieCard el={el} />
            </SwiperSlide>
          ))}
        </Swiper>
      </Grid>
    </>
  );
};

export default SilderSection;
