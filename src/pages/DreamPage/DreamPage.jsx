import styles from "./styles.module.css";
import {
  selectDreamDescriptionByID,
  selectDreamsByDate,
  selectDreamTypeByID,
} from "../../store/calendar/selectors.js";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { formatDate } from "../../utils/formatDate";
import { Button } from "../../components/Button/Button";
import { SIZES } from "../../constants/ui";
import { DreamTabs } from "../../components/DreamTabs/DreamTabs";
import { Header } from "../../components/Header/Header";

export const DreamPage = () => {
  const navigate = useNavigate();
  const { datestring, dreamid } = useParams();

  const date = new Date(datestring);

  const dreamDescription = useSelector((state) =>
    selectDreamDescriptionByID(state, { dreamid })
  );

  const dreamTypeById = useSelector((state) =>
    selectDreamTypeByID(state, { dreamid })
  );

  const firstID = useSelector((state) =>
    selectDreamsByDate(state, {
      datestamp: date,
    })
  )[0]?.[0];

  if (firstID === undefined) {
    return (
      <div className={styles.root}>
        На {formatDate(new Date(datestring), { dateStyle: "long" })} снов пока
        нет
      </div>
    );
  }

  return (
    <>
      <section className={styles.content}>
        <div className={styles.main}>
          <div>
            <Header>
              <h2>
                Список снов на{" "}
                {formatDate(new Date(datestring), { dateStyle: "long" })}
              </h2>
              <DreamTabs />
            </Header>
            <div>
              {dreamDescription ? (
                <div>
                  <p className={styles.type}>{dreamDescription}</p>
                </div>
              ) : (
                <div className="marTopLrg">
                  <h3>
                    <i>Выбери сон или создай новый</i>
                  </h3>
                </div>
              )}

              {dreamTypeById ? (
                <div>
                  <p className={styles.type}>
                    <i>Тип: {dreamTypeById}</i>
                  </p>
                </div>
              ) : (
                ""
              )}
            </div>
          </div>
          <Button
            onClick={() => {
              navigate(`/date/${datestring}/dream/newDream`);
            }}
            size={SIZES.l}
            className={styles.mainBtn}
          >
            + Добавить сон
          </Button>
        </div>
      </section>
    </>
  );
};
