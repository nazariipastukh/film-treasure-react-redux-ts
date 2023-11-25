import {configureStore} from "@reduxjs/toolkit";

import {castReducer} from "../slices/castSlice";

const store = configureStore({
    reducer: {
        cast: castReducer
    }
})

export {
    store
}

