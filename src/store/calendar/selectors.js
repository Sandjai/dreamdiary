import { LoadingStatuses } from "../constants/loadingStatuses";

export const selectCalendarModule = (state) => state.calendar;

export const ifHaveDreamsOnDate = (state, { date }) =>
  Object.values(selectDreamsByDate(state, { datestamp: new Date(date) }))
    .length !== 0;

export const selectDreamsEntities = (state) =>
  selectCalendarModule(state).entities;

export const selectDreamsDate = (state) => selectCalendarModule(state).date;

export const selectDreams = (state, { date }) =>
  Object.values(selectDreamsByDate(state, { datestamp: new Date(date) }));

//export const selectDreamsNames = (state, {date}) => (Object.values(selectDreamsByDate(state, {date}))).map((item)=>item.name);
export const selectDreamNameById = (state, { dreamid }) =>
  selectDreamsEntities(state)[dreamid]["name"];

export const selectDreamByID = (state, { dreamid }) =>
  selectCalendarModule(state).entities[dreamid];

export const selectDreamsByDate = (state, { datestamp }) => {
  return Object.entries(selectDreamsEntities(state)).filter(([key, val]) => {
    return (
      new Date(datestamp).getDate() === new Date(val.time).getDate() &&
      new Date(datestamp).getMonth() === new Date(val.time).getMonth() &&
      new Date(datestamp).getFullYear() === new Date(val.time).getFullYear()
    );
  });
};

export const selectMonths = (state, monthYear) => {
  if (!monthYear) {
    return state.months;
  } else {
    return selectCalendarModule(state).months.includes(monthYear);
  }
};

export const selectDreamNameByID = (state, { dreamid }) =>
  selectCalendarModule(state).entities[dreamid].name;

export const selectDreamDescriptionByID = (state, { dreamid }) =>
  selectCalendarModule(state).entities?.[dreamid]?.description;

export const selectDreamTypeByID = (state, { dreamid }) =>
  selectCalendarModule(state).entities?.[dreamid]?.type;

export const selectDreamsLoading = (state) =>
  selectCalendarModule(state)?.status === LoadingStatuses.inProgress
    ? true
    : false;

export const selectDate = (state) => selectCalendarModule(state).date;

export const selectDreamsIDs = (state, { monthYear }) => {
  const ids = selectCalendarModule(state).ids;
  for (let item of ids) {
    if (item.hasOwnProperty(monthYear)) {
      return item[monthYear];
    }
  }
};
