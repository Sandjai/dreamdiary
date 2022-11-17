import { createSlice} from "@reduxjs/toolkit";


const initialState = {
  date: Date.now(),
  type: null,
  };

export const DreamsPageSlice = createSlice({
    name: "dreamspage",
    initialState,
    reducers: {
          changeDate: (state, action) => { 
            state.date = (action?.payload || state.date); 
            },
          changeType: (state, action) => {
            state.type = (action?.payload.type);              
          },
    }
})


