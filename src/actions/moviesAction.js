import axios from 'axios';
import {
  MOVIES_LIST_REQUEST,
  MOVIES_LIST_SUCCESS,
  MOVIES_LIST_FAIL
} from '../constants/moviesConstants';

export const listMovies = () => async (dispatch) => {
  try {
    dispatch({ type: MOVIES_LIST_REQUEST });

    const config = {
      headers: {
        'X-RapidAPI-Key': 'd32bcd64fcmsh3fb8d063ce09195p1c383ejsn7692632d6a72',
        'X-RapidAPI-Host': 'imdb-top-100-movies.p.rapidapi.com'
      }
    };

    const { data } = await axios.get(`https://imdb-top-100-movies.p.rapidapi.com/`, config);

    dispatch({
      type: MOVIES_LIST_SUCCESS,
      payload: data
    });
  } catch (error) {
    dispatch({
      type: MOVIES_LIST_FAIL,
      payload:
        error.response && error.response.data.message ? error.response.data.message : error.message
    });
  }
};
