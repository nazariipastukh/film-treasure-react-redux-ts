import {configureStore} from "@reduxjs/toolkit";
import {castReducer, themeReducer} from "../slices";
import {mainPageReducer} from "../slices/mainPageMoviesSlice";

const store = configureStore({
    reducer: {
        cast: castReducer,
        theme: themeReducer,
        mainPage: mainPageReducer
    }
})

export {
    store
}

