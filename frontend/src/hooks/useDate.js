const useDate = () => {
    
    
    const getDay = (input) =>{
        let day = "";
        switch (new Date(`${input}T00:00:00`).getDay()) {
            case 0:
               day = "Sunday";
              break;
            case 1:
               day = "Monday";
              break;
            case 2:
               day = "Tuesday";
              break;
            case 3:
              day = "Wednesday";
              break;
            case 4:
              day = "Thursday";
              break;
            case 5:
              day = "Friday";
              break;
            case 6:
              day = "Saturday";
          };
          return day
    }

    const getMonth = (input) => {
        let day = ''
        switch (new Date(`${input}T00:00:00`).getMonth()) {
            case 0:
               day = "January";
              break;
            case 1:
               day = "February";
              break;
            case 2:
               day = "March";
              break;
            case 3:
              day = "April";
              break;
            case 4:
              day = "May";
              break;
            case 5:
              day = "June";
              break;
            case 6:
              day = "July";
            case 7:
              day = "August";
            case 8:
              day = "September";
            case 9:
              day = "October";
            case 10:
              day = "November";
            case 11:
              day = "December";
          };
          return day
    }
    
    
    const getDateString = (input) => {
        let day = getDay(input);
        let month = getMonth(input)
        let result = `${day}, ${month} ${new Date(`${input}T00:00:00`).getDate()}`;
        return result

    }
    
    return [getDateString]
}
 
export default useDate;