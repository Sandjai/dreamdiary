import React from "react";
import { useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CalendarSlice } from "../../store/calendar";
import { DreamSlice } from "../../store/dream";
import { selectDreamsDate } from "../../store/dream/selectors";
import styles from "./styles.module.css";
import { formatDate } from "../utils/formatDate";
import classnames from "classnames";

import { CalendarCell } from "./__cell/CalendarCell";
import { CalendarCells } from "./__cells/CalendarCells";

import { months } from "../../constants/ui";

import { DateContext } from "../../contexts/DateContext";
import { Dream } from "../Dream/Dream";

export const Calendar = ({ date, className }) => {
  const time = useSelector((state) => selectDreamsDate(state));
  const dispatch = useDispatch();

  const [chosenDate, setChosenDate] = useState();

  const formattedDate = formatDate(new Date(date), { dateStyle: "short" });

  const changeTime = (time) => {
    time = new Date(time).getTime();
    dispatch(
      DreamSlice.actions.changeTime({ timestamp: time, selectedID: null })
    );
    dispatch(CalendarSlice.actions.changeTime(time));
  };

  return (
    <div>
      Календарь сновидений
      <div className={styles.rangepicker}>
        <div className={styles.rangepicker__input} data-elem="input">
          <span>{formattedDate}</span>
        </div>
        <div className={styles.rangepicker__selector} data-elem="selector">
          <div className={styles.rangepicker__selector_control_left}></div>
          <div className={styles.rangepicker__selector_control_right}></div>

          <div className={styles.rangepicker__calendar}>
            <div className={styles.rangepicker__month_indicator}>
              <time dateTime={time}>
                {
                  months[
                    formatDate(new Date(time).getMonth(), {
                      dateStyle: "short",
                    })
                  ]
                }
              </time>
            </div>
            <div className={styles.rangepicker__dayOfWeek}>
              <div>Пн</div>
              <div>Вт</div>
              <div>Ср</div>
              <div>Чт</div>
              <div>Пт</div>
              <div>Сб</div>
              <div>Вс</div>
            </div>
            <div
              onClick={(event) => {
                changeTime(new Date(event.target.dataset.value).getTime());
                setChosenDate(new Date(event.target.dataset.value).getTime());
              }}
              className={styles.rangepicker__dateGrid}
            >
              <CalendarCells></CalendarCells>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
