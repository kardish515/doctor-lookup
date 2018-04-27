class ApiCall {
  getData(userInput, displayData) {
    let promise = new Promise(function(resolve, reject) {
      let request = new XMLHttpRequest();
      let url = `https://api.betterdoctor.com/2016-03-01/doctors?name=${userInput}&location=45.5231%2C-122.6765%2C100&user_location=45.5231%2C-122.6765&skip=0&limit=10&user_key=26c08aa36ece8a43fcc46338c45a6f31`
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
