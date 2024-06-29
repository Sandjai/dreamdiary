export const SIZES = {
  l: "large",
  m: "medium",
  s: "small",
};

export const monthsInRU = [
  "январь",
  "февраль",
  "март",
  "апрель",
  "май",
  "июнь",
  "июль",
  "август",
  "сентябрь",
  "октябрь",
  "ноябрь",
  "декабрь",
];

export const dreamType = (type) => {
  switch (type) {
    case "Вещий сон":
      return "prophetic";
    case "Кошмар":
      return "nightmare";
    case "Люцидник":
      return "lucid";
    case "Обычный сон":
      return "simple";
    case "Осознанный сон":
      return "os";
    default:
      return "simple";
  }
};

export const dreamTypeCF = (type) => {
  console.log(type);
  switch (type) {
    case "prophetic":
      return "Вещий сон";
    case "nightmare":
      return "Кошмар";
    case "lucid":
      return "Люцидник";
    case "simple":
      return "Обычный сон";
    case "os":
      return "Осознанный сон";
    default:
      return "Обычный сон";
  }
};
