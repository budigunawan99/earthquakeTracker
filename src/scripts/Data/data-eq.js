import TimeEq from "./time-eq.js";
class DataEq {
      static searchBy(magnitude) {
            let today = TimeEq.getDay().today;
            let start = TimeEq.getDay().start;
            return fetch(`https://earthquake.usgs.gov/fdsnws/event/1/query?format=xml&starttime=${start}&endtime=${today}&minmagnitude=${magnitude}`)
                  .then(response => {
                        return response.json()
                  })
                  .then(responseJson => {
                        if (responseJson.teams) {
                              return Promise.resolve(responseJson.teams);
                        } else {
                              return Promise.reject(`${keyword} is not found`);
                        }
                  })
      }

}

export default DataEq;