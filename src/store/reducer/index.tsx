import {AppStateReducerSlice} from "./appStateReducerSlice";
import {combineReducers} from '@reduxjs/toolkit';

const rootReducer = combineReducers({
    app: AppStateReducerSlice.reducer
});

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer
