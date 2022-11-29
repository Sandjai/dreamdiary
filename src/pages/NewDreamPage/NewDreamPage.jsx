import { nanoid } from "nanoid";
import { AddDreamForm } from "../../components/AddDreamForm/AddDreamForm";
import styles from "./styles.module.css";

export const NewDreamPage = () => {
  return (
    <>
      <div className={styles.root}>
        <div className={styles.content}>
          <div className={styles.contentWrapper}>
            <div className={styles.hero}>
              <h1>Добавить сон</h1>
            </div>
            <AddDreamForm className={styles.form} />
          </div>
        </div>
      </div>
    </>
  );
};
