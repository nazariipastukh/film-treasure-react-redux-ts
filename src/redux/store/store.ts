import {configureStore} from "@reduxjs/toolkit";
import {castReducer, themeReducer} from "../slices";
import {mainPageReducer} from "../slices/mainPageMoviesSlice";
import {moviesReducer} from "../slices/moviesSlice";
import {genresReducer} from "../slices/genresSlice";
import {searchReducer} from "../slices/searchSlice";

const store = configureStore({
    reducer: {
        cast: castReducer,
        theme: themeReducer,
        mainPage: mainPageReducer,
        movies: moviesReducer,
        genres: genresReducer,
        search: searchReducer
    }
})

export {
    store
}

