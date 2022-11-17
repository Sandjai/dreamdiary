export const formatDate = (date, {dateStyle}) => {
    return date.toLocaleString('ru-RU', {dateStyle: dateStyle})
  }