import { createSlice } from "@reduxjs/toolkit";


const movieSlice = createSlice({
    name: "movies",
    initialState: {
        nowPlayingMovies: null,
        topRatedMovies: null,
        popularMovies: null,
        upcomingMovies: null,
        trailerVideo: null,
    },
    reducers: {
        addNowPlaying: (state, action) => {
            state.nowPlayingMovies = action.payload;
        },
        addTopRated: (state, action) => {
            state.topRatedMovies = action.payload;
        },
        addPopular: (state, action) => {
            state.popularMovies = action.payload;
        },
        addUpcoming: (state, action) => {
            state.upcomingMovies = action.payload;
        },
        addTrailerVideo: (state, action) => {
            state.trailerVideo = action.payload;
        }
    },
});

export const { addNowPlaying, addTrailerVideo, addTopRated, addPopular, addUpcoming } = movieSlice.actions;

export default movieSlice.reducer;