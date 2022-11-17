import { LoadingStatuses } from "../constants/loadingStatuses";

export const selectDreamModule = (state) => state.dream;

export const selectDreamsIDs = (state) => selectDreamModule(state).ids;

export const selectDreamsEntities = (state) => selectDreamModule(state).entities;

export const selectDreamsDate = (state) => selectDreamModule(state).timestamp;


export const selectDreams = (state, {date}) => Object.values(selectDreamsByDate(state, {datestamp: new Date(date)}));


export const selectDreamsNames = (state, {date}) => (Object.values(selectDreamsByDate(state, {date}))).map((item)=>item.name);

export const selectDreamByID = (state,  {dreamid} ) => selectDreamModule(state).entities[dreamid];

export const selectDreamsByDate = (state, {datestamp}) => {

    return Object.entries(selectDreamsEntities(state)).filter(([key, val])=> { return (
    
        new Date(datestamp).getDate() === new Date(val.time).getDate() &&
        new Date(datestamp).getMonth() === new Date(val.time).getMonth() &&
        new Date(datestamp).getFullYear() === new Date(val.time).getFullYear())    
    
    });
    
    }




export const selectDreamNameByID = (state,  {dreamid} ) => selectDreamModule(state).entities[dreamid].name;

export const selectDreamDescriptionByID = (state,  {dreamid} ) => selectDreamModule(state).entities?.[dreamid]?.description;

export const selectDreamsLoading = (state) => (selectDreamModule(state)?.status ===  LoadingStatuses.inProgress) ? true : false;


