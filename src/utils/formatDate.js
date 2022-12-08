export const formatDate = (date, {dateStyle}) => {

  if (dateStyle === 'monthYear') {
 
   const month = new Date(date).getMonth() + 1;
   const year = new Date(date).getFullYear();
 
 
   return (month + '-' + year);
  }
     return date.toLocaleString('ru-RU', {dateStyle: dateStyle})
   }