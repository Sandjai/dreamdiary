export const selectDreamspageModule = (state) => state.dreamspage;



export const selectDate = (state) => selectDreamspageModule(state).date;
export const selectID = (state) => selectDreamspageModule(state).ID;
export const selectType = (state) => selectDreamspageModule(state).type;