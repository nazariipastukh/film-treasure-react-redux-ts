import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {AxiosError} from "axios";

import {IGenre} from "../../interfaces/genreInterface";
import {genresService} from "../../services";
import {IDataResponse, IMovie} from "../../interfaces/movieInterface";

interface IProps {
    genreId: string
    page: string
}

interface IState {
    genres: IGenre[]
    moviesByGenre: IMovie[]
    totalPages: number
}

const initialState: IState = {
    genres: [],
    moviesByGenre: [],
    totalPages: null
}

const getGenresList = createAsyncThunk<IGenre[]>(
    'genresSlice/getGenresList',
    async (_, {rejectWithValue}) => {
        try {
            const {data} = await genresService.getGenresList()
            return data.genres
        } catch (e) {
            const err = e as AxiosError
            return rejectWithValue(err.response?.data)
        }
    }
)

const getByGenre = createAsyncThunk<IDataResponse, IProps>(
    'genresSlice/getByGenre',
    async ({genreId, page}, {rejectWithValue}) => {
        try {
            const {data} = await genresService.getByGenre(genreId, page)
            return data
        } catch (e) {
            const err = e as AxiosError
            return rejectWithValue(err.response?.data)
        }
    }
)

const genresSlice = createSlice({
    name: 'genresSlice',
    initialState,
    reducers: {},
    extraReducers: builder => builder
        .addCase(getGenresList.fulfilled, (state, action) => {
            state.genres = action.payload
        })
        .addCase(getByGenre.fulfilled, (state, action) => {
            const {results, total_pages} = action.payload
            state.moviesByGenre = results
            state.totalPages = total_pages
        })
})

const {reducer: genresReducer} = genresSlice

const genresActions = {
    getGenresList,
    getByGenre
}

export {
    genresActions,
    genresReducer
}