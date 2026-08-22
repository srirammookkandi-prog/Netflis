import { createSlice } from "@reduxjs/toolkit";


const movieSlice = createSlice({
    name: "movies",
    initialState: {
        nowPlayingMovies: null,
        topRatedMovies: null,
        trailerVideo: null
    },
    reducers: {
        addNowPlaying: (state, action) => {
            state.nowPlayingMovies = action.payload;
        },
        addTopRated: (state, action) => {
            state.topRatedMovies = action.payload;
        },
        addTrailerVideo: (state, action) => {
            state.trailerVideo = action.payload;
        }
    },
});

export const { addNowPlaying, addTrailerVideo, addTopRated } = movieSlice.actions;

export default movieSlice.reducer;