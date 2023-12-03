import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {AxiosError} from "axios";

import {IDataResponse, IMovie} from "../../interfaces/movieInterface";
import {moviesService} from "../../services";
import {IMovieDetails} from "../../interfaces/movieDetailsInterface";
import {loaderActions} from "./loaderSlice";

interface IState {
    movies: IMovie[]
    totalPages: number
    movieById: IMovieDetails
}

const initialState: IState = {
    movies: [],
    totalPages: null,
    movieById: null
}

const getMovies = createAsyncThunk<IDataResponse, string>(
    'moviesSlice/getMovies',
    async (page, {rejectWithValue, dispatch}) => {
        try {
            dispatch(loaderActions.setLoader(true))
            const {data} = await moviesService.getMovies(page)
            return data

        } catch (e) {
            const err = e as AxiosError
            return rejectWithValue(err.response?.data)
        } finally {
            dispatch(loaderActions.setLoader(false))
        }
    }
)

const getMovieById = createAsyncThunk<IMovieDetails, number>(
    'moviesSlice/getMovieById',
    async (id, {rejectWithValue, dispatch}) => {
        try {
            dispatch(loaderActions.setLoader(true))
            const {data} = await moviesService.getMovieById(id)
            return data
        } catch (e) {
            const err = e as AxiosError
            return rejectWithValue(err.response?.data)
        } finally {
            dispatch(loaderActions.setLoader(false))
        }
    }
)

const moviesSlice = createSlice({
    name: 'moviesSlice',
    initialState,
    reducers: {},
    extraReducers: builder => builder
        .addCase(getMovies.fulfilled, (state, action) => {
            const {results, total_pages} = action.payload
            state.movies = results
            state.totalPages = total_pages
        })
        .addCase(getMovieById.fulfilled, (state, action) => {
            state.movieById = action.payload
        })
})

const {reducer: moviesReducer} = moviesSlice

const moviesActions = {
    getMovies,
    getMovieById
}

export {
    moviesActions,
    moviesReducer
}