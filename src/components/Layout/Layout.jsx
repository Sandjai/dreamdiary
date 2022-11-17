import { Sidebar } from "../Sidebar/Sidebar";
import { Header } from "../Header/Header";

import styles from "./styles.module.css";

export const Layout = ({ children, setDate }) => {
  return (
    <div className={styles.root}>
      <Sidebar className={styles.sidebar}></Sidebar>
      <div>
        <div className={styles.content}>{children}</div>
      </div>
    </div>
  );
};
