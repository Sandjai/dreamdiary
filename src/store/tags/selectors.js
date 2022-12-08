export const selectTagsModule = (state) => state.tags;
export const selectAllTypes = (state) => selectTagsModule(state).allTypes;

export const selectAllTagsByMonthYear = (state,  {monthYear} ) => selectTagsModule(state).allTypes[monthYear];
