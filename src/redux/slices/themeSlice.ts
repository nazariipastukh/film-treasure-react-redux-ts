import {createSlice} from "@reduxjs/toolkit";

interface IState {
    themeTrigger: boolean
}

const initialState: IState = {
    themeTrigger: localStorage.getItem('theme') === 'true'
}

const themeSlice = createSlice({
    name: 'themeSlice',
    initialState,
    reducers: {
        changeTheme: state => {
            state.themeTrigger = !state.themeTrigger
            localStorage.setItem('theme', state.themeTrigger.toString())
        }
    },
    extraReducers: {}
})

const {reducer: themeReducer, actions} = themeSlice

const themeActions = {
    ...actions
}

export {
    themeActions,
    themeReducer
}