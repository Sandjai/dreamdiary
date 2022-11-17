import { useSelector } from "react-redux";
import { useState } from "react";
import {
  selectDreams,
  selectDreamsIDs,
  selectdreamIDsFilteredByName,
  selectDreamsDate,
  selectDreamsByDate,
} from "../../store/dream/selectors";
import { DreamTab } from "../DreamTab/DreamTab";
import { useSearchParams } from "react-router-dom";

export const DreamTabs = ({ dreamID, setDreamID }) => {
  const time = useSelector((state) => selectDreamsDate(state));

  const dreams = useSelector((state) =>
    selectDreamsByDate(state, {
      datestamp: new Date(time).getTime(),
    })
  );

  return (
    <div>
      {dreams.map(([key, val], index) => (
        <DreamTab
          selectedDreamID={dreamID}
          setDreamID={setDreamID}
          key={key}
          index={index}
          dreamID={key}
        />
      ))}
    </div>
  );
};
