import { useField } from "formik";
import styles from "./styles.module.css";

export const CustomInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <div className={styles.blockLabel}>
      <label htmlFor={props.id || props.name}>{label}</label>
      <input {...field} {...props} />
      {meta.touched && meta.error && (
        <div className={styles.error}>{meta.error}</div>
      )}
    </div>
  );
};
