import styles from "./styles.module.css";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { selectDreamsByDate } from "../../../store/calendar/selectors";
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
            new Date(datestring).getFullYear() ===
              new Date(selectedDate).getFullYear(),
        }
      )}
      data-value={datestring}
    >
      {children}
    </Link>
  );
};
