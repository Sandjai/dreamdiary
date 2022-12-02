export const SIZES = {
  l: "l",
  m: "m",
  s: "s",
};


export const monthsInRU = ["январь", "февраль", "март", "апрель", "май", "июнь", "июль", "август", "сентябрь", "октябрь", "ноябрь", "декабрь"];

export const dreamType = (type) => {

  switch (type) {
    case "Вещий сон":
    return 'prophetic';
    case "Кошмар":
      return 'nightmare';
      case "Люцидник":
    return 'lucid';
    case "Обычный сон":
    return 'simple';
    case "Осознанный сон":
    return 'os';
    default:
      return 'simple';
  }



}