import React, { useEffect, useState } from "react";
import { Calendar } from "../Calendar/Calendar.jsx";
import { Tags } from "../Tags/Tags.jsx";

import logo from "../../logo.png";
import styles from "./styles.module.css";
import classnames from "classnames";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loadDreamsIfNotExist } from "../../store/calendar/middlewares/loadDreamsIfNotExist.js";
import { formatDate } from "../../utils/formatDate.js";

export const Sidebar = ({ className }) => {
  const { datestring } = useParams();

  const dispatch = useDispatch();

  const date = datestring;

  const [innerDate, setInnerDate] = useState(new Date(date));
  const monthYear = formatDate(new Date(innerDate), { dateStyle: "monthYear" });

  useEffect(() => {
    dispatch(loadDreamsIfNotExist(innerDate));
  }, [monthYear]);

  return (
    <div className={classnames(className, styles.sidebar)}>
      <h1>Приснилось?</h1>
      <img src={logo} className={styles.logo} alt="logo" />

      <Calendar
        innerDate={innerDate}
        setInnerDate={setInnerDate}
        className={styles.calendar}
      ></Calendar>
      <Tags
        innerDate={innerDate}
        setInnerDate={setInnerDate}
        className={styles.tags}
      ></Tags>
    </div>
  );
};
