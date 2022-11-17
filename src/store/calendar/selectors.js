

export const selectCalendarModule = (state) => state.calendar;

export const selectedDate = (state) => selectCalendarModule(state).selectedDate;