import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {IDataResponse, IMovie} from "../../interfaces/movieInterface";
import {searchService} from "../../services";
import {AxiosError} from "axios";

interface IProps {
    inputValue: string
    page: string
}

interface IState {
    moviesBySearch: IMovie[]
    totalPages: number
}

const initialState: IState = {
    moviesBySearch: [],
    totalPages: null
}

const getMoviesBySearch = createAsyncThunk<IDataResponse, IProps >(
    'searchSlice/getMoviesBySearch',
    async ({inputValue, page},{rejectWithValue}) => {
        try {
            const {data} = await searchService.findMovie(inputValue, page)
            return data
        } catch (e) {
            const err = e as AxiosError
            return rejectWithValue(err.response?.data)
        }
    }
)

const searchSlice = createSlice({
    name: 'searchSlice',
    initialState,
    reducers: {},
    extraReducers: builder => builder
        .addCase(getMoviesBySearch.fulfilled, (state, action) => {
            const {results, total_pages} = action.payload
            state.totalPages = total_pages
            state.moviesBySearch = results
        })
})

const {reducer: searchReducer} = searchSlice

const searchActions = {
    getMoviesBySearch
}

export {
    searchReducer,
    searchActions
}