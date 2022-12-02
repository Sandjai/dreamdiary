import { NavLink } from "react-router-dom";
import classnames from "classnames";
import styles from "./styles.module.css";
import { useDispatch, useSelector } from "react-redux";
import { selectDreamNameById } from "../../store/calendar/selectors";

export const DreamTab = ({ dreamid, className }) => {
  const name = useSelector((state) => selectDreamNameById(state, { dreamid }));

  return (
    <div className={className}>
      <NavLink
        to={dreamid}
        className={({ isActive }) => {
          return classnames(styles.navlink, className, {
            [styles.active]: isActive,
          });
        }}
      >
        {name}
      </NavLink>
    </div>
  );
};
