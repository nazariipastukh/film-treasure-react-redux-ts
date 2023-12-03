import {configureStore} from "@reduxjs/toolkit";
import {castReducer, genresReducer, loaderReducer, moviesReducer, searchReducer, themeReducer} from "../slices";
import {mainPageReducer} from "../slices";

const store = configureStore({
    reducer: {
        cast: castReducer,
        theme: themeReducer,
        mainPage: mainPageReducer,
        movies: moviesReducer,
        genres: genresReducer,
        search: searchReducer,
        loader: loaderReducer
    }
})

export {
    store
}

