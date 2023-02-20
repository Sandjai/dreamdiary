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
import BurgerIcon from "../../images/Hamburger_menu.png";
import classNames from "classnames";

export const Sidebar = ({ className, onClick, isOpen }) => {
  const { datestring } = useParams();

  const dispatch = useDispatch();
  const [activeMonth, setActiveMonth] = useState(datestring);
  useEffect(() => {
    dispatch(loadDreamsIfNotExist(activeMonth));
  }, [activeMonth]);

  return (
    <div className={classnames(className, styles.sidebar)}>
      <div onClick={onClick} className={styles.burgerIcon}>
        <img alt="Burger Icon" src={BurgerIcon}></img>
      </div>
      <Calendar
        activeMonth={activeMonth}
        setActiveMonth={setActiveMonth}
        className={classNames(styles.calendar, { [styles.isHidden]: !isOpen })}
      ></Calendar>
      <Tags
        className={classNames(styles.tags, { [styles.isHidden]: !isOpen })}
        activeMonth={activeMonth}
        setActiveMonth={setActiveMonth}
      ></Tags>
    </div>
  );
};
