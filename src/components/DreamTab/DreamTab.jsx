import { useSelector } from "react-redux";
import { selectDreamByID } from "../../store/dream/selectors";
import { NavLink } from "react-router-dom";
import classnames from "classnames";
import styles from "./styles.module.css";
import { Button } from "../Button/Button";

export const DreamTab = ({ selectedDreamID, dreamID, setDreamID, index }) => {
  const dream = useSelector((state) => selectDreamByID(state, { dreamID }));

  return (
    <Button
      key={dreamID}
      selectedIndex={selectedDreamID}
      onClick={() => {
        setDreamID(dreamID);
      }}
    >
      {dream.name}
    </Button>
  );
};
