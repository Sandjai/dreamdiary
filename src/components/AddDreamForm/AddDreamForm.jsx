import { Form, Formik } from "formik";
import { CustomInput } from "./CustomInput";
import { CustomSelect } from "./CustomSelect";
import { CustomTextarea } from "./CustomTextarea";
import classnames from "classnames";
import { LinksService } from "../../services/links.service";
import { AddDreamFormSlice } from "../../store/addDreamForm";
import { CalendarSlice } from "../../store/calendar";
import { normolize } from "../../store/utils/normolize";

import styles from "./styles.module.css";
import { useDispatch } from "react-redux";

const validate = (values) => {
  const errors = {};
  if (values.time?.length === 0) {
    errors.time = "Пожалуйста, выберите дату";
  }
  if (values.name?.length === 0) {
    errors.name = "Пожалуйста, укажите название сна";
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
  time: "",
  name: "",
  description: "",
  type: "",
};

export const AddDreamForm = ({ className }) => {
  const dispatch = useDispatch();
  return (
    <div className={classnames(className, styles.root)}>
      <Formik
        initialValues={initialValue}
        validate={validate}
        onSubmit={(values, { resetForm }) => {
          LinksService.putData(
            values,
            (key) => {
              //  dispatch(AddDreamFormSlice.actions.successLoading)},
              const monthYear =
                new Date(values.time).getMonth() +
                1 +
                "-" +
                new Date(values.time).getFullYear();
              dispatch(
                CalendarSlice.actions.addDream({ key, values, monthYear })
              );
              alert("Сон успешн сохранён!");
              resetForm({ values: initialValue });
            },
            (error) => alert("Произошла ошибка при сохранении: " + error),
            new Date(values.time).getFullYear(),
            new Date(values.time).getMonth()
          );
        }}
      >
        <Form>
          <CustomInput label="Дата" name="time" type="date" />
          <CustomInput label="Название сна" name="name" type="text" />
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
