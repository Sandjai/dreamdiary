import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";


import { CalendarSlice } from "./calendar"


const rootReducer = combineReducers({
  
    calendar: CalendarSlice.reducer,
  
   
})

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
  devTools: true,
})