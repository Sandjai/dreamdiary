import { createSlice, createAction } from "@reduxjs/toolkit";
import { LoadingStatuses } from "../constants/loadingStatuses";

const initialState = {
  entities: {},
    ids: [],
    status: LoadingStatuses.idle,
  date: Date.now(),
};

export const CalendarSlice = createSlice({
  name: "calendar",
  initialState,
  reducers: { 

    changeDate: (state, action) => { 
      state.date = (action?.payload || state.date); 
      },

      startLoading: (state) => {
        state.status = LoadingStatuses.inProgress;
      },
      successLoading: (state, action) => {

        state.entities = {
          ...state.entities,
          ...action.payload.entities,
        };
        state.ids = Array.from(new Set([...state.ids, ...action.payload.ids]));
        state.status = LoadingStatuses.success;
               
      },
      failLoading: (state) => {
        state.status = LoadingStatuses.failed;
      },


  },
});
