import { Sidebar } from "../../components/Sidebar/Sidebar";
import styles from "./styles.module.css";

export const Layout = ({ children }) => {
  return (
    <div className={styles.root}>
      <Sidebar></Sidebar>
      {children}
    </div>
  );
};
