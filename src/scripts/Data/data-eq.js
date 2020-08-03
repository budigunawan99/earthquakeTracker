class DataEq{
      static searchClub(magnitude){
          return fetch(`https://earthquake.usgs.gov/fdsnws/event/1/query?format=xml&starttime=2014-01-01&endtime=2014-01-02&minmagnitude=${magnitude}`)
          .then(response => {
              return response.json()
          })
          .then(responseJson => {
              if(responseJson.teams){
                  return Promise.resolve(responseJson.teams);
              }else{
                  return Promise.reject(`${keyword} is not found`);
              }
          })
      }
  
  }
  
  export default DataEq;