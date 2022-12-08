import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";


import { CalendarSlice } from "./calendar";
import { TagsSlice } from "./tags";
import {NotificationSlice} from "./notification";


const rootReducer = combineReducers({
  
    calendar: CalendarSlice.reducer,
    tags: TagsSlice.reducer,
    notification: NotificationSlice.reducer,
  
   
})

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
  devTools: true,
})