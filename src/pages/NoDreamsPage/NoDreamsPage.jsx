import styles from "./styles.module.css";

import { selectDreamDescriptionByID } from "../../store/calendar/selectors.js";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { Button } from "../../components/Button/Button";
import { formatDate } from "../../utils/formatDate";
import { Header } from "../../components/Header/Header";

export const NoDreamsPage = () => {
  const navigate = useNavigate();
  const { datestring, dreamid } = useParams();

  const dreamDescription = useSelector((state) =>
    selectDreamDescriptionByID(state, { dreamid })
  );

  return (
    <>
      <section className={styles.content}>
        <Header>
          <h2>
            Список снов на{" "}
            {formatDate(new Date(datestring), { dateStyle: "long" })} пока пуст.
          </h2>
        </Header>
        <div className={styles.main}>
          <div>
            {
              <div className="marTopLrg marBottomMed">
                <h3>Здесь снов нет.</h3>
                <i>Выбери сон или создай новый</i>
              </div>
            }

            <div className={styles.root}>
              <div>{dreamDescription}</div>
              <div></div>
            </div>
          </div>
          <Button
            onClick={() => {
              navigate(`/date/${datestring}/dream/newDream`);
            }}
            type="roundBtn"
          ></Button>
        </div>
      </section>
    </>
  );
};
