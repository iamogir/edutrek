import {Action, configureStore, ThunkAction} from "@reduxjs/toolkit";
import logger from "redux-logger";
import dropMenuReducer from "../../general/redux/slices/dropMenuSlice"

export const store = configureStore({
    reducer: {
        dropMenu: dropMenuReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
    devTools: import.meta.env.DEV,
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;