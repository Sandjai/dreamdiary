import React, { useCallback, useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";

import { selectDate, selectDreamsIDs } from "../../store/calendar/selectors";
import { Button } from "../Button/Button";
import { monthsInRU, SIZES } from "../../constants/ui";
import { dreamType } from "../../constants/ui";

import { selectAllTypes } from "../../store/tags/selectors";
import { formatDate } from "../../utils/formatDate";
import { useNavigate, useParams } from "react-router-dom";

export const Tags = ({ className, innerDate }) => {
  const date = innerDate;

  const navigate = useNavigate();

  const monthYear = formatDate(new Date(innerDate), {
    dateStyle: "monthYear",
  });

  const allTypes = useSelector((state) =>
    selectAllTypes(state, { monthYear: monthYear })
  );

  let type_os = 0;
  let type_lucid = 0;
  let type_nightmare = 0;
  let type_simple = 0;
  let type_prophetic = 0;

  if (typeof allTypes === "object" && allTypes.hasOwnProperty(monthYear)) {
    for (let type of allTypes?.[monthYear]) {
      switch (dreamType(type)) {
        case "os":
          type_os++;
          break;
        case "lucid":
          type_lucid++;
          break;
        case "nightmare":
          type_nightmare++;
          break;
        case "simple":
          type_simple++;
          break;
        case "prophetic":
          type_prophetic++;
          break;

        default:
          console.log("no dream type");
          break;
      }
    }
  }

  const chosenMonth =
    monthsInRU[
      formatDate(new Date(date).getMonth(), {
        dateStyle: "short",
      })
    ];

  return (
    <div className={className}>
      <div>
        <h3>
          Сны по типам за <br></br>
          <time dateTime={date}>{chosenMonth} </time>
          <time>{"(" + new Date(date).getFullYear() + " год)"}</time>:
        </h3>

        <Button
          size={SIZES.s}
          onClick={() => navigate("dream/filter?type=prophetic")}
        >
          Вещий сон: <b> {type_prophetic} </b>
        </Button>
        <Button
          size={SIZES.s}
          onClick={() => navigate("dream/filter?type=nightmare")}
        >
          Кошмар: <b> {type_nightmare}</b>
        </Button>
        <Button
          size={SIZES.s}
          onClick={() => navigate("dream/filter?type=lucid")}
        >
          Люцидник: <b> {type_lucid} </b>
        </Button>
        <Button
          size={SIZES.s}
          onClick={() => navigate("dream/filter?type=simple")}
        >
          Обычный сон: <b> {type_simple}</b>
        </Button>
        <Button size={SIZES.s} onClick={() => navigate("dream/filter?type=os")}>
          Осознанный сон: <b> {type_os}</b>
        </Button>
      </div>
      <div>
        <br></br>
        <h3>Всего снов: {allTypes?.[monthYear]?.length || 0}</h3>
      </div>
    </div>
  );
};
