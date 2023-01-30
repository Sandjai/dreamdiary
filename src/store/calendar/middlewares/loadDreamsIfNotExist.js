import { normolize } from "../../utils/normolize";
import { selectMonths } from "../selectors";
import { CalendarSlice } from "../index";
import { TagsSlice } from "../../tags";
import { LinksService } from "../../../services/links.service";

import { formatDate } from "../../../utils/formatDate";

export const loadDreamsIfNotExist = (date) => (dispatch, getState) => {
  const month = new Date(date).getMonth() + 1;
  const year = new Date(date).getFullYear();
  const monthYear = formatDate(new Date(date), { dateStyle: "monthYear" });

  if (selectMonths(getState(), monthYear)) {
    return;
  }

  dispatch(CalendarSlice.actions.startLoading());

  LinksService.getData({
    callbackSuccess: (notes) => {
      dispatch(
        CalendarSlice.actions.successLoading(normolize(notes, monthYear))
      );
      dispatch(
        TagsSlice.actions.update({
          allTypes: Object.values(notes).map((item) => item.type),
          monthYear,
        })
      );
    },
    callbackFail: () => dispatch(CalendarSlice.actions.failLoading()),
    month: month,
    year: year,
  });
};
