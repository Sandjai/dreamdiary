import styles from "./styles.module.css";
import classnames from "classnames";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useContext, useState } from "react";
import { Button } from "../Button/Button";
import { selectDate, selectID } from "../../store/dreamspage/selectors";
import { formatDate } from "../utils/formatDate";
import {
  selectDreamsIDs,
  selectDreamsByDate,
  selectDreamByID,
  selectDreams,
} from "../../store/dream/selectors";
import { DreamTabs } from "../DreamTabs/DreamTabs";

import { DateContext } from "../../contexts/DateContext";

export const Header = ({
  children,
  className,
  dreamid,
  setdreamid,
  onClick,
}) => {
  //const date = useContext(DateContext);

  const time = useSelector((state) => selectDate(state));
  const ID = useSelector((state) => selectID(state));

  /* if (activedreamid === null)
    return (
      <div>
        <h2>Добавить сон</h2>
      </div>
    ); */
  return (
    <div onClick={onClick} className={classnames(styles.root, className)}>
      <h2>
        Список снов на {formatDate(new Date(time), { dateStyle: "long" })}
      </h2>

      <DreamTabs dreamid={dreamid} setdreamid={setdreamid} />

      {children}
    </div>
  );
};
