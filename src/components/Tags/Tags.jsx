import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { selectDate } from "../../store/calendar/selectors";
import { Button } from "../Button/Button";
import { monthsInRU, SIZES } from "../../constants/ui";
import { dreamType } from "../../constants/ui";

import { selectAllTypes } from "../../store/calendar/selectors";
import { formatDate } from "../utils/formatDate";

export const Tags = ({ className }) => {
  const allTypes = useSelector((state) => selectAllTypes(state));
  const selectedDate = useSelector((state) => selectDate(state));

  const monthYear =
    new Date(selectedDate).getMonth() +
    1 +
    "-" +
    new Date(selectedDate).getFullYear();

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

  return (
    <div className={className}>
      <div>
        <h3>
          Сны по типам за{" "}
          <time dateTime={selectedDate}>
            {
              monthsInRU[
                formatDate(new Date(selectedDate).getMonth(), {
                  dateStyle: "short",
                })
              ]
            }
          </time>
          :
        </h3>

        <Button size={SIZES.s}>
          Вещий сон: <b> {type_prophetic} </b>
        </Button>
        <Button size={SIZES.s}>
          Кошмар: <b> {type_nightmare}</b>
        </Button>
        <Button size={SIZES.s}>
          Люцидник: <b> {type_lucid} </b>
        </Button>
        <Button size={SIZES.s}>
          Обычный сон: <b> {type_simple}</b>
        </Button>
        <Button size={SIZES.s}>
          Осознанный сон: <b> {type_os}</b>
        </Button>
      </div>
      <div>
        <h3>Всего снов: {allTypes?.[monthYear]?.length || 0}</h3>
      </div>
    </div>
  );
};
