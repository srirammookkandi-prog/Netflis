import { createSlice } from "@reduxjs/toolkit";

const gptSearch = createSlice({
    name: "gptSearch",
    initialState: {
        showGpt: false,
    },
    reducers: {
        togglegpt: (state) => {
            state.showGpt = !state.showGpt
        }
    }
});

export const { togglegpt } = gptSearch.actions;
export default gptSearch.reducer;