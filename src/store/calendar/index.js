import { createSlice, createAction } from "@reduxjs/toolkit";
import { useParams } from "react-router-dom";
import { LoadingStatuses } from "../constants/loadingStatuses";


const initialState = {
  entities: {},
    ids: [],
    status: LoadingStatuses.idle,
  date: Date.now(),
  months: [],
 
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
        state.allTypes = {[action.payload.months]: action.payload.allTypes,
        ...state.allTypes}     
               
      },
      failLoading: (state) => {
        state.status = LoadingStatuses.failed;
      },

      addLoadedMonths: (state, action) => {
     
  //state.months = action.payload;
  if (!Array.isArray(state.months)) {
    state.months = [];     
  }

  state.months = Array.from(new Set([((new Date(action.payload).getMonth()+1) + '-' + (new Date(action.payload).getFullYear())), ...state.months]))

      },


      addDream: (state, action) => {
        state.entities[action.payload.key] = action.payload.values;
        state.ids.push(action.payload.key);        

      if (!state.allTypes.hasOwnProperty(action.payload.monthYear)) {
        state.allTypes[action.payload.monthYear] = action.payload.type;
      } else {
        state.allTypes[action.payload.monthYear].push(action.payload.type);
      }
        
      }
     

    

  },
});


