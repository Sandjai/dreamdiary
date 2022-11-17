import styles from "./styles.module.css";
import { useSelector } from "react-redux";

import { selectDate } from "../../../store/dreamspage/selectors";
import {
  selectDreamsDate,
  selectDreamsByDate,
} from "../../../store/dream/selectors";

import { selectedDate } from "../../../store/calendar/selectors";

import classnames from "classnames";

export const CalendarCell = ({ time, className, children, startIndex }) => {
  const ifHaveDreams = useSelector((state) =>
    selectDreamsByDate(state, { datestamp: time })
  ).length;

  let selectedTime = useSelector(selectDate);

  return (
    <button
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
            new Date(selectedTime).getDate() === new Date(time).getDate(),
        }
      )}
      type="button"
      data-value={new Date(time).toISOString()}
    >
      {children}
    </button>
  );
};
