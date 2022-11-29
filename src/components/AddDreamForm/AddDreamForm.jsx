import { Form, Formik } from "formik";
import { CustomInput } from "./CustomInput";
import { CustomSelect } from "./CustomSelect";
import { CustomTextarea } from "./CustomTextarea";
import classnames from "classnames";

import styles from "./styles.module.css";

const validate = (values) => {
  const errors = {};
  if (values.date?.length === 0) {
    errors.date = "Пожалуйста, выберите дату";
  }
  if (values.title?.length === 0) {
    errors.title = "Пожалуйста, укажите название сна";
  }

  if (values.description?.length === 0) {
    errors.description = "Пожалуйста, добавьте описание сна";
  }

  if (values.type?.length === 0) {
    errors.type = "Пожалуйста, выберите тип сна";
  }

  return errors;
};

const initialValue = {
  date: "",
  title: "",
  description: "",
  type: "",
};

export const AddDreamForm = ({ className }) => {
  return (
    <div className={classnames(className, styles.root)}>
      <Formik
        initialValues={initialValue}
        validate={validate}
        onSubmit={(values, { resetForm }) => {
          console.log(values);
          resetForm({ values: initialValue });
        }}
      >
        <Form>
          <CustomInput label="Дата" name="date" type="date" />
          <CustomInput label="Название сна" name="title" type="text" />
          <CustomSelect
            label="Тип сна"
            name="type"
            options={[
              "Вещий сон",
              "Кошмар",
              "Люцидник",
              "Обычный сон",
              "Осознанный сон",
            ]}
          />
          <CustomTextarea label="Описание сна" name="description" />

          <button type="submit">Отправить</button>
        </Form>
      </Formik>
    </div>
  );
};
