import styles from "./styles.module.css";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { selectDate } from "../../../store/calendar/selectors";
import { selectDreamsByDate } from "../../../store/calendar/selectors";

import { selectedDate } from "../../../store/calendar/selectors";

import classnames from "classnames";

export const CalendarCell = ({
  selectedDate,
  datestring,
  className,
  children,
  startIndex,
}) => {
  const ifHaveDreams = useSelector((state) =>
    selectDreamsByDate(state, { datestamp: datestring })
  ).length;

  //let selectedTime = useSelector(selectDate);

  return (
    <Link
      to={datestring}
      style={{ "--start-from": startIndex }}
      className={classnames(
        styles.root,
        className,
        styles.rangepicker__cell,
        {
          [styles.haveDreams]: ifHaveDreams,
        },
        {
          [styles.active]:
            new Date(datestring).getDate() ===
              new Date(selectedDate).getDate() &&
            new Date(datestring).getMonth() ===
              new Date(selectedDate).getMonth() &&
            new Date(datestring).getYear() === new Date(selectedDate).getYear(),
        }
      )}
      data-value={datestring}
    >
      {children}
    </Link>
  );
};
