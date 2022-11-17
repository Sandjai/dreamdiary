import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import { DreamSlice } from "./dream";
import {DreamsPageSlice} from "./dreamspage";
import { CalendarSlice } from "./calendar"

const rootReducer = combineReducers({
    dream: DreamSlice.reducer,
    calendar: CalendarSlice.reducer,
    dreamspage: DreamsPageSlice.reducer,
})

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
  devTools: true,
})