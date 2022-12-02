import { createSlice, createAction } from "@reduxjs/toolkit";
import { useParams } from "react-router-dom";
import { LoadingStatuses } from "../constants/loadingStatuses";

const initialState = { 
    status: LoadingStatuses.idle,
};

export const AddDreamFormSlice = createSlice({
  name: "addDreamForm",
  initialState,
  reducers: { 

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
