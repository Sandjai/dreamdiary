import styles from "./styles.module.css";
import { useSelector } from "react-redux";
import classnames from "classnames";
import { CalendarCell } from "../__cell/CalendarCell";
import { selectDreamsDate } from "../../../store/dream/selectors";
import { selectedDate } from "../../../store/calendar/selectors";
export const CalendarCells = ({ className }) => {
  let time = useSelector(selectedDate);
  let date = new Date(time);

  let days = [];
  date.setDate(1);

  const startIndex = (date.getDay() === 0 ? 6 : date.getDay() - 1) + 1; // make Sunday (0) the last day

  do {
    let innerdate = date;

    days.push(
      <CalendarCell
        key={new Date(innerdate).getDate()}
        time={new Date(innerdate)}
        startIndex={startIndex}
      >
        {new Date(innerdate).getDate()}
      </CalendarCell>
    );
    date = new Date(date).setDate(new Date(innerdate).getDate() + 1);
  } while (new Date(date).getMonth() === new Date(time).getMonth());

  return days;
};
