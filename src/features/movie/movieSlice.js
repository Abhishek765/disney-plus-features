import { createSlice } from '@reduxjs/toolkit';

export const movieSlice = createSlice({
    name: "movie",
    initialState: {
       movies: null,
    },
    reducers: {
        setMovies: (state, action) => {
            state.movies = action.payload;
        }
    }
});
export const { setMovies } = movieSlice.actions;

export const selectMovies = (state) => state.movie.movies;

export default movieSlice.reducer;