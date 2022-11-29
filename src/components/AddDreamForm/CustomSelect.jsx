import { useField } from "formik";
import styles from "./styles.module.css";

export const CustomSelect = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <div className={styles.blockLabel}>
      <label htmlFor={props.id || props.name}>{label}</label>
      <select {...field} {...props}>
        <option value="" disabled="disabled">
          -- Выберите --
        </option>
        {props.options.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>
      {meta.touched && meta.error && (
        <div className={styles.error}>{meta.error}</div>
      )}
    </div>
  );
};
