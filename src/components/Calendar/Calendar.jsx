import React, { useState } from "react";

import { useDispatch } from "react-redux";
import { CalendarSlice } from "../../store/calendar";

import styles from "./styles.module.css";
import { formatDate } from "../../utils/formatDate";

import { CalendarCells } from "./__cells/CalendarCells";

import { monthsInRU } from "../../constants/ui";

import { useParams } from "react-router-dom";

export const Calendar = ({ className, activeMonth, setActiveMonth }) => {
  const { datestring } = useParams();

  const dispatch = useDispatch();

  //formatDate(new Date(date), { dateStyle: "short" })

  // const changeDate = (date) => {
  //   setInnerDate(new Date(date));
  // };

  return (
    <div className={className}>
      <h3> Календарь сновидений</h3>
      <div className={styles.rangepicker}>
        <div className={styles.rangepicker__selector}>
          <div
            className={styles.rangepicker__selector_control_left}
            onClick={() => {
              const d1 = new Date(activeMonth).setMonth(
                new Date(activeMonth).getMonth() - 1
              );

              let newDateString = formatDate(new Date(d1), {
                dateStyle: "short",
              })
                .split(".")
                .reverse()
                .join("-");

              setActiveMonth(newDateString);

              dispatch(
                CalendarSlice.actions.addLoadedMonths(
                  formatDate(new Date(activeMonth), { dateStyle: "monthYear" })
                )
              );
            }}
          ></div>
          <div
            className={styles.rangepicker__selector_control_right}
            onClick={() => {
              const d1 = new Date(activeMonth).setMonth(
                new Date(activeMonth).getMonth() + 1
              );

              let newDateString = formatDate(new Date(d1), {
                dateStyle: "short",
              })
                .split(".")
                .reverse()
                .join("-");

              setActiveMonth(newDateString);

              dispatch(
                CalendarSlice.actions.addLoadedMonths(
                  formatDate(new Date(activeMonth), { dateStyle: "monthYear" })
                )
              );
            }}
          ></div>

          <div className={styles.rangepicker__calendar}>
            <div className={styles.rangepicker__month_indicator}>
              <time dateTime={datestring}>
                {
                  monthsInRU[
                    formatDate(new Date(activeMonth).getMonth(), {
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

                dispatch(
                  CalendarSlice.actions.addLoadedMonths(
                    formatDate(new Date(datestring), { dateStyle: "monthYear" })
                  )
                );
              }}
              className={styles.rangepicker__dateGrid}
            >
              <CalendarCells
                activeMonth={activeMonth}
                setActiveMonth={setActiveMonth}
              ></CalendarCells>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
