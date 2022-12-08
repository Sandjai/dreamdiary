import { Notification } from "../Notification/Notification";
import styles from "./styles.module.css";

export const Layout = ({ children }) => {
  return (
    <>
      <Notification></Notification>
      <div className={styles.root}>
        <div className={styles.layout}>{children}</div>
      </div>
    </>
  );
};
