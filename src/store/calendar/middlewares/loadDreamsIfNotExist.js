import { normolize } from "../../utils/normolize";
import { selectDreamsIDs } from "../selectors";
import {CalendarSlice} from "../index";
import {LinksService} from "../../../services/links.service"

export const loadDreamsIfNotExist = (dispatch, getState) => {
    if (selectDreamsIDs(getState())?.length > 0) {
        return;
      }
      
      dispatch(CalendarSlice.actions.startLoading());

  LinksService.getLinks((notes) => {  
    dispatch(CalendarSlice.actions.successLoading(normolize(notes)));
  }, () => dispatch(CalendarSlice.actions.failLoading()));
}