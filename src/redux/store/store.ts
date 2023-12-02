import {configureStore} from "@reduxjs/toolkit";
import {castReducer, themeReducer} from "../slices";
import {mainPageReducer} from "../slices/mainPageMoviesSlice";
import {moviesReducer} from "../slices/moviesSlice";

const store = configureStore({
    reducer: {
        cast: castReducer,
        theme: themeReducer,
        mainPage: mainPageReducer,
        movies: moviesReducer
    }
})

export {
    store
}

