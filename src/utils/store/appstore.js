import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slice/userSlice";
import movieReducer from "./slice/movieSlice";
import gptReducer from "./slice/gptSlice";


const appstore = configureStore({

    reducer: {
        user: userReducer,
        movies: movieReducer,
        gptSearch: gptReducer
    },
}
)

export default appstore;
