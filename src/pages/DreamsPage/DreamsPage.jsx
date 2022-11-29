import { Dream } from "../../components/Dream/Dream";
import { Button } from "../../components/Button/Button";
import { Header } from "../../components/Header/Header";
import { Footer } from "../../components/Footer/Footer";

import { useState } from "react";
import styles from "./styles.module.css";
import { useDispatch, useSelector } from "react-redux";
import {
  selectDreamsEntities,
  selectDreamsByDate,
  selectDreamsLoading,
} from "../../store/calendar/selectors.js";

import { selectDate } from "../../store/calendar/selectors.js";
import { useEffect } from "react";

import { useContext } from "react";
import { DateContext } from "../../contexts/DateContext";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { SIZES } from "../../constants/ui";

export const DreamsPage = () => {
  const { datestring } = useParams();

  const date = new Date(datestring);
  const navigate = useNavigate();
  const dreamsEntities = useSelector(selectDreamsEntities);

  const dreamsDate = useSelector(selectDate);

  const firstID = useSelector((state) =>
    selectDreamsByDate(state, {
      datestamp: date,
    })
  )[0]?.[0];

  const dispatch = useDispatch();

  const isLoading = useSelector(selectDreamsLoading);

  if (isLoading) {
    return <span>Загружаем сны.....</span>;
  }

  if (!Object.keys(dreamsEntities).length) {
    return <div>Снов не обнаружено</div>;
  }

  return (
    <>
      <div className={styles.root}>
        <div className={styles.content}>
          <div className={styles.contentWrapper}>
            <Header />
            <Dream dreamid={firstID} />
            <Button
              onClick={() => {
                navigate("/newDream");
              }}
              size={SIZES.l}
              className={styles.mainBtn}
            >
              Добавить сон
            </Button>
            <Footer>{datestring}</Footer>
          </div>
        </div>
      </div>
    </>
  );
};
