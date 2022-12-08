import { nanoid } from "nanoid";
import { AddDreamForm } from "../../components/AddDreamForm/AddDreamForm";
import styles from "./styles.module.css";

export const NewDreamPage = () => {
  return (
    <>
      <div className={styles.content}>
        <div className={styles.contentWrapper}>
          <AddDreamForm className={styles.form} />
        </div>
      </div>
    </>
  );
};
