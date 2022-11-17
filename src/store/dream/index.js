import { createSlice} from "@reduxjs/toolkit";
import { LoadingStatuses } from "../constants/loadingStatuses";

const initialState = {
    entities: {},
    ids: [],
    status: LoadingStatuses.idle,
    timestamp: Date.now(),
  };

export const DreamSlice = createSlice({
    name: "dream",
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
            state.timestamp = Date.now();          
          },
          failLoading: (state) => {
            state.status = LoadingStatuses.failed;
          },



    }
})