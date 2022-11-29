import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";

import { selectDate } from "../../store/calendar/selectors";
import { selectDreamsByDate } from "../../store/calendar/selectors";
import { DreamTab } from "../DreamTab/DreamTab";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import { useEffect } from "react";

export const DreamTabs = () => {
  const { datestring } = useParams();

  const dreams = useSelector((state) =>
    selectDreamsByDate(state, {
      datestamp: new Date(datestring).getTime(),
    })
  );

  const selecteddreamid = dreams?.[0]?.[0] || "";

  const navigate = useNavigate();
  useEffect(() => {
    navigate(`${selecteddreamid}`);
  }, [selecteddreamid]);

  const dispatch = useDispatch();

  return (
    <div>
      {dreams.map(([key, val], index) => (
        <DreamTab
          selecteddreamid={dreams[0][0]}
          key={key}
          index={index}
          dreamid={key}
        />
      ))}
    </div>
  );
};
