class TimeEq{
      static getDay(){
            let today = new Date();
            let dd = String(today.getDate()).padStart(2, '0');
            let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
            let mmr = String(today.getMonth()).padStart(2, '0');
            let yyyy = today.getFullYear();
            today = `${yyyy}-${mm}-${dd}`;
            let start = `${yyyy}-${mmr}-${dd}`;
            let data = {
                  start: start,
                  today: today
            }
            return data;
      }
}
export default TimeEq;