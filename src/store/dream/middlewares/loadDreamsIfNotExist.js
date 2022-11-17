import { normolize } from "../../utils/normolize";
import { selectDreamsIDs } from "../selectors";
import {DreamSlice} from "../index";
import { initializeApp } from "firebase/app";

export const loadDreamsIfNotExist = (dispatch, getState) => {
    if (selectDreamsIDs(getState())?.length > 0) {
        return;
      }


      

const BASE_URL = 'https://dreamdiary-9cce6-default-rtdb.firebaseio.com/notesBase/Antony';      


const firebaseConfig = {
    apiKey: "AIzaSyAkXkBhcH-hC-6peFbwBoPmIlRSe0Glw2c",
    authDomain: "dreamdiary-9cce6.firebaseapp.com",
    projectId: "dreamdiary-9cce6",
    storageBucket: "dreamdiary-9cce6.appspot.com",
    messagingSenderId: "989760806926",
    appId: "1:989760806926:web:95d8cf2efbf60a7b8b9c5f"
  };
  
  // Initialize Firebase
initializeApp(firebaseConfig);
      
  dispatch(DreamSlice.actions.startLoading());

  fetch(`${BASE_URL}/notes.json`)
    .then((response) => response.json())
    .then((notes) => {
  
      dispatch(DreamSlice.actions.successLoading(normolize(notes)));
    })
    .catch(() => {
      console.error("error in fetch");
      dispatch(DreamSlice.actions.failLoading());
    });
}