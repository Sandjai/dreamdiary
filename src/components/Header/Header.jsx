import styles from "./styles.module.css";
import classnames from "classnames";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useContext, useState } from "react";
import { Button } from "../Button/Button";
import { selectDreamsDate } from "../../store/dream/selectors";
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
  dreamID,
  setDreamID,
  onClick,
}) => {
  //const date = useContext(DateContext);

  let time0 = useContext(DateContext);
  const date = new Date("Sun Nov 06 2022 10:01:16 GMT+0400").getTime();
  const time = useSelector((state) => selectDreamsDate(state));

  /* if (activedreamID === null)
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

      <DreamTabs dreamID={dreamID} setDreamID={setDreamID} />

      {children}
    </div>
  );
};
