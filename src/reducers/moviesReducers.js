import {
  MOVIES_LIST_REQUEST,
  MOVIES_LIST_SUCCESS,
  MOVIES_LIST_FAIL
} from '../constants/moviesConstants';

export const moviesListReducer = (state = { movies: [] }, action) => {
  switch (action.type) {
    case MOVIES_LIST_REQUEST:
      return { loading: true, movies: [] };
    case MOVIES_LIST_SUCCESS:
      return {
        loading: false,
        movies: action.payload,
        totalPage: action.payload.total
      };
    case MOVIES_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
