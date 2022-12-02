import { normolize } from "../../utils/normolize";
import { selectDreamsIDs, selectMonths } from "../selectors";
import {CalendarSlice} from "../index";

import {LinksService} from "../../../services/links.service"
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

export const loadDreamsIfNotExist =(month, year) =>  (dispatch, getState) => {



    if (selectMonths(getState(), `${month}-${year}`)) {

        return;
      }
      
      dispatch(CalendarSlice.actions.startLoading());

  LinksService.getData({
    callbackSuccess: (notes) => {    
    dispatch(CalendarSlice.actions.successLoading(normolize(notes, month, year)));

  },
    callbackFail: () => dispatch(CalendarSlice.actions.failLoading()),
    month: month, 
    year: year,
  
  })
}