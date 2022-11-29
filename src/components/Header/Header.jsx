import styles from "./styles.module.css";
import classnames from "classnames";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

import { formatDate } from "../utils/formatDate";

import { DreamTabs } from "../DreamTabs/DreamTabs";
import { CalendarSlice } from "../../store/calendar";

import { useParams } from "react-router-dom";

export const Header = ({
  children,
  className,
  dreamid,

  onClick,
}) => {
  const { datestring } = useParams();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(CalendarSlice.actions.changeDate(datestring));
  }, [datestring]);

  return (
    <div onClick={onClick} className={classnames(styles.root, className)}>
      <h2>
        Список снов на {formatDate(new Date(datestring), { dateStyle: "long" })}
      </h2>

      <DreamTabs dreamid={dreamid} />

      {children}
    </div>
  );
};
