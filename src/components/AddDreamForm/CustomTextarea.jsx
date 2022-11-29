import { useField } from "formik";
import styles from "./styles.module.css";

export const CustomTextarea = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <div className={styles.blockLabel}>
      <label htmlFor={props.id || props.name}>{label}</label>
      <textarea rows="20" {...field} {...props}></textarea>

      {meta.touched && meta.error && (
        <div className={styles.error}>{meta.error}</div>
      )}
    </div>
  );
};
