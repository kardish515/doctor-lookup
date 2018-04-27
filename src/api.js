class ApiCall {
  getData(userInput, displayData, latitude, longitude) {
    let promise = new Promise(function(resolve, reject) {
      let request = new XMLHttpRequest();
      let url = `https://api.betterdoctor.com/2016-03-01/doctors?name=${userInput}&location=${latitude}%2C${longitude}%2C100&user_location=45.5231%2C-122.6765&skip=0&limit=10&user_key=${process.env.exports.apiKey}`
      request.onload = function() {
        if(this.status === 200) {
          resolve(request.response);
        } else {
          reject(Error(request.statusText));
        }
      }
      request.open("GET", url, true);
      request.send();
    });
    promise.then(function(results) {
      displayData(results)
    }, function(error) {
      return `something went wrong: ${error.message}`;
    });
  }
  getData2(userInput, displayData, latitude, longitude){
    let promise = new Promise(function(resolve, reject) {
      let request = new XMLHttpRequest();
      let url = `https://api.betterdoctor.com/2016-03-01/doctors?query=${userInput}&location=${latitude}%2C${longitude}%2C100&user_location=45.5231%2C-122.6765&skip=0&limit=10&user_key=${process.env.exports.apiKey}`
      request.onload = function() {
        if(this.status === 200) {
          resolve(request.response);
        } else {
          reject(Error(request.statusText));
        }
      }
      request.open("GET", url, true);
      request.send();
    });
    promise.then(function(results) {
      displayData(results)
    }, function(error) {
      return `something went wrong: ${error.message}`;
    });
  }
  getData3(userInput, displayData){
    let promise = new Promise(function(resolve, reject) {
      let request = new XMLHttpRequest();
      let url = `https://maps.googleapis.com/maps/api/geocode/json?address=${userInput}&key=${process.env.google_maps_api}`
      request.onload = function() {
        if(this.status === 200) {
          resolve(request.response);
        } else {
          reject(Error(request.statusText));
        }
      }
      request.open("GET", url, true);
      request.send();
    });
    promise.then(function(results) {
      displayData(results)
    }, function(error) {
      return `something went wrong: ${error.message}`;
    });
  }
}

export {ApiCall};
