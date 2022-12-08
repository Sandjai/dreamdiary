import { useSelector } from "react-redux";

import styles from "./styles.module.css";

import { selectDreamsByDate } from "../../store/calendar/selectors";
import { DreamTab } from "../DreamTab/DreamTab";
import { useParams } from "react-router-dom";

export const DreamTabs = () => {
  const { datestring } = useParams();

  const dreams = useSelector((state) =>
    selectDreamsByDate(state, {
      datestamp: new Date(datestring).getTime(),
    })
  );

  return (
    <div className={styles.dreamtabs}>
      {dreams.map(([key, val], index) => (
        <DreamTab
          key={key}
          index={index}
          dreamid={key}
          className={styles.navlinkContainer}
        />
      ))}
    </div>
  );
};
