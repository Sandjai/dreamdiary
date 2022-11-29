import { NavLink } from "react-router-dom";
import classnames from "classnames";
import styles from "./styles.module.css";

export const DreamTab = ({ dreamid }) => {
  return (
    <NavLink
      to={dreamid}
      onClick={() => {
        console.log("setDreamID");
      }}
      className={({ isActive }) => {
        return classnames(styles.root, {
          [styles.active]: isActive,
        });
      }}
    >
      {dreamid}
    </NavLink>
  );
};
