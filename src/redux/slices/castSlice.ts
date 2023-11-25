import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {AxiosError} from "axios";

import {IActor} from "../../interfaces/actorInterface";
import {castService} from "../../services";

interface IState {
    cast: IActor[]
}

const initialState: IState = {
    cast: []
}

const getActors = createAsyncThunk<IActor[], number>(
    'castSlice/getAll',
    async (id: number, {rejectWithValue}) => {
        try {
            const {data} = await castService.getCast(id)
            return data.cast.slice(0, 9)
        } catch (e) {
            const err = e as AxiosError
            return rejectWithValue(err.response?.data)
        }
    }
)

const castSlice = createSlice({
    name: 'castSlice',
    initialState,
    reducers: {},
    extraReducers: builder => builder
        .addCase(getActors.fulfilled, (state, action) => {
            state.cast = action.payload
        })
})

const {reducer: castReducer, actions} = castSlice

const castActions = {
    getActors
}

export {
    castActions,
    castReducer
}