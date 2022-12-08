import styles from "./styles.module.css";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

import {
  ifHaveDreamsOnDate,
  selectDreamsByDate,
} from "../../../store/calendar/selectors";
import classnames from "classnames";

export const CalendarCell = ({
  selectedDate,
  datestring,
  className,
  children,
  startIndex,
}) => {
  const ifHaveDreams = useSelector((state) =>
    ifHaveDreamsOnDate(state, { date: datestring })
  );

  const dreams = useSelector((state) =>
    selectDreamsByDate(state, { datestamp: datestring })
  );

  const firstId = dreams?.[0]?.[0] || "nodream";

  function isActive() {
    return (
      new Date(datestring).getDate() === new Date(selectedDate).getDate() &&
      new Date(datestring).getMonth() === new Date(selectedDate).getMonth() &&
      new Date(datestring).getFullYear() ===
        new Date(selectedDate).getFullYear()
    );
  }

  return (
    <Link
      to={`/date/${datestring}/dream/${firstId}`}
      style={{ "--start-from": startIndex }}
      className={classnames(
        styles.root,
        className,
        styles.rangepicker__cell,
        {
          [styles.haveDreams]: ifHaveDreams,
        },
        {
          [styles.active]: isActive(),
        }
      )}
      data-value={datestring}
    >
      {children}
    </Link>
  );
};
