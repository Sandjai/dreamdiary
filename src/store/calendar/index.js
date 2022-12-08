import { createSlice, createAction } from "@reduxjs/toolkit";
import { useParams } from "react-router-dom";
import { LoadingStatuses } from "../constants/loadingStatuses";
import {formatDate} from "../../utils/formatDate";
import { getDateString } from "../../utils/getDateString";

const initialState = {
  entities: {},
    ids: [],
    status: LoadingStatuses.idle,
  date: getDateString(Date.now()),
  months: [],
 
};

export const CalendarSlice = createSlice({
  name: "calendar",
  initialState,
  reducers: { 

    changeDate: (state, action) => { 
      state.date = getDateString(action?.payload || state.date); 
    
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

      addLoadedMonths: (state, action) => {

  //state.months = action.payload;
  if (!Array.isArray(state.months)) {
    state.months = [];     
  }

  state.months = Array.from(new Set([action.payload, ...state.months]))

      },


      addDream: (state, action) => {        
        state.entities[action.payload.key] = action.payload.values;
        state.ids.push(action.payload.key);
      }
     

    

  },
});


