import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { listMovies } from '../actions/moviesAction';
import Loader from '../components/ui/Loader';
import Message from '../components/ui/Message';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import HeaderPrimary from '../components/ui/Header';
import Shocase from '../components/Shocase/Shocase';
import SilderSection from '../components/SilderSection/SilderSection';

const s = {
  centerItem: {
    mt: '10rem',
    justifyContent: 'center'
  }
};

const HomePage = () => {
  const dispatch = useDispatch();
  const moviesList = useSelector((state) => state.moviesList);
  const { loading, error, movies } = moviesList;

  useEffect(() => {
    dispatch(listMovies());
  }, [dispatch]);

  return (
    <Box
      sx={{
        minHeight: '100vh',
        backgroundColor: '#13161e'
      }}>
      <HeaderPrimary />

      <Container>
        {loading ? (
          <Grid container sx={s.centerItem}>
            <Grid item>
              <Loader />
            </Grid>
          </Grid>
        ) : error ? (
          <Grid container sx={s.centerItem}>
            <Grid item>
              <Message severity="error">{error}</Message>
            </Grid>
          </Grid>
        ) : (
          <>
            <Shocase />
            <SilderSection movies={movies} />
          </>
        )}
      </Container>
    </Box>
  );
};

export default HomePage;
