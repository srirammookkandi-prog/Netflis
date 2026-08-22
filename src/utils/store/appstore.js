import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slice/userSlice";
import movieReducer from "./slice/movieSlice"


const appstore = configureStore({

    reducer: {
        user: userReducer,
        movies: movieReducer,
    },
}
)

export default appstore;
