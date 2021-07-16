import {createSlice, PayloadAction} from '@reduxjs/toolkit'

export type AppState = {
    readonly busy:boolean,
    readonly requestCalendarSuccessed:boolean
}

const initialState:AppState = {
    busy:false,
    requestCalendarSuccessed: false
}

export const AppStateReducerSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        ACTION_API_SUBMIT_CONTACT_started(state, action:PayloadAction<{}>) {
            state.busy=true;
            state.requestCalendarSuccessed=false;
        },
        ACTION_API_SUBMIT_CONTACT_success(state, action:PayloadAction<{}>) {
            state.requestCalendarSuccessed=true
        },
        ACTION_API_SUBMIT_CONTACT_failed(state, action:PayloadAction<{}>) {
            state.requestCalendarSuccessed=false
        },
        ACTION_API_SUBMIT_CONTACT_ended(state, action:PayloadAction<{}>) {
            state.busy=false
        }
    }
})