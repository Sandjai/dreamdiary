import styles from "./styles.module.css";
import classnames from "classnames";
import { formatDate } from "../../utils/formatDate";
import { DreamTabs } from "../DreamTabs/DreamTabs";
import { useParams } from "react-router-dom";

export const Header = ({ children }) => {
  return <div className={classnames(styles.hero)}>{children}</div>;
};
