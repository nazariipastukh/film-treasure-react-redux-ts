import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {IDataResponse, IMovie} from "../../interfaces/movieInterface";
import {moviesService} from "../../services";
import {AxiosError} from "axios";
import {IMovieDetails} from "../../interfaces/movieDetailsInterface";

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
    async (page, {rejectWithValue}) => {
        try {
            const {data} = await moviesService.getMovies(page)
            return data
        } catch (e) {
            const err = e as AxiosError
            return rejectWithValue(err.response?.data)
        }
    }
)

const getMovieById = createAsyncThunk<IMovieDetails ,number> (
    'moviesSlice/getMovieById',
    async (id, {rejectWithValue}) => {
        try {
            const {data} = await moviesService.getMovieById(id)
            return data
        } catch (e) {
            const err = e as AxiosError
            return rejectWithValue(err.response?.data)
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

const {reducer: moviesReducer, actions} = moviesSlice

const moviesActions = {
    getMovies,
    getMovieById
}

export {
    moviesActions,
    moviesReducer
}