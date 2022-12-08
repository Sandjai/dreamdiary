export const selectNotificationModule = (state) => state.notification;
export const selectIfIsShown = (state) => selectNotificationModule(state).isShown;
export const selectMessage = (state) => selectNotificationModule(state).message;
export const selectMessageType = (state) => selectNotificationModule(state).type;
export const selectDuration = (state) => selectNotificationModule(state).duration;
