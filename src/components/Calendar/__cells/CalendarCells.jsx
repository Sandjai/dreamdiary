import styles from "./styles.module.css";

import { CalendarCell } from "../__cell/CalendarCell";

import { getDateString } from "../../../utils/getDateString";

export const CalendarCells = ({ refToDate, innerDate, activeCell }) => {
  // Привести из формата мм.дд.гг. в дд.мм.гг.
  refToDate = refToDate.split(".");
  let calendarDate = [];
  calendarDate.push(refToDate[1], refToDate[0], refToDate[2]);
  calendarDate = calendarDate.join("-");

  //let dateInStore = useSelector(selectDate);
  let date = new Date(innerDate);

  let days = [];
  date.setDate(1);

  const startIndex = (date.getDay() === 0 ? 6 : date.getDay() - 1) + 1; // "Воскресение" д.б. с индексом 6

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
  } while (new Date(date).getMonth() === new Date(innerDate).getMonth());

  return days;
};
