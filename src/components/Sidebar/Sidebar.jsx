import React from "react";
import { Calendar } from "../Calendar/Calendar.jsx";
import { Tags } from "../Tags/Tags.jsx";

import logo from "../../logo.png";
import styles from "./styles.module.css";
import classnames from "classnames";

export const Sidebar = ({ className }) => {
  return (
    <div className={classnames(className, styles.root)}>
      <h1>Приснилось?</h1>
      <img src={logo} className={styles.logo} alt="logo" />

      <Calendar></Calendar>
      <Tags className={styles.tags}></Tags>
    </div>
  );
};
