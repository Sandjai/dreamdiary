import styles from "./styles.module.css";
import { useDispatch } from "react-redux";
import { selectDate, selectID } from "../../store/dreamspage/selectors.js";
import {
  selectDreamDescriptionByID,
  selectDreamsDate,
} from "../../store/dream/selectors.js";

import { useSelector } from "react-redux";
import { DateContext } from "../../contexts/DateContext";
import { useContext } from "react";
import { formatDate } from "../utils/formatDate";
import { useEffect } from "react";
import { DreamSlice } from "../../store/dream";

export const Dream = ({ dreamid, setdreamid }) => {
  const dreamDescription = useSelector((state) =>
    selectDreamDescriptionByID(state, { dreamid })
  );

  //let date = useSelector((state) => selectDreamsDate(state));
  let date = useSelector((state) => selectDate(state));

  if (!dreamid) {
    return (
      <div className={styles.root}>
        На {formatDate(new Date(date), { dateStyle: "long" })} снов пока нет
      </div>
    );
  }

  return <div className={styles.root}>{dreamDescription}</div>;
};
