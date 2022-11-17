import React from "react";
import { useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CalendarSlice } from "../../store/calendar";
import { DreamsPageSlice } from "../../store/dreamspage";
import { DreamSlice } from "../../store/dream";
import { selectDate } from "../../store/dreamspage/selectors";

import { selectDreamsByDate } from "../../store/dream/selectors";
import styles from "./styles.module.css";
import { formatDate } from "../utils/formatDate";
import classnames from "classnames";

import { CalendarCell } from "./__cell/CalendarCell";
import { CalendarCells } from "./__cells/CalendarCells";

import { months } from "../../constants/ui";

import { DateContext } from "../../contexts/DateContext";
import { Dream } from "../Dream/Dream";

export const Calendar = ({ className, dreamid, setdreamid }) => {
  const time = useSelector((state) => selectDate(state));

  const firstID = useSelector((state) =>
    selectDreamsByDate(state, {
      datestamp: time,
    })
  )[0]?.[0];

  useEffect(() => {
    setdreamid(firstID);
  }, [firstID]);

  const dispatch = useDispatch();

  const formattedDate = formatDate(new Date(time), { dateStyle: "short" });

  const changeTime = (time) => {
    time = new Date(time).getTime();
    /*   dispatch(
      DreamSlice.actions.changeTime({ timestamp: time, selectedID: null })
    ); */
    dispatch(DreamsPageSlice.actions.changeDate(time));
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

                //setChosenDate(new Date(event.target.dataset.value).getTime());
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
