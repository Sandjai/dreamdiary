import { useSelector, useDispatch } from "react-redux";
import { selectDreamByID } from "../../store/dream/selectors";
import { DreamsPageSlice } from "../../store/dreamspage/index";

import {
  selectID,
  selectate,
  selectType,
} from "../../store/dreamspage/selectors";

import { NavLink } from "react-router-dom";
import classnames from "classnames";
import styles from "./styles.module.css";
import { Button } from "../Button/Button";

export const DreamTab = ({ dreamid, setdreamid, selecteddreamid }) => {
  const dispatch = useDispatch();

  return (
    <Button
      key={dreamid}
      selectedIndex={selecteddreamid}
      onClick={() => {
        setdreamid(dreamid);
      }}
    >
      {dreamid}
    </Button>
  );
};
