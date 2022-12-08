import { NavLink, useParams } from "react-router-dom";
import classnames from "classnames";
import styles from "./styles.module.css";
import { useSelector } from "react-redux";
import { selectDreamNameById } from "../../store/calendar/selectors";

export const DreamTab = ({ dreamid, className, index }) => {
  const name = useSelector((state) => selectDreamNameById(state, { dreamid }));

  const { datestring } = useParams();

  return (
    <div className={className}>
      <NavLink
        to={`/date/${datestring}/dream/${dreamid}`}
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
