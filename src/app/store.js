import { configureStore } from '@reduxjs/toolkit';
import movieReducer from '../features/movie/movieSlice';
import userReducer from '../features/user/userSlice';

export default configureStore({
  reducer: {
    movie: movieReducer,
    user: userReducer
  },
});
