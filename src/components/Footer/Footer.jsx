import styles from "./styles.module.css";
import classnames from "classnames";

export const Footer = ({ children, className, onClick }) => {
  return (
    <div onClick={onClick} className={classnames(styles.root, className)}>
      Footer
      <br />
      {/*children*/}
    </div>
  );
};
