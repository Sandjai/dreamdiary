import React, { useRef } from "react";

import { useDispatch } from "react-redux";
import { CalendarSlice } from "../../store/calendar";

import styles from "./styles.module.css";
import { formatDate } from "../../utils/formatDate";

import { CalendarCells } from "./__cells/CalendarCells";

import { monthsInRU } from "../../constants/ui";

import { useParams } from "react-router-dom";

export const Calendar = ({ className, innerDate, setInnerDate }) => {
  const { datestring } = useParams();

  const dispatch = useDispatch();

  const date = datestring;

  const refToDate = useRef(formatDate(new Date(date), { dateStyle: "short" }));

  const changeDate = (date) => {
    setInnerDate(new Date(date));
  };

  return (
    <div className={className}>
      <h3> Календарь сновидений</h3>
      <div className={styles.rangepicker}>
        <div className={styles.refToDate}>
          <span>{refToDate.current}</span>
        </div>
        <div className={styles.rangepicker__selector}>
          <div
            className={styles.rangepicker__selector_control_left}
            onClick={() => {
              dispatch(
                CalendarSlice.actions.addLoadedMonths(
                  formatDate(new Date(innerDate), { dateStyle: "monthYear" })
                )
              );

              setInnerDate(
                new Date(innerDate.setMonth(innerDate.getMonth() - 1))
              );
            }}
          ></div>
          <div
            className={styles.rangepicker__selector_control_right}
            onClick={() => {
              dispatch(
                CalendarSlice.actions.addLoadedMonths(
                  formatDate(new Date(innerDate), { dateStyle: "monthYear" })
                )
              );
              setInnerDate(
                new Date(innerDate.setMonth(innerDate.getMonth() + 1))
              );
            }}
          ></div>

          <div className={styles.rangepicker__calendar}>
            <div className={styles.rangepicker__month_indicator}>
              <time dateTime={datestring}>
                {
                  monthsInRU[
                    formatDate(new Date(innerDate).getMonth(), {
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
                if (event.target.dataset.value === undefined) {
                  return;
                }
                changeDate(new Date(event.target.dataset.value).getTime());
                dispatch(CalendarSlice.actions.changeDate(date));
                refToDate.current = formatDate(
                  new Date(event.target.dataset.value),
                  { dateStyle: "short" }
                );
              }}
              className={styles.rangepicker__dateGrid}
            >
              <CalendarCells
                innerDate={innerDate}
                refToDate={refToDate.current}
              ></CalendarCells>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
