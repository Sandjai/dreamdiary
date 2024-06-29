import { Form, Formik } from "formik";
import { CustomInput } from "./CustomInput";
import { CustomSelect } from "./CustomSelect";
import { CustomTextarea } from "./CustomTextarea";
import classnames from "classnames";
import { LinksService } from "../../services/links.service";
import { AddDreamFormSlice } from "../../store/addDreamForm";
import { CalendarSlice } from "../../store/calendar";
import { normolize } from "../../store/utils/normolize";
import { formatDate } from "../../utils/formatDate";

import styles from "./styles.module.css";
import { useDispatch } from "react-redux";
import { TagsSlice } from "../../store/tags";
import { Button_custom } from "../Button/Button";
import { SIZES } from "../../constants/ui";
import { useParams } from "react-router-dom";
import { NotificationSlice } from "../../store/notification";

const validate = (values) => {
  const errors = {};
  if (values.time?.length === 0) {
    errors.time = "Пожалуйста, выбери дату";
  }
  if (values.name?.length === 0) {
    errors.name = "Пожалуйста, укажи название сна";
  }

  if (values.description?.length === 0) {
    errors.description = "Пожалуйста, добавь описание сна";
  }

  if (values.type?.length === 0) {
    errors.type = "Пожалуйста, выбери тип сна";
  }

  return errors;
};

export const AddDreamForm = ({ className }) => {
  const dispatch = useDispatch();
  const { datestring } = useParams();
  const initialValue = {
    time: datestring,
    name: "",
    description: "",
    type: "",
  };

  return (
    <div className={classnames(className, styles.root)}>
      <h3>Добавить сон</h3>
      <Formik
        initialValues={initialValue}
        validate={validate}
        onSubmit={(values, { resetForm }) => {
          LinksService.putData(
            values,
            (key) => {
              dispatch(
                NotificationSlice.actions.showNotification({
                  isShown: true,
                  text: "Сон успешно сохранён!",
                  messageType: "success",
                  duration: 1500,
                })
              );
              const monthYear = formatDate(values.time, {
                dateStyle: "monthYear",
              });
              dispatch(
                CalendarSlice.actions.addDream({ key, values, monthYear })
              );
              dispatch(TagsSlice.actions.addDream({ values, monthYear }));

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

          <Button_custom type="submit" size={SIZES.m}>
            Отправить
          </Button_custom>
        </Form>
      </Formik>
    </div>
  );
};
