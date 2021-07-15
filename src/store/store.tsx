import {Action, configureStore} from '@reduxjs/toolkit'
import {ThunkAction} from 'redux-thunk'
import rootReducer from "./reducer";


const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            immutableCheck:false,
            serializableCheck: false,
        }),
})

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk = ThunkAction<void, RootState, unknown, Action<string>>

export default store