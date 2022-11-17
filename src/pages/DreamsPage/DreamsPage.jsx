import { Dream } from "../../components/Dream/Dream";
import { Button } from "../../components/Button/Button";
import { Header } from "../../components/Header/Header";
import { Footer } from "../../components/Footer/Footer";

import { useState } from "react";
import styles from "./styles.module.css";
import { useDispatch, useSelector } from "react-redux";
import {
  selectDreamsIDs,
  selectDreamsEntities,
  selectDreamsDate,
  selectDreamsByDate,
  selectDreamsLoading,
} from "../../store/dream/selectors.js";
import { useEffect } from "react";
import { loadDreamsIfNotExist } from "../../store/dream/middlewares/loadDreamsIfNotExist";
import { useContext } from "react";
import { DateContext } from "../../contexts/DateContext";

export const DreamsPage = () => {
  useEffect(() => {
    dispatch(loadDreamsIfNotExist);
  }, []);

  const dreamsEntities = useSelector(selectDreamsEntities);

  const dreamsDate = useSelector(selectDreamsDate);

  const firstID = useSelector((state) =>
    selectDreamsByDate(state, {
      datestamp: dreamsDate,
    })
  )[0]?.[0];

  const dispatch = useDispatch();

  let [dreamID, setDreamID] = useState(firstID);

  const isLoading = useSelector(selectDreamsLoading);

  if (isLoading) {
    return <span>Загружаем сны.....</span>;
  }

  if (!Object.keys(dreamsEntities).length) {
    return <div>Снов не обнаружено</div>;
  }

  return (
    <div className={styles.root}>
      <Header dreamID={dreamID} setDreamID={setDreamID} />
      <Dream dreamID={dreamID} setdDeamID={setDreamID}></Dream>
      <Footer />
    </div>
  );
};
