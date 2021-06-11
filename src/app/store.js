import { configureStore } from '@reduxjs/toolkit';
import movieReducer from '../features/movie/movieSlice';

export default configureStore({
  reducer: {
    movie: movieReducer
  },
});
