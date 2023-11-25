import {createSlice} from "@reduxjs/toolkit";
import any = jasmine.any;

const initialState = {
    cast: [] = []
}

const castSlice = createSlice({
    name: 'castSlice',
    initialState,
    reducers: {},
    extraReducers: {

    }
})