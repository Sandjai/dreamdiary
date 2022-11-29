import styles from "./styles.module.css";
import { useSelector } from "react-redux";
import classnames from "classnames";
import { CalendarCell } from "../__cell/CalendarCell";

import { selectDate } from "../../../store/calendar/selectors";
import { Link } from "react-router-dom";
import { getDateString } from "../../../utils/getDateString";

export const CalendarCells = ({ refToDate }) => {
  // Привести из формата мм.дд.гг. в дд.мм.гг.
  refToDate = refToDate.split(".");
  let calendarDate = [];
  calendarDate.push(refToDate[1], refToDate[0], refToDate[2]);
  calendarDate = calendarDate.join("-");

  let dateInStore = useSelector(selectDate);
  let date = new Date(dateInStore);

  let days = [];
  date.setDate(1);

  const startIndex = (date.getDay() === 0 ? 6 : date.getDay() - 1) + 1; // make Sunday (0) the last day

  do {
    const innerdate = date;

    days.push(
      <CalendarCell
        key={getDateString(innerdate)}
        datestring={getDateString(innerdate)}
        selectedDate={new Date(calendarDate)}
        startIndex={startIndex}
      >
        {new Date(innerdate).getDate()}
      </CalendarCell>
    );
    date = new Date(date).setDate(new Date(innerdate).getDate() + 1);
  } while (new Date(date).getMonth() === new Date(dateInStore).getMonth());

  return days;
};
