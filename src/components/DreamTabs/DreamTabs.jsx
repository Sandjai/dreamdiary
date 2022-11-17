import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";

import { selectDate } from "../../store/dreamspage/selectors";
import {
  selectDreams,
  selectDreamsIDs,
  selectdreamidsFilteredByName,
  selectDreamsDate,
  selectDreamsByDate,
} from "../../store/dream/selectors";
import { DreamTab } from "../DreamTab/DreamTab";
import { useSearchParams } from "react-router-dom";
import { useEffect } from "react";

export const DreamTabs = ({ dreamid, setdreamid }) => {
  const time = useSelector(selectDate);
  const dispatch = useDispatch();
  const dreams = useSelector((state) =>
    selectDreamsByDate(state, {
      datestamp: new Date(time).getTime(),
    })
  );

  return (
    <div>
      {dreams.map(([key, val], index) => (
        <DreamTab
          selecteddreamid={dreamid}
          setdreamid={setdreamid}
          key={key}
          index={index}
          dreamid={key}
        />
      ))}
    </div>
  );
};
