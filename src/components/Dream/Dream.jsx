import styles from "./styles.module.css";

import { selectDreamDescriptionByID } from "../../store/calendar/selectors.js";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

import { formatDate } from "../utils/formatDate";

export const Dream = () => {
  const { datestring, dreamid } = useParams();

  const dreamDescription = useSelector((state) =>
    selectDreamDescriptionByID(state, { dreamid })
  );

  if (!dreamid) {
    return (
      <div className={styles.root}>
        На {formatDate(new Date(datestring), { dateStyle: "long" })} снов пока
        нет
      </div>
    );
  }

  return <div className={styles.root}>{dreamDescription}</div>;
};
