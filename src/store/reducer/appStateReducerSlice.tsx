import {createSlice, PayloadAction} from '@reduxjs/toolkit'

export type AppState = {
    readonly busy:boolean
}

const initialState:AppState = {
    busy:false
}

export const AppStateReducerSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        ACTION_API_SUBMIT_CONTACT_started(state, action:PayloadAction<{}>) {
            state.busy=true
        },
        ACTION_API_SUBMIT_CONTACT_ended(state, action:PayloadAction<{}>) {
            state.busy=false
        }
    }
})