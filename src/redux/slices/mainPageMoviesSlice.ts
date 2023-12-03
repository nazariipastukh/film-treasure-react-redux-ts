import {createAsyncThunk, createSlice, isFulfilled, isPending} from "@reduxjs/toolkit";
import {AxiosError} from "axios";

import {IMovie} from "../../interfaces/movieInterface";
import {moviesService} from "../../services";

interface IState {
    nowPlaying: IMovie[],
    popular: IMovie[],
    topRated: IMovie[],
    upcoming: IMovie[],
    loaderTrigger: boolean
}

const initialState: IState = {
    nowPlaying: [],
    popular: [],
    topRated: [],
    upcoming: [],
    loaderTrigger: false
}

const getNowPlaying = createAsyncThunk<IMovie[]>(
    'mainPageSlice/getNowPlaying',
    async (_, {rejectWithValue}) => {
        try {
            const {data} = await moviesService.getNowPlaying()
            return data.results.slice(0, 7)
        } catch (e) {
            const err = e as AxiosError
            return rejectWithValue(err.response?.data)
        }
    }
)

const getUpcoming = createAsyncThunk<IMovie[]>(
    'mainPageSlice/getUpcoming',
    async (_, {rejectWithValue}) => {
        try {
            const {data} = await moviesService.getUpcoming()
            return data.results.slice(0, 7)
        } catch (e) {
            const err = e as AxiosError
            return rejectWithValue(err.response?.data)
        }
    }
)

const getTopRated = createAsyncThunk<IMovie[]>(
    'mainPageSlice/getTopRated',
    async (_, {rejectWithValue}) => {
        try {
            const {data} = await moviesService.getTopRated()
            return data.results.slice(0, 7)
        } catch (e) {
            const err = e as AxiosError
            return rejectWithValue(err.response?.data)
        }
    }
)

const getPopular = createAsyncThunk<IMovie[]>(
    'mainPageSlice/getPopular',
    async (_, {rejectWithValue}) => {
        try {
            const {data} = await moviesService.getPopular()
            return data.results.slice(0, 7)
        } catch (e) {
            const err = e as AxiosError
            return rejectWithValue(err.response?.data)
        }
    }
)

const mainPageSlice = createSlice({
    name: 'mainPageSlice',
    initialState,
    reducers: {},
    extraReducers: (builder) => builder
        .addCase(getNowPlaying.fulfilled, (state, action) => {
            state.nowPlaying = action.payload
        })
        .addCase(getUpcoming.fulfilled, (state, action) => {
            state.upcoming = action.payload
        })
        .addCase(getTopRated.fulfilled, (state, action) => {
            state.topRated = action.payload
        })
        .addCase(getPopular.fulfilled, (state, action) => {
            state.popular = action.payload
        })
        .addMatcher(isPending(getPopular, getUpcoming, getTopRated, getNowPlaying), state => {
            state.loaderTrigger = true
        })
        .addMatcher(isFulfilled(getPopular, getUpcoming, getTopRated, getNowPlaying), state => {
            state.loaderTrigger = false
        })
})

const {reducer: mainPageReducer} = mainPageSlice

const mainPageActions = {
    getNowPlaying,
    getTopRated,
    getUpcoming,
    getPopular
}

export {
    mainPageActions,
    mainPageReducer
}