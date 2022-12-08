import { createSlice, createAction } from "@reduxjs/toolkit";
import { useParams } from "react-router-dom";
import { LoadingStatuses } from "../constants/loadingStatuses";
import {formatDate} from "../../utils/formatDate";
import { getDateString } from "../../utils/getDateString";

const initialState = {
  isShown: false,  
message: "Твой сон сохранён успешно!",
type: "success",
duration: "1500",
};


export const NotificationSlice = createSlice({
  name: "notification",
  initialState,
  reducers: { 

    showNotification: (state, action) => {
     
   
        state.isShown = true;
        state.message = action.payload.text;
        state.type = action.payload.messageType;
        state.duration = action.payload.duration;
       
    },

      hideNotification: (state, action) => { 
     
state.isShown = false;
        
      }


  },
});


