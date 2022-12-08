import styles from "./styles.module.css";
import classnames from "classnames";

export const Footer = ({ children, className, onClick }) => {
  return (
    <div onClick={onClick} className={classnames(styles.footer, className)}>
      {/* <Link> Условия пользования </Link>
      <Link> Вики- странички </Link>
      <Link> Контакты </Link>
      <br />
      {*/}
      Footer
    </div>
  );
};
