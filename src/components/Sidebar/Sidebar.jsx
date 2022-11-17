import React from "react";
import { Calendar } from "../Calendar/Calendar.jsx";
import { Tags } from "../Tags/Tags.jsx";
import { Diagram } from "../Diagram/Diagram.jsx";
import logo from "../../logo.png";
import styles from "./styles.module.css";
import classnames from "classnames";

export const Sidebar = ({ className, dreamid, setdreamid }) => {
  return (
    <div className={classnames(className, styles.root)}>
      <h1>Приснилось?</h1>
      <img src={logo} className={styles.logo} alt="logo" />

      <div className="calendar">
        <Calendar
          dreamid={dreamid}
          setdreamid={setdreamid}
          date={Date.now()}
        ></Calendar>
      </div>
      <div className="tags">
        <Tags></Tags>
      </div>
      <div className="diagram">
        <Diagram></Diagram>
      </div>
    </div>
  );
};
