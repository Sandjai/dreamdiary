import styles from "./styles.module.css";

import {
  selectDreamDescriptionByID,
  selectDreamTypeByID,
} from "../../store/calendar/selectors.js";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

import { formatDate } from "../utils/formatDate";

export const Dream = () => {
  const { datestring, dreamid } = useParams();

  const dreamDescription = useSelector((state) =>
    selectDreamDescriptionByID(state, { dreamid })
  );

  const dreamTypeById = useSelector((state) =>
    selectDreamTypeByID(state, { dreamid })
  );

  if (!dreamid) {
    return (
      <div className={styles.root}>
        На {formatDate(new Date(datestring), { dateStyle: "long" })} снов пока
        нет
      </div>
    );
  }

  return (
    <div>
      <div className={styles.root}>{dreamDescription}</div>;
      <div>
        <p className={styles.type}>
          <i>Тип: {dreamTypeById}</i>
        </p>
      </div>
    </div>
  );
};
