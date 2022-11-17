import { LoadingStatuses } from "../constants/loadingStatuses";

export const selectDreamModule = (state) => state.dream;

export const selectDreamsIDs = (state) => selectDreamModule(state).ids;

export const selectDreamsEntities = (state) => selectDreamModule(state).entities;

export const selectDreamsDate = (state) => selectDreamModule(state).timestamp;


export const selectDreams = (state, {date}) => Object.values(selectDreamsByDate(state, {datestamp: new Date(date)}));

export const selectSelectedDreamID = (state) => selectDreamModule(state).selectedDream;


export const selectDreamsNames = (state, {date}) => (Object.values(selectDreamsByDate(state, {date}))).map((item)=>item.name);

export const selectDreamByID = (state,  {dreamID} ) => selectDreamModule(state).entities[dreamID];

export const selectDreamsByDate = (state, {datestamp}) => {

    return Object.entries(selectDreamsEntities(state)).filter(([key, val])=> { return (
    
        new Date(datestamp).getDate() === new Date(val.time).getDate() &&
        new Date(datestamp).getMonth() === new Date(val.time).getMonth() &&
        new Date(datestamp).getFullYear() === new Date(val.time).getFullYear())
    
    
    });
    
    }




export const selectDreamNameByID = (state,  {dreamID} ) => selectDreamModule(state).entities[dreamID].name;

export const selectDreamDescriptionByID = (state,  {dreamID} ) => selectDreamModule(state).entities?.[dreamID]?.description;

export const selectDreamsLoading = (state) => (selectDreamModule(state)?.status ===  LoadingStatuses.inProgress) ? true : false;


