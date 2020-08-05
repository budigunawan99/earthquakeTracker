import TimeEq from "./time-eq.js";
class DataEq {
      static searchBy(magnitude) {
            let today = TimeEq.getDay().today;
            let start = TimeEq.getDay().start;
            return fetch(`https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=${start}&endtime=${today}&minmagnitude=${magnitude}`)
                  .then(response => {
                        return response.json()
                  })
                  .then(responseJson => {
                        console.log(responseJson.features)
                        if (responseJson.features != "") {
                              return Promise.resolve(responseJson.features);
                        } else {
                              return Promise.reject(`Earthquake with minimum magnitude ${magnitude} mag is not found`);
                        }
                  })

      }

}

export default DataEq;