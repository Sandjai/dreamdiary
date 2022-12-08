import classnames from "classnames";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NotificationSlice } from "../../store/notification";
import {
  selectDuration,
  selectIfIsShown,
  selectMessage,
  selectMessageType,
} from "../../store/notification/selectors";
import styles from "./styles.module.css";

export const Notification = ({ className, children }) => {
  const dispatch = useDispatch();

  const isShown = useSelector(selectIfIsShown);
  const message = useSelector(selectMessage);
  const messageType = useSelector(selectMessageType);
  const duration = useSelector(selectDuration);

  NotificationSlice.actions.showNotification();

  const setTmOut = () =>
    setTimeout(() => {
      dispatch(NotificationSlice.actions.hideNotification());
    }, duration);

  const [notification, setNotification] = useState();

  useEffect(() => {
    if (isShown) {
      clearTimeout(notification);
      setNotification(setTmOut);
    }
  }, [isShown]);

  if (isShown)
    return (
      <div
        className={classnames(
          className,
          styles.notification,
          styles[messageType]
        )}
        style={{
          "--value": `${duration / 10000}s`,
        }}
      >
        <div
          className={styles.timer}
          style={{
            "--duration": `${duration}ms`,
          }}
        ></div>
        <div className={styles.innerWrapper}>
          <div className={styles.header}>
            {messageType === "success"
              ? "Спасибо!"
              : "Упсс... Что-то пошло не так."}
          </div>
          <div className={styles.body}>{message}</div>
        </div>
      </div>
    );
};
