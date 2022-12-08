import { createSlice, createAction } from "@reduxjs/toolkit";
import { useParams } from "react-router-dom";
import { LoadingStatuses } from "../constants/loadingStatuses";
import {formatDate} from "../../utils/formatDate";
import { getDateString } from "../../utils/getDateString";

const initialState = {
  allTypes: {},
  allTypesWithIds: {},
  monthYear: '',
 
};

export const TagsSlice = createSlice({
  name: "tags",
  initialState,
  reducers: { 

    update: (state, action) => { 
state.allTypes[action.payload.monthYear] = action.payload.allTypes;  
      },

      addDream: (state, action) => {

      if (!state.allTypes.hasOwnProperty(action.payload.monthYear)) {
       
        state.allTypes[action.payload.monthYear] = action.payload.values.type;
        //state.allTypesWithIds[action.payload.monthYear] = [action.payload.values.type];
   
      } else {
        state.allTypes[action.payload.monthYear].push(action.payload.values.type);
      }
        
      }


  },
});


