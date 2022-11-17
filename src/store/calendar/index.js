import { createSlice, createAction } from "@reduxjs/toolkit";
import { LoadingStatuses } from "../constants/loadingStatuses";

const initialState = {
  selectedDate: Date.now(),
};

export const CalendarSlice = createSlice({
  name: "calendar",
  initialState,
  reducers: { 

    changeTime: (state, action) => {                
      state.selectedDate = (action?.payload || state.selectedDate);
     
    },

 

  },
});
