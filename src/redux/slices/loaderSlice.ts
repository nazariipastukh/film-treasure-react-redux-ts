import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    loader: false
}

const loaderSlice = createSlice({
    name: 'loaderSlice',
    initialState,
    reducers: {
        setLoader: (state, action) => {
            state.loader = action.payload
        }
    },
    extraReducers: {}
})

const {reducer: loaderReducer, actions: loaderActions} = loaderSlice

export {
    loaderReducer,
    loaderActions
}