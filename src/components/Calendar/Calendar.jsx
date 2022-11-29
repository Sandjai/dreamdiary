import React, { useRef } from "react";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CalendarSlice } from "../../store/calendar";

import { selectDate } from "../../store/calendar/selectors";

import styles from "./styles.module.css";
import { formatDate } from "../utils/formatDate";

import { loadDreamsIfNotExist } from "../../store/calendar/middlewares/loadDreamsIfNotExist";

import { CalendarCells } from "./__cells/CalendarCells";

import { months } from "../../constants/ui";

export const Calendar = ({ className }) => {
  const selectedDate = useSelector((state) => selectDate(state));

  useEffect(() => {
    dispatch(loadDreamsIfNotExist);
  }, []);

  const dispatch = useDispatch();
  const refToDate = useRef(
    formatDate(new Date(selectedDate), { dateStyle: "short" })
  );

  const changeDate = (date) => {
    date = new Date(date).getTime();

    dispatch(CalendarSlice.actions.changeDate(date));
  };

  return (
    <div>
      Календарь сновидений
      <div className={styles.rangepicker}>
        <div className={styles.rangepicker__input} data-elem="input">
          <span>{refToDate.current}</span>
        </div>
        <div className={styles.rangepicker__selector} data-elem="selector">
          <div
            className={styles.rangepicker__selector_control_left}
            onClick={() => {
              changeDate(
                new Date(selectedDate).setMonth(
                  new Date(selectedDate).getMonth() - 1
                )
              );
            }}
          ></div>
          <div
            className={styles.rangepicker__selector_control_right}
            onClick={() => {
              changeDate(
                new Date(selectedDate).setMonth(
                  new Date(selectedDate).getMonth() + 1
                )
              );
            }}
          ></div>

          <div className={styles.rangepicker__calendar}>
            <div className={styles.rangepicker__month_indicator}>
              <time dateTime={selectedDate}>
                {
                  months[
                    formatDate(new Date(selectedDate).getMonth(), {
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
                changeDate(new Date(event.target.dataset.value).getTime());
                refToDate.current = formatDate(
                  new Date(event.target.dataset.value),
                  { dateStyle: "short" }
                );

                //setChosenDate(new Date(event.target.dataset.value).getTime());
              }}
              className={styles.rangepicker__dateGrid}
            >
              <CalendarCells refToDate={refToDate.current}></CalendarCells>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
