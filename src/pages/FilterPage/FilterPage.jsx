import styles from "./styles.module.css";

import {
  selectDreamsEntities,
  selectDreamsIDs,
} from "../../store/calendar/selectors.js";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

import { formatDate } from "../../utils/formatDate";

import { dreamType, dreamTypeCF, monthsInRU } from "../../constants/ui";
import { Header } from "../../components/Header/Header";

export const FilterPage = () => {
  const { datestring } = useParams();
  const monthYear = formatDate(new Date(datestring), {
    dateStyle: "monthYear",
  });
  const params = new URLSearchParams(window.location.search);
  const type = params.get("type");
  const dreamsIDs = useSelector((state) =>
    selectDreamsIDs(state, { monthYear: monthYear })
  );
  const entities = useSelector(selectDreamsEntities);
  let neededIDs = [];
  if (dreamsIDs) {
    neededIDs = dreamsIDs.filter(
      (item) => dreamType(entities?.[item]?.["type"]) === type
    );
  }

  return (
    <>
      <Header>
        {neededIDs.length != 0 ? (
          <h2>
            Все сны с типом "{entities[neededIDs[0]].type}" за <br></br>
            {
              <time dateTime={datestring}>
                {
                  monthsInRU[
                    formatDate(new Date(datestring).getMonth(), {
                      dateStyle: "short",
                    })
                  ]
                }
              </time>
            }
          </h2>
        ) : (
          <h2>В этом месяце снов c типом "{dreamTypeCF(type)}" еще не было.</h2>
        )}
      </Header>

      {neededIDs.map((id, index) => (
        <div key={id} className={styles.root}>
          <div className={styles.name}>
            {" "}
            {index + 1 + ") " + entities?.[id]?.name}{" "}
          </div>
          <div className={styles.description}>
            {entities?.[id]?.description}
          </div>
          <div className={styles.time}> {entities?.[id]?.time} </div>
        </div>
      ))}
    </>
  );
};
