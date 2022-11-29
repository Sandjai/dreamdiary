export const getDateString = (date)=> {

    date = date ? new Date(date) : new Date();   

    return new Intl.DateTimeFormat("ru-RU")
      .format(date)
      .split(".")
      .reverse()
      .join("-");
    
}